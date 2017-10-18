import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  HeaderText,
  SubheaderText,
} from '../components'

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0D3B66',
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 25,
    paddingRight: 25,
  },
  btn: {
    alignItems: 'center',
    margin: 5,
    padding: 13,
    borderRadius: 20,
    width: 200,
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
  },
  signupBtn: {
    backgroundColor: '#F95738',
  },
  loginBtn: {
    backgroundColor: 'white',
  },
  loginText: {
    color: 'black',
  }
})

export default class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      title: {
        fadeIn: new Animated.Value(0),
        slideUp: new Animated.Value(10),
      },
      signup: {
        fadeIn: new Animated.Value(0),
      },
      login: {
        fadeIn: new Animated.Value(0),
      },
    }
  }

  static navigationOptions = {
    title: 'Welcome',
    header: null,
  }

  componentDidMount() {
    const titleAnimations = Animated.parallel([
      Animated.timing(
        this.state.title.fadeIn,
        { toValue: 1, duration: 1000 }
      ),
      Animated.timing(
        this.state.title.slideUp,
        { toValue: 0, duration: 1000 },
      ),
    ])
    const signupAnimation = Animated.timing(
      this.state.signup.fadeIn,
      { toValue: 1, duration: 900 },
    )
    const loginAnimation = Animated.timing(
      this.state.login.fadeIn,
      { toValue: 1, duration: 900 },
    )

    Animated.stagger(330, [
      titleAnimations,
      signupAnimation,
      loginAnimation
    ]).start()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Animated.View style={{
          opacity: this.state.title.fadeIn,
          transform: [{translateY: this.state.title.slideUp}],
        }}>
          <HeaderText>P  O  L  A  R</HeaderText>
          <SubheaderText>
            A real-time polling app that helps presenters keep in tune with the audience
          </SubheaderText>
        </Animated.View>
        <View>
          <Animated.View style={{opacity: this.state.signup.fadeIn}}>
            <TouchableOpacity
              onPress={()=>{ navigate('Signup'); }}
              style={[styles.btn, styles.signupBtn]}
            >
              <Text style={[styles.btnText, styles.signupText]}>SIGN UP</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{opacity: this.state.login.fadeIn}}>
            <TouchableOpacity
              onPress={()=>{ navigate('Login'); }}
              style={[styles.btn, styles.loginBtn]}
            >
              <Text style={[styles.btnText, styles.loginText]}>LOG IN</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    )
  }
}