import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Container,
  Button
} from 'native-base'

export default class Second extends Component {
  render() {
    return (
      <View>
        <Button
          style={{
            width: 140,
            justifyContent: 'center',
            backgroundColor: '#5b7fff'
          }}
          onPress={() =>
            this.props.navigation.navigate('Chat', { receivedUser: 'user1' })
          }
        >
          <Text>HOLA</Text>
        </Button>
        <Button
          style={{
            width: 140,
            justifyContent: 'center',
            backgroundColor: '#4a69db'
          }}
          onPress={() =>
            this.props.navigation.navigate('Chat', { receivedUser: 'user2' })
          }
        >
          <Text>HOLA</Text>
        </Button>
        <Button
          style={{
            width: 140,
            justifyContent: 'center',
            backgroundColor: '#6c7596'
          }}
          onPress={() =>
            this.props.navigation.navigate('Chat', { receivedUser: 'user3' })
          }
        >
          <Text>HOLA</Text>
        </Button>
      </View>
    )
  }
}
