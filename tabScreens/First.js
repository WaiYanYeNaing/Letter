import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { ListItem, Right, Icon, Left } from 'native-base'
import firebase from 'firebase'
import Category from '../components/Category'

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
    console.log('HOLA', data)
    await firebase
      .database()
      .ref('todos/' + data.key)
      .set(null)
    this.props.getAll()
  }
  render() {
    return (
      // <View>
      //   {this.props.listViewData.map((value, index) => {
      //     return (
      //       <ListItem key={index}>
      //         <Left>
      //           <Text>{value.val().name}</Text>
      //         </Left>
      //         {/* <Right>
      //           <TouchableOpacity onPress={() => this.addRow(data)}>
      //             <Icon name="information-circle" style={{ color: 'black' }} />
      //           </TouchableOpacity>
      //         </Right> */}
      //         <Right>
      //           <TouchableOpacity onPress={() => this.deleteRow(value)}>
      //             <Icon name="trash" style={{ color: 'black' }} />
      //           </TouchableOpacity>
      //         </Right>
      //       </ListItem>
      //     )
      //   })}
      // </View>
      <View>
        <ScrollView>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.props.listViewData.map((value, index) => {
                return (
                  <Category
                    key={index}
                    value={value}
                    header="Header"
                    text={value.val().name}
                    deleteRow={this.deleteRow}
                  />
                )
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
