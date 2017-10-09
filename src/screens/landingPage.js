import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import logo from '../../assets/images/logo.jpg'

var styles = StyleSheet.create({
  centerContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 165,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    width: 200,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupBtn: {
    backgroundColor: '#89AEE1',
  },
  signupText: {
    color: 'white',
  },
  loginBtn: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#89AEE1'
  },
  loginText: {
    color: '#89AEE1',
  },
})

export default () => (
  <View style={styles.centerContainer}>
    <Image
      source={logo}
      style={styles.logo}
    />
    <Text style={styles.title}>P   O   L   A   R</Text>
    <TouchableOpacity onPress={()=>{}} style={[styles.btn, styles.signupBtn]}>
      <Text style={[styles.btnText, styles.signupText]}>SIGN UP</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{}} style={[styles.btn, styles.loginBtn]}>
      <Text style={[styles.btnText, styles.loginText]}>LOG IN</Text>
    </TouchableOpacity>
  </View>
)
