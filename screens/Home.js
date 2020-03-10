import React, { Component } from 'react'
import { Text, StyleSheet, StatusBar } from 'react-native'
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Icon,
  Footer,
  FooterTab
} from 'native-base'
import firebase from 'firebase'
import { Permissions, Notifications } from 'expo'
import First from '../tabScreens/First'
import Second from '../tabScreens/Second'
import Third from '../tabScreens/Third'
import Fourth from '../tabScreens/Fourth'

export default class Home extends Component {
  _isMounted = false

  state = {
    listViewData: [],
    newContact: '',
    selectedTab: 'first'
  }

  componentDidMount() {
    let self = this
    self._isMounted = true
    self.getAll()
  }

  registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (status !== 'granted') {
      alert('No notification permissions!')
      return
    }

    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync()
  }

  getAll = () => {
    let self = this
    let newData = []
    firebase
      .database()
      .ref('todos')
      .on('child_added', data => {
        newData.push(data)
        self.setState({ listViewData: newData })
      })
  }

  getById = () => {
    let self = this
    let newData = []
    firebase
      .database()
      .ref('todos')
      .on('child_added', data => {
        if (data.val().name == null) {
          newData.push(data)
        }
        self.setState({ listViewData: newData })
      })
  }

  addRow = data => {
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

  renderSelectedTab = () => {
    switch (this.state.selectedTab) {
      case 'first':
        return (
          <First
            navigation={this.props.navigation}
            listViewData={this.state.listViewData}
            getAll={this.getAll}
          />
        )
        break
      case 'second':
        return <Second navigation={this.props.navigation} />
        break
      case 'third':
        return <Third navigation={this.props.navigation} />
        break
      case 'fourth':
        return <Fourth navigation={this.props.navigation} />
        break
      default:
    }
  }

  showInformation() {}

  render() {
    return (
      <Container style={styles.container}>
        <Content>{this.renderSelectedTab()}</Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
            <Button
              vertical
              style={
                this.state.selectedTab === 'first'
                  ? styles.footerSelected
                  : styles.footerUnSelected
              }
              active={this.state.selectedTab === 'first'}
              onPress={() => this.setState({ selectedTab: 'first' })}
            >
              <Icon
                type="MaterialCommunityIcons"
                name="script-text-outline"
                style={{ color: 'black' }}
              />
              <Text>Received</Text>
            </Button>
            <Button
              vertical
              style={
                this.state.selectedTab === 'second'
                  ? styles.footerSelected
                  : styles.footerUnSelected
              }
              active={this.state.selectedTab === 'second'}
              onPress={() => this.setState({ selectedTab: 'second' })}
            >
              <Icon name="camera" style={{ color: 'black' }} />
              <Text>Camera</Text>
            </Button>
            <Button
              vertical
              style={
                this.state.selectedTab === 'third'
                  ? styles.footerSelected
                  : styles.footerUnSelected
              }
              active={this.state.selectedTab === 'third'}
              onPress={() => this.setState({ selectedTab: 'third' })}
            >
              <Icon
                type="Ionicons"
                name="ios-create"
                style={{ color: 'black' }}
              />
              <Text>Write</Text>
            </Button>
            <Button
              vertical
              style={
                this.state.selectedTab === 'fourth'
                  ? styles.footerSelected
                  : styles.footerUnSelected
              }
              active={this.state.selectedTab === 'fourth'}
              onPress={() => this.setState({ selectedTab: 'fourth' })}
            >
              <Icon name="person" style={{ color: 'black' }} />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#E1E2EF'
  },
  header: {
    marginTop: 10,
    backgroundColor: '#F0F6F7FF'
  },
  button: {
    marginTop: 4,
    backgroundColor: '#B497D6'
  },
  footerTab: {
    backgroundColor: '#B497D6'
  },
  footerSelected: {
    backgroundColor: 'rgba(52, 52, 52, 0.25)'
  },
  footerUnSelected: {}
})
