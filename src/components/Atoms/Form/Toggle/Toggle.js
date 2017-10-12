import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => (
  <TouchableOpacity>
    {
      props.active && <Icon
        name="check"
        size={30}
      />
    }
  </TouchableOpacity>
)
