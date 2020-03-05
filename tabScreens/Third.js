import React, { Component } from 'react'
import {
  Modal,
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Button, Body, Thumbnail, Textarea, Icon } from 'native-base'

export default class Third extends Component {
  state = {
    modalVisible: false,
    textArea: ''
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
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
                  fontSize: 20,
                  textAlign: 'center',
                  paddingVertical: 20
                }}
              >
                Write New Todo
              </Text>
              <Textarea
                onChangeText={textArea => this.setState({ textArea })}
                style={{
                  borderColor: '#fff',
                  borderRadius: 20,
                  padding: 10,
                  backgroundColor: '#fff'
                }}
                value={this.state.textArea}
                rowSpan={10}
                bordered
                placeholder="You can add your todolist. eg. Learn React Native today"
              />
              <Button
                rounded
                style={[styles.button, styles.buttonSend]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                <Icon name="send" />
              </Button>
            </View>
          </TouchableOpacity>
        </Modal>
        <Body style={styles.buttonContainer}>
          <Thumbnail
            source={require('../assets/splash.png')}
            style={styles.thumbnail}
          />
          <Text style={styles.text}>
            Create new Todo and Save Whatever you want!
          </Text>
          <Text style={styles.text2}>TODO</Text>
          <Button
            rounded
            style={styles.button}
            onPress={() => {
              this.setModalVisible(true)
            }}
          >
            <Text>Create New Todo</Text>
          </Button>
        </Body>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 30,
    marginTop: '20%',
    padding: 20,
    width: '80%',
    height: 600,
    backgroundColor: '#EFEFE8FF',
    borderRadius: 40,
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
    width: 220,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 30
  }
})
