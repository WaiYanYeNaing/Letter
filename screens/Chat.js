import React, { Component } from 'react'
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native'
import Fire from '../Fire'
import { GiftedChat } from 'react-native-gifted-chat'
import { AsyncStorage } from 'react-native'

export default class Chat extends Component {
  state = {
    messages: []
  }

  get user() {
    return {
      _id: Fire.uid,
      name: 'HOLA'
    }
  }

  componentDidMount() {
    Fire.get(this.props.route.params?.roomID, messages =>
      this.setState(previous => ({
        messages: GiftedChat.append(previous.messages, messages)
      }))
    )
  }

  componentWillMount() {
    Fire.off()
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    )

    if (Platform.OS === 'android') {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={70}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      )
    }

    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
  }
}
