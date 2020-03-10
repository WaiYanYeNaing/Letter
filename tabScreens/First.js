import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import { ListItem, Right, Icon, Left, Container } from 'native-base'
import firebase from 'firebase'
import Category from '../components/Category'

export default class First extends Component {
  state = {
    letters: [
      {
        name: 'Nikola',
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: 'March 21, 2020 3:45 PM',
        location: 'New York'
      },
      {
        name: 'Tesla',
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        date: 'March 21, 2020 3:45 PM',
        location: 'Hong Kong'
      },
      {
        name: 'Steven',
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: 'March 21, 2020 3:45 PM',
        location: 'NewYork'
      },
      {
        name: 'Bill',
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: 'March 21, 2020 3:45 PM',
        location: 'NewYork'
      }
    ]
  }

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
      // <View>
      //   <ScrollView>
      //     <View>
      //       <ScrollView
      //         horizontal={true}
      //         showsHorizontalScrollIndicator={false}
      //       >
      //         {this.props.listViewData.map((value, index) => {
      //           return (
      //             <Category
      //               key={index}
      //               value={value}
      //               header="Header"
      //               text={value.val().name}
      //               deleteRow={this.deleteRow}
      //             />
      //           );
      //         })}
      //       </ScrollView>
      //     </View>
      //   </ScrollView>
      // </View>

      <Container style={styles.container}>
        <Text style={styles.textManual}>
          <Icon type="FontAwesome5" name="wpforms" style={{ fontSize: 90 }} />
        </Text>
        <Text style={styles.textManual}>Recently Received</Text>
        <View>
          <ScrollView>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {this.state.letters.map((value, index) => {
                  return (
                    <Category
                      key={index}
                      value={value}
                      header={value.name}
                      text={value.text}
                      date={value.date}
                      location={value.location}
                      deleteRow={this.deleteRow}
                      navigation={this.props.navigation}
                    />
                  )
                })}
              </ScrollView>
            </View>
          </ScrollView>
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
    backgroundColor: '#E1E2EF',
    height: 'auto'
  }
})
