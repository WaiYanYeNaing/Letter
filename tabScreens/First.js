import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { ListItem, Right, Icon, Left, Container } from "native-base";
import firebase from "firebase";
import Category from "../components/Category";

export default class First extends Component {
  state = {
    letters: [
      {
        name: "Nikola",
        text: "Lorem ispum blabla bla bla bla",
        date: "23.2.2020"
      },
      {
        name: "Tesla",
        text: "Lorem ispum blabla bla bla bla",
        date: "5.7.2019"
      },
      {
        name: "Steven",
        text: "Lorem ispum blabla bla bla bla",
        date: "1.2.2020"
      },
      {
        name: "Bill",
        text: "Lorem ispum blabla bla bla bla",
        date: "23.2.2020"
      }
    ]
  };

  addRow(data) {
    let key = firebase
      .database()
      .ref("todos")
      .push().key;
    firebase
      .database()
      .ref("todos")
      .child(key)
      .set({ name: data });
  }

  async deleteRow(data) {
    let self = this;
    console.log("HOLA", data);
    await firebase
      .database()
      .ref("todos/" + data.key)
      .set(null);
    this.props.getAll();
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
                      deleteRow={this.deleteRow}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textManual: {
    fontFamily: "notoSerif-bold",
    fontSize: 23,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20
  },
  container: {
    backgroundColor: "#E1E2EF",
    height: "auto"
  }
});
