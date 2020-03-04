import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ListItem, Right, Icon, Left } from 'native-base'
import firebase from 'firebase'

export default class First extends Component {
  addRow(data) {
    let key = firebase
      .database()
      .ref('todos')
      .push().key
    firebase
      .database()
      .ref('todos')
      .child(key)
      .set({ name: data })
  }

  async deleteRow(data) {
    let self = this
    await firebase
      .database()
      .ref('todos/' + data.key)
      .set(null)
    self.props.getAll()
  }
  render() {
    return (
      <View>
        {this.props.listViewData.map((value, index) => {
          return (
            <ListItem key={index}>
              <Left>
                <Text>{value.val().name}</Text>
              </Left>
              {/* <Right>
                <TouchableOpacity onPress={() => this.addRow(data)}>
                  <Icon name="information-circle" style={{ color: 'black' }} />
                </TouchableOpacity>
              </Right> */}
              <Right>
                <TouchableOpacity onPress={() => this.deleteRow(value)}>
                  <Icon name="trash" style={{ color: 'black' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>
          )
        })}
      </View>
    )
  }
}
