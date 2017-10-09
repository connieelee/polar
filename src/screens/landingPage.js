import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0D3B66',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Dosis',
    color: '#F4D35E',
  },
  btn: {
    alignItems: 'center',
    margin: 5,
    padding: 13,
    borderRadius: 20,
    width: 250,
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
    return (
      <View style={styles.container}>
        <Animated.View style={{
          opacity: this.state.title.fadeIn,
          transform: [{translateY: this.state.title.slideUp}],
        }}>
          <Text style={styles.title}>P O L A R</Text>
        </Animated.View>
        <View>
          <Animated.View style={{opacity: this.state.signup.fadeIn}}>
            <TouchableOpacity
              onPress={()=>{}}
              style={[styles.btn, styles.signupBtn]}
            >
              <Text style={[styles.btnText, styles.signupText]}>SIGN UP</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{opacity: this.state.login.fadeIn}}>
            <TouchableOpacity
              onPress={()=>{}}
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