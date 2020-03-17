import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  Container,
  Icon,
  Card,
  CardItem,
  Body,
  Right,
  Switch,
  Form,
  Picker,
  Button
} from 'native-base'

export default class Manual extends Component {
  state = {
    lastOnline24: false,
    selected_language: 'key1',
    selected_topic: 'key1',
    selected_age_Range: 'key1',
    selected_gender: 'key1',
    languages: [
      {
        value: 'key1',
        label: 'English'
      },
      {
        value: 'key2',
        label: 'Myanmar'
      }
    ],
    topics: [
      {
        value: 'key1',
        label: 'Gaming'
      },
      {
        value: 'key2',
        label: 'Food'
      },
      {
        value: 'key3',
        label: 'Art'
      },
      {
        value: 'key4',
        label: 'Book'
      },
      {
        value: 'key5',
        label: 'Technology'
      },
      {
        value: 'key6',
        label: 'Music'
      }
    ],
    age_Range: [
      {
        value: 'key1',
        label: '10-21'
      },
      {
        value: 'key2',
        label: '21-31'
      },
      {
        value: 'key2',
        label: '31-41'
      },
      {
        value: 'key2',
        label: '41-51'
      },
      {
        value: 'key2',
        label: '51-61'
      }
    ],
    gender: [
      {
        value: 'key1',
        label: 'Male'
      },
      {
        value: 'key2',
        label: 'Female'
      }
    ]
  }
  onValueChange = (value, key) => {
    this.setState({
      [value]: key
    })
  }
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.textManual}>
          <Icon type="AntDesign" name="filter" style={{ fontSize: 90 }} />
        </Text>
        <Text style={styles.textManual}>Filters</Text>
        <Card>
          <CardItem style={styles.card}>
            <Body style={styles.cardBody}>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <View style={{ paddingRight: 20 }}>
                  <Icon
                    type="Ionicons"
                    name="md-clock"
                    style={{ fontSize: 23 }}
                  />
                </View>
                <Text style={{ paddingTop: 2 }}>Last online 24 hours</Text>
                <Right>
                  <Switch
                    value={this.state.lastOnline24}
                    onTouchStart={() =>
                      this.setState({ lastOnline24: !this.state.lastOnline24 })
                    }
                  />
                </Right>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <View style={{ paddingRight: 20 }}>
                  <Icon
                    type="FontAwesome"
                    name="language"
                    style={{ fontSize: 23 }}
                  />
                </View>
                <Text style={{ paddingTop: 2 }}>Language</Text>
                <Right>
                  <Picker
                    note
                    mode="dialog"
                    style={{ width: 120, height: 0 }}
                    selectedValue={this.state.selected_language}
                    onValueChange={this.onValueChange.bind(
                      this,
                      'selected_language'
                    )}
                  >
                    {this.state.languages.map((value, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={value.label}
                          value={value.value}
                        />
                      )
                    })}
                  </Picker>
                </Right>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <View style={{ paddingRight: 20 }}>
                  <Icon
                    type="FontAwesome5"
                    name="pen-fancy"
                    style={{ fontSize: 23 }}
                  />
                </View>
                <Text style={{ paddingTop: 2 }}>Topics</Text>
                <Right>
                  <Picker
                    note
                    mode="dialog"
                    style={{ width: 120, height: 0 }}
                    selectedValue={this.state.selected_topic}
                    onValueChange={this.onValueChange.bind(
                      this,
                      'selected_topic'
                    )}
                  >
                    {this.state.topics.map((value, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={value.label}
                          value={value.value}
                        />
                      )
                    })}
                  </Picker>
                </Right>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <View style={{ paddingRight: 20 }}>
                  <Icon
                    type="FontAwesome5"
                    name="birthday-cake"
                    style={{ fontSize: 23 }}
                  />
                </View>
                <Text style={{ paddingTop: 2 }}>Age Range</Text>
                <Right>
                  <Picker
                    note
                    mode="dialog"
                    style={{ width: 120, height: 0 }}
                    selectedValue={this.state.selected_age_Range}
                    onValueChange={this.onValueChange.bind(
                      this,
                      'selected_age_Range'
                    )}
                  >
                    {this.state.age_Range.map((value, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={value.label}
                          value={value.value}
                        />
                      )
                    })}
                  </Picker>
                </Right>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <View style={{ paddingRight: 20 }}>
                  <Icon
                    type="FontAwesome5"
                    name="transgender"
                    style={{ fontSize: 23 }}
                  />
                </View>
                <Text style={{ paddingTop: 2 }}>Gender</Text>
                <Right>
                  <Picker
                    note
                    mode="dialog"
                    style={{ width: 120, height: 0 }}
                    selectedValue={this.state.selected_gender}
                    onValueChange={this.onValueChange.bind(
                      this,
                      'selected_gender'
                    )}
                  >
                    {this.state.gender.map((value, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={value.label}
                          value={value.value}
                        />
                      )
                    })}
                  </Picker>
                </Right>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Button
          block
          rounded
          style={styles.buttonApply}
          onPress={() => this.props.navigation.navigate('Write')}
        >
          <Text style={{ color: 'white' }}>Apply</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="page-next"
            style={{ fontSize: 23 }}
          />
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E2EF'
  },
  textManual: {
    fontFamily: 'notoSerif-bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  card: {
    backgroundColor: '#EAEBF9'
  },
  buttonApply: {
    backgroundColor: '#9381FF',
    marginVertical: 24,
    marginHorizontal: 10
  }
})
