import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default (props) => {
  const styles = StyleSheet.create({
    touchable: {
      padding: 10,
      width: (10 * 2) + (props.size || 50),
    },
    parent: {
      borderWidth: props.borderWidth || 3,
      width: props.size || 50,
      height: props.size || 50,
      borderRadius: props.borderRadius || 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return (
    <TouchableOpacity style={styles.touchable}>
      <View style={styles.parent}>
        {
          props.active && <Icon
            name={props.iconName || 'check'}
            size={(props.size / 5) * 3 || 30}
          />
        }
      </View>
    </TouchableOpacity>
  )
}
