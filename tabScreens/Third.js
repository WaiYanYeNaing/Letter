import React, { Component } from 'react'
import {
  Modal,
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  Button,
  Body,
  Thumbnail,
  Textarea,
  Icon,
  Accordion,
  CheckBox,
  ListItem,
  List
} from 'native-base'
import gStyles from '../GlobalStyle/gStyles'
import { Dropdown } from 'react-native-material-dropdown'

export default class Third extends Component {
  state = {
    modalVisible: false,
    textArea: '',
    availableUser: [
      {
        id: 1,
        name: 'John',
        check: false
      },
      {
        id: 2,
        name: 'Doe',
        check: true
      },
      {
        id: 3,
        name: 'Jhon Doe',
        check: false
      }
    ],
    categoryDDL: [
      { value: 'Gaming' },
      { value: 'Art' },
      { value: 'Technology' },
      { value: 'Magic' },
      { value: 'Music' }
    ],
    ageDDL: [
      { value: '10-21' },
      { value: '21-31' },
      { value: '31-41' },
      { value: '41-51' }
    ],
    genderDDL: []
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  checkHandler = (v, i) => {
    let arr = []
    arr = this.state.availableUser
    arr[i].check = !v
    this.setState({ availableUser: arr })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
          >
            <View style={styles.modal}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: 2,
                  borderStyle: 'dashed',
                  borderBottomColor: '#A89C94FF'
                }}
              >
                Write New Todo
              </Text>
              <Textarea
                onChangeText={textArea => this.setState({ textArea })}
                style={{
                  borderColor: '#fff',
                  borderRadius: 15,
                  padding: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#fff'
                }}
                value={this.state.textArea}
                rowSpan={10}
                bordered
                placeholder="You can add your todolist. eg. Learn React Native today"
              />
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  borderStyle: 'dashed',
                  borderBottomColor: '#A89C94FF'
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    paddingVertical: 10
                  }}
                >
                  Found 3 Matches
                </Text>
                <TouchableOpacity>
                  <Icon
                    name="refresh"
                    style={{
                      color: 'black',
                      fontSize: 20,
                      marginTop: 13,
                      marginLeft: 15
                    }}
                  />
                </TouchableOpacity>
              </View>
              {this.state.availableUser.map((user, index) => {
                return (
                  <ListItem key={index}>
                    <CheckBox
                      checked={user.check}
                      color="#A89C94FF"
                      onPress={() => this.checkHandler(user.check, index)}
                    />
                    <Body>
                      <Text style={{ paddingLeft: 7 }}>{user.name}</Text>
                    </Body>
                  </ListItem>
                )
              })}
              <Button
                rounded
                style={[styles.button, styles.buttonSend]}
                // onPress={() => {
                //   this.setModalVisible(!this.state.modalVisible)
                // }}
              >
                <Text>Send to selected User</Text>
                <Icon name="send" style={{ color: 'black' }} />
              </Button>
            </View>
          </TouchableOpacity>
        </Modal>

        <Body style={styles.bodyContainer}>
          <Thumbnail
            source={require('../assets/splash.png')}
            style={styles.thumbnail}
          />
          <Text style={styles.text}>
            Create new Todo and Save Whatever you want!
          </Text>
          <Text style={styles.text2}>TODO</Text>
          <List>
            <ListItem
              style={[{ width: 400, backgroundColor: '#e2e0de' }]}
              itemDivider
            >
              <Text style={[styles.text1, gStyles.center]}>Custom Finder</Text>
            </ListItem>
          </List>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ width: 130, marginBottom: 30, marginRight: 20 }}>
              <Dropdown label="Topic" data={this.state.categoryDDL} />
            </View>
            <View style={{ width: 70, marginBottom: 30 }}>
              <Dropdown label="Age" data={this.state.ageDDL} />
            </View>
          </View>
          <List>
            <ListItem
              style={[
                { width: 400, backgroundColor: '#e2e0de', marginBottom: 30 }
              ]}
              itemDivider
            >
              <Text style={gStyles.center}>
                ----------------------------------------------------------------
              </Text>
            </ListItem>
          </List>
          <Button
            rounded
            style={styles.button}
            onPress={() => {
              this.setModalVisible(true)
            }}
          >
            <Text>Create New Letter</Text>
          </Button>
        </Body>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
    padding: 20,
    width: '90%',
    height: 670,
    backgroundColor: '#EFEFE8FF',
    borderRadius: 25,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  container: {
    flex: 1
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginVertical: 50
  },
  text: {
    width: 220,
    textAlign: 'center',
    marginVertical: 30
  },
  text2: {
    fontFamily: 'notoSerif-bold',
    width: 220,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 20
  },
  bodyContainer: {
    alignItems: 'center'
  },
  button: {
    width: 150,
    padding: 10,
    borderColor: '#A89C94FF',
    backgroundColor: '#A89C94FF',
    justifyContent: 'center'
  },
  buttonSend: {
    width: 'auto',
    paddingLeft: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 30
  }
})
