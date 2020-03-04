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
          <First listViewData={this.state.listViewData} getAll={this.getAll} />
        )
        break
      case 'second':
        return <Second />
        break
      case 'third':
        return <Third />
        break
      case 'fourth':
        return <Fourth />
        break
      default:
    }
  }

  showInformation() {}

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Content>
            <Item regular style={{ borderColor: '#D4B996FF' }}>
              <Input
                placeholder="Add Note"
                style={{ color: '#515151' }}
                onChangeText={newContact => this.setState({ newContact })}
              />
              <Button
                style={styles.button}
                onPress={() => this.addRow(this.state.newContact)}
              >
                <Icon name="add" style={{ color: '#D4B996FF' }} />
              </Button>
            </Item>
          </Content>
        </Header>

        {/* <Content>
          {this.state.listViewData.map((value, index) => {
            return (
              <ListItem key={index}>
                <Left>
                  <Text>{value.val().name}</Text>
                </Left>
                <Right>
                  <TouchableOpacity onPress={() => this.addRow(data)}>
                    <Icon
                      name="information-circle"
                      style={{ color: 'black' }}
                    />
                  </TouchableOpacity>
                </Right>
                <Right>
                  <TouchableOpacity onPress={() => this.deleteRow(value)}>
                    <Icon name="trash" style={{ color: 'black' }} />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            )
          })}
        </Content> */}
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
              <Icon name="apps" style={{ color: 'black' }} />
              <Text>Apps</Text>
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
              <Icon name="navigate" style={{ color: 'black' }} />
              <Text>Apps</Text>
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
              <Text>Contact</Text>
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
    backgroundColor: '#D4B996FF'
  },
  header: {
    marginTop: 10,
    backgroundColor: '#D4B996FF'
  },
  button: {
    marginTop: 4,
    backgroundColor: '#A07855FF'
  },
  footerTab: {
    backgroundColor: '#A07855FF'
  },
  footerSelected: {
    backgroundColor: 'rgba(52, 52, 52, 0.25)'
  },
  footerUnSelected: {}
})
