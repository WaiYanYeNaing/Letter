import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  Container,
  Textarea,
  Button,
  Icon,
  Card,
  CardItem,
  Body
} from 'native-base'
import gStyles from '../GlobalStyle/gStyles'

export default class Write extends Component {
  ButtonCurrent = () => {
    if (this.props.route.params?.type == 'reply') {
      return (
        <Button
          block
          style={styles.button}
          rounded
          light
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={{ color: 'white' }}>Send</Text>
          <Icon
            type="Ionicons"
            name="ios-send"
            style={{ fontSize: 20, color: 'white' }}
          />
        </Button>
      )
    } else {
      return (
        <Button
          block
          style={styles.button}
          rounded
          light
          onPress={() => this.props.navigation.navigate('Found')}
        >
          <Text style={{ color: 'white' }}>Begin Matching</Text>
          <Icon
            type="AntDesign"
            name="find"
            style={{ fontSize: 20, color: 'white', marginTop: 2 }}
          />
        </Button>
      )
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.textManual}>
          <Icon
            type="SimpleLineIcons"
            name="envelope-letter"
            style={{ fontSize: 90 }}
          />
        </Text>
        <Text style={styles.textManual}>Write</Text>
        <Card>
          <CardItem style={gStyles.card}>
            <Body>
              <View style={styles.textarea}>
                <Textarea
                  rowSpan={11}
                  placeholder="Tap here to begin writing..."
                />
              </View>
            </Body>
          </CardItem>
        </Card>
        <View style={styles.buttonContainer}>{this.ButtonCurrent()}</View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  textManual: {
    fontFamily: 'notoSerif-bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  container: {
    backgroundColor: '#E1E2EF'
  },
  textarea: {
    padding: 26
  },
  buttonContainer: {
    marginVertical: 24,
    marginHorizontal: 10
  },
  button: {
    paddingLeft: 15,
    backgroundColor: '#9381FF',
    justifyContent: 'center'
  }
})
