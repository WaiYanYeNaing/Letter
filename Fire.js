import firebase from 'firebase'
import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

let room_id = null
class Fire extends Component {
  constructor() {
    //   // this.init()
    //   // this.checkAuth()
    super()
  }

  //   init = () => {
  //     if (!firebase.app.length) {
  //       firebase.initializeApp({
  //         apiKey: 'AIzaSyBwdG1qv1eZKC-iApnEfzd3v_qhN2ZZGZk',
  //         authDomain: 'letter-e7a1d.firebaseapp.com',
  //         databaseURL: 'https://letter-e7a1d.firebaseio.com',
  //         projectId: 'letter-e7a1d',
  //         storageBucket: 'letter-e7a1d.appspot.com',
  //         messagingSenderId: '30680356735',
  //         appId: '1:30680356735:web:2d3073f99f468fa1c8ac4a',
  //         measurementId: 'G-FPRP7NVXND'
  //       })
  //     }
  //   }

  //   checkAuth = () => {
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (!user) {
  //         firebase.auth().signInAnonymously()
  //       }
  //     })
  //   }

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message)
    })
  }

  parse = message => {
    const { user, text, timestamp } = message.val()
    const { key: _id } = message
    const createdAt = new Date(timestamp)

    return {
      _id,
      createdAt,
      text,
      user
    }
  }

  get = (roomID, callback) => {
    room_id = roomID
    firebase
      .database()
      .ref('messages')
      .child(room_id)
      .on('child_added', snapshot => {
        callback(this.parse(snapshot))
      })
  }

  off() {
    this.db.off()
  }

  get db() {
    if (room_id) {
      return firebase
        .database()
        .ref('messages')
        .child(room_id)
    } else {
      return firebase.database().ref('messages')
    }
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid
  }
}

export default new Fire()
