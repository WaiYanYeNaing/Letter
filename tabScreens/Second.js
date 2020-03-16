import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Container,
  Button,
  Grid,
  Col,
  Badge
} from 'native-base'

export default class Second extends Component {
  state = {
    room: [{ roomID: '' }]
  }

  render() {
    return (
      <View>
        <Grid>
          <Col>
            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Chat', { roomID: 'r1' })
              }
            >
              <Body style={{ marginTop: 15 }}>
                <Thumbnail large source={require('../assets/images/1.jpg')} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 20, fontSize: 13 }}>
                    Nikola Tesla
                  </Text>
                  <Badge style={styles.badge}></Badge>
                </View>
              </Body>
            </Button>
          </Col>
          <Col>
            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Chat', { roomID: 'r2' })
              }
            >
              <Body style={{ marginTop: 15 }}>
                <Thumbnail large source={require('../assets/images/2.jpg')} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 20, fontSize: 13 }}>
                    Thomas Edison
                  </Text>
                  <Badge style={styles.badge}></Badge>
                </View>
              </Body>
            </Button>
          </Col>
        </Grid>
        <Grid>
          <Col>
            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Chat', { roomID: 'r3' })
              }
            >
              <Body style={{ marginTop: 15 }}>
                <Thumbnail large source={require('../assets/images/3.jpg')} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 20, fontSize: 13 }}>Leonardo</Text>
                  <Badge style={styles.badge}></Badge>
                </View>
              </Body>
            </Button>
          </Col>
          <Col>
            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Chat', { roomID: 'r4' })
              }
            >
              <Body style={{ marginTop: 15 }}>
                <Thumbnail large source={require('../assets/images/4.jpg')} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 20, fontSize: 13 }}>Jackie</Text>
                  <Badge style={styles.badge}></Badge>
                </View>
              </Body>
            </Button>
          </Col>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    marginTop: 21,
    marginLeft: 10,
    width: 16,
    height: 16,
    backgroundColor: '#00e00e'
  },
  button: {
    borderRadius: 5,
    height: 170,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
