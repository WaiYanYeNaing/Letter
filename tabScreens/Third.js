import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Body, Icon, ListItem, List } from "native-base";
import gStyles from "../GlobalStyle/gStyles";
import { Dropdown } from "react-native-material-dropdown";

export default class Third extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Body style={styles.bodyContainer}>
          <Text style={styles.text1}>Choose Type</Text>
          <Text style={styles.text2}>Please select a type to Find User!</Text>
          <List>
            <ListItem
              style={[
                {
                  width: "100%",
                  backgroundColor: "#D4CBE5",
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15
                }
              ]}
              itemDivider
            >
              <Text style={[styles.text3, gStyles.center]}>Auto Find</Text>
            </ListItem>
          </List>
          <Text style={{ marginVertical: 10 }}>
            *This feature will find random users
          </Text>
          <Button
            rounded
            style={styles.button1}
            onPress={() => this.props.navigation.navigate("Write")}
          >
            <Icon type="FontAwesome" name="random" style={{ fontSize: 50 }} />
          </Button>
          <List style={{ marginTop: 40 }}>
            <ListItem
              style={[
                {
                  width: "100%",
                  backgroundColor: "#D4CBE5",
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15
                }
              ]}
              itemDivider
            >
              <Text style={[styles.text3, gStyles.center]}>Manual Find</Text>
            </ListItem>
          </List>
          <Text style={{ marginVertical: 10 }}>
            *This feature will find custom users
          </Text>
          <Button
            rounded
            style={styles.button2}
            onPress={() => this.props.navigation.navigate("Manual")}
          >
            <Icon
              type="MaterialCommunityIcons"
              name="air-filter"
              style={{ fontSize: 50 }}
            />
          </Button>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    fontFamily: "notoSerif-bold",
    width: 220,
    textAlign: "center",
    marginVertical: 25,
    fontSize: 20
  },
  text2: {
    width: 220,
    textAlign: "center",
    marginBottom: 50
  },
  text3: {
    fontFamily: "notoSerif-bold"
  },
  bodyContainer: {
    alignItems: "center"
  },
  button1: {
    width: 100,
    height: 100,
    borderRadius: 100,
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#BC8DB1",
    justifyContent: "center"
  },
  button2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#A27BAA",
    justifyContent: "center"
  },
  buttonSend: {
    width: "auto",
    paddingLeft: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 30
  }
});
