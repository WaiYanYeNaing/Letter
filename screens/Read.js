import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Container, Icon, Card, CardItem, Body, Fab, Button } from 'native-base'
import gStyles from '../GlobalStyle/gStyles'

export default class Read extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.textManual}>
          <Icon
            type="MaterialCommunityIcons"
            name="message-reply-text"
            style={{ fontSize: 90 }}
          />
        </Text>
        <Card style={gStyles.card}>
          <CardItem style={[gStyles.card, { margin: 20 }]}>
            <SafeAreaView>
              <ScrollView style={{ height: 320, padding: 13 }}>
                <Body>
                  <Text style={{ fontSize: 15 }}>
                    {this.props.route.params?.item.text}
                  </Text>
                </Body>
              </ScrollView>
            </SafeAreaView>
          </CardItem>
          <CardItem style={[gStyles.card, { margin: 20 }]}>
            <Body style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontFamily: 'notoSerif-bold' }}>
                <Icon
                  type="FontAwesome5"
                  name="user-nurse"
                  style={{ fontSize: 18 }}
                />
                &nbsp;&nbsp;&nbsp;{this.props.route.params?.item.header}
              </Text>
              <Text style={{ fontSize: 13, paddingVertical: 4 }}>
                &nbsp;&nbsp;&nbsp;
                {this.props.route.params?.item.date}
              </Text>
              <Text style={{ fontSize: 13 }}>
                &nbsp;&nbsp;&nbsp;
                {this.props.route.params?.item.location}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <View style={{ flex: 1 }}>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() =>
              this.props.navigation.navigate('Write', { type: 'reply' })
            }
          >
            <Icon type="MaterialCommunityIcons" name="fountain-pen-tip" />
          </Fab>
        </View>
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
  }
})
