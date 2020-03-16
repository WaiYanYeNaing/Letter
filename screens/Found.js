import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {
  Container,
  Icon,
  Card,
  CardItem,
  Body,
  ListItem,
  CheckBox,
  Right,
  Left,
  Button
} from 'native-base'
import gStyles from '../GlobalStyle/gStyles'

export default class Found extends Component {
  state = {
    users: [
      {
        name: 'Jhon',
        city: 'New York',
        check: false
      },
      {
        name: 'Doe',
        city: 'Bangkok',
        check: true
      },
      {
        name: 'Cena',
        city: 'Yangon',
        check: false
      }
    ]
  }

  checkHandler = i => {
    console.log('Hola')
    let temp = this.state.users
    temp[i].check = !temp[i].check
    this.setState({
      user: temp[i].check
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.textFound}>
          <Icon name="tv" style={{ fontSize: 90 }} />
        </Text>
        <Text style={styles.textFound}>
          Found {this.state.users.length} Match
        </Text>
        <Card>
          <CardItem style={gStyles.card}>
            <Body>
              {this.state.users.map((user, index) => {
                return (
                  <ListItem
                    key={index}
                    style={{
                      borderBottomWidth: 0,
                      width: '100%',
                      paddingRight: 30
                    }}
                  >
                    <Left>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Profile', {
                              received_letter: 9,
                              friends: 1,
                              languages: ['English'],
                              ages: 22,
                              profile_img: require('../assets/images/2.jpg')
                            })
                          }
                        >
                          <Text style={{ paddingVertical: 10 }}>
                            <Icon type="FontAwesome" name="user-secret" />{' '}
                            &nbsp;
                            {user.name}
                          </Text>
                        </TouchableOpacity>
                        <Text>
                          <Icon type="FontAwesome5" name="city" /> &nbsp;
                          {user.city}
                        </Text>
                      </View>
                    </Left>
                    <Right>
                      <CheckBox
                        checked={user.check}
                        onPress={() => this.checkHandler(index)}
                      />
                    </Right>
                  </ListItem>
                )
              })}
            </Body>
          </CardItem>
        </Card>
        <Button block rounded style={styles.buttonSubmit}>
          <Text style={{ color: 'white' }}>Send to selected users</Text>
          <Icon
            type="FontAwesome"
            name="send"
            style={{ fontSize: 20, color: 'white', marginTop: 2 }}
          />
        </Button>
        <Button
          block
          rounded
          style={styles.buttonCancel}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Cancel</Text>
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E2EF'
  },
  textFound: {
    fontFamily: 'notoSerif-bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  buttonSubmit: {
    backgroundColor: '#9381FF',
    marginVertical: 24,
    marginHorizontal: 10
  },
  buttonCancel: {
    backgroundColor: '#E1E2EF',
    marginHorizontal: 10
  }
})
