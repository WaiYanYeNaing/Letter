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
  Container
} from 'native-base'

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../assets/images/1.jpg')
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../assets/images/2.jpg')
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../assets/images/3.jpg')
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('../assets/images/4.jpg')
  }
]

export default class Second extends Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: '#F0F6F7FF', height: 500, padding: 10 }}
      >
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    )
  }
}
