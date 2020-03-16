import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  Container,
  Icon,
  Body,
  Thumbnail,
  ListItem,
  Left,
  Button,
  Right,
  Badge,
  Fab
} from 'native-base'
import gStyles from '../GlobalStyle/gStyles'

export default class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Thumbnail
          style={[styles.thumbnail, gStyles.center]}
          large
          source={this.props.route.params?.profile_img}
        />
        <Text
          style={[
            { marginTop: 40, fontFamily: 'notoSerif-bold' },
            gStyles.center
          ]}
        >
          {this.props.route.params?.name}
        </Text>
        <View style={styles.ListItemContainer}>
          <ListItem icon style={{ marginVertical: 5 }}>
            <Left>
              <Icon type="MaterialCommunityIcons" name="cellphone-text" />
            </Left>
            <Body>
              <Text>Letter Received</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#bababa' }}>
                <Text style={{ paddingTop: 3 }}>
                  {this.props.route.params?.received_letter}
                </Text>
              </Badge>
            </Right>
          </ListItem>
          {true ? (
            <ListItem icon style={{ marginVertical: 5 }}>
              <Left>
                <Icon type="Ionicons" name="md-person-add" />
              </Left>
              <Body>
                <Text>Add Request</Text>
              </Body>
              <Right>
                <Badge style={{ backgroundColor: '#bababa' }}>
                  <Text style={{ paddingTop: 3 }}>0</Text>
                </Badge>
              </Right>
            </ListItem>
          ) : null}
          <ListItem icon style={{ marginVertical: 5 }}>
            <Left>
              <Icon type="MaterialIcons" name="people" />
            </Left>
            <Body>
              <Text>Friends</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#bababa' }}>
                <Text style={{ paddingTop: 3 }}>
                  {this.props.route.params?.friends}
                </Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem icon style={{ marginVertical: 5 }}>
            <Left>
              <Icon type="FontAwesome" name="language" />
            </Left>
            <Body>
              <Text>Languages</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#bababa' }}>
                <Text style={{ paddingTop: 3 }}>
                  {this.props.route.params?.languages}
                </Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem icon style={{ marginVertical: 5 }}>
            <Left>
              <Icon type="FontAwesome5" name="birthday-cake" />
            </Left>
            <Body>
              <Text>Ages</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#bababa' }}>
                <Text style={{ paddingTop: 3 }}>
                  {this.props.route.params?.ages}
                </Text>
              </Badge>
            </Right>
          </ListItem>
          {true ? (
            <ListItem icon style={{ marginVertical: 5 }}>
              <Left>
                <Icon type="MaterialIcons" name="settings" />
              </Left>
              <Body>
                <Text>Settings</Text>
              </Body>
              <Right></Right>
            </ListItem>
          ) : null}
        </View>
        <View style={{ flex: 1 }}>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => alert('Edit Mode is Now running!', '', 'OK')}
          >
            <Icon type="AntDesign" name="edit" />
          </Fab>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E2EF'
  },
  thumbnail: {
    marginTop: 50,
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#836aa3'
  },
  ListItemContainer: {
    marginTop: 40,
    paddingHorizontal: 50
  }
})
