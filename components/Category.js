import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Icon, Right } from "native-base";

export default class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: "auto",
          width: 200,
          marginLeft: 20
        }}
      >
        {/* <View style={{ flex: 2 }}>
         <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          /> 
        </View>*/}
        <View style={{ flex: 1, paddingTop: 10 }}>
          <Card style={{ borderRadius: 10 }}>
            <CardItem
              style={{
                backgroundColor: "#D4CBE5",
                height: 50,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }}
              header
            >
              <Icon
                type="FontAwesome5"
                name="user-astronaut"
                style={{ fontSize: 20, marginTop: 1 }}
              />
              <Text>{this.props.header}</Text>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: "#F0F6F7FF",
                height: 200
              }}
            >
              <Body>
                <Text>{this.props.text}</Text>
              </Body>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: "#F0F6F7FF",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
              }}
              footer
            >
              <Body>
                <Text style={{ fontSize: 13, paddingTop: 3 }}>
                  {this.props.date}
                </Text>
              </Body>
              <Right>
                <TouchableOpacity
                  onPress={() => this.props.deleteRow(this.props.value)}
                >
                  <Icon name="trash" style={{ color: "black", fontSize: 25 }} />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}
