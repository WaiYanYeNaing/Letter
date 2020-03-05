import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook'
import { Container, Form, Item, Label, Input, Button, Toast } from 'native-base'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBwdG1qv1eZKC-iApnEfzd3v_qhN2ZZGZk',
  authDomain: 'letter-e7a1d.firebaseapp.com',
  databaseURL: 'https://letter-e7a1d.firebaseio.com',
  projectId: 'letter-e7a1d',
  storageBucket: 'letter-e7a1d.appspot.com'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      todos: null
    }
  }

  componentDidMount() {
    // firebase
    //   .database()
    //   .ref('todos')
    //   .once('value', data => {
    //     console.log(data.toJSON())
    //     this.setState({ todos: data.toJSON() })
    //   })
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log(user.uid)
        this.props.navigation.navigate('Home')
      }
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Please enter atleast 6 characters')
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, password),
          this.setState({
            email: '',
            password: ''
          }),
          this.props.navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            if (user) {
              this.props.navigation.navigate('Home')
            }
          },
          this.setState({
            email: '',
            password: ''
          })
        )
    } catch (error) {
      Toast.show({
        text: 'Wrong Email or Password',
        buttonText: 'Okay',
        duration: 3000
      })
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
    Facebook.initializeAsync(
      '1541396369345021',
      'react-firebase-login-register'
    )
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1541396369345021',
      {
        permissions: ['public_profile']
      }
    )
    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error)
        })
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel style={styles.textInput}>
            <Label style={{ color: '#666666' }}>Email</Label>
            <Input
              style={{ color: '#515151' }}
              autoCorrect={false}
              autoCapitalize="none"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel style={styles.textInput}>
            <Label style={{ color: '#666666' }}>Password</Label>
            <Input
              style={{ color: '#515151' }}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={{ marginTop: 40, backgroundColor: '#755139FF' }}
            full
            rounded
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button
            style={{ marginTop: 40, backgroundColor: '#343148FF' }}
            full
            rounded
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
          <Button
            style={{ marginTop: 40, backgroundColor: '#343148FF' }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}>Login With Facebook</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F0F6F7FF'
  },
  textInput: {
    borderBottomColor: '#A89C94FF',
    padding: 3
  }
})
