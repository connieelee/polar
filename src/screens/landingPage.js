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
  DarkView,
  HeaderText,
  SubheaderText,
  PrimaryButton,
  SecondaryButton,
} from '../components'

import { width } from '../components/styles';

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 80,
    paddingHorizontal: 25,
  },
  buttonGroup: {
    width: width.small,
    justifyContent: 'space-between',
    height: 105,
  },
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
      <DarkView style={styles.container}>
        <Animated.View style={{
          opacity: this.state.title.fadeIn,
          transform: [{translateY: this.state.title.slideUp}],
        }}>
          <HeaderText>P  O  L  A  R</HeaderText>
          <SubheaderText>
            A real-time polling app that helps presenters keep in tune with their audience
          </SubheaderText>
        </Animated.View>
        <View style={styles.buttonGroup}>
          <Animated.View style={{opacity: this.state.signup.fadeIn}}>
            <PrimaryButton onPress={()=>{ navigate('Signup') }}>SIGN UP</PrimaryButton>
          </Animated.View>
          <Animated.View style={{opacity: this.state.login.fadeIn}}>
            <SecondaryButton onPress={()=>{ navigate('Login') }}>LOG IN</SecondaryButton>
          </Animated.View>
        </View>
      </DarkView>
    )
  }
}