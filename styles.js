import { StyleSheet } from 'react-native';

const starter = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}

const styles = StyleSheet.create(Object.assign(
  starter,
  // ...whatever other objects we create and want in the styles
));

export default styles;
