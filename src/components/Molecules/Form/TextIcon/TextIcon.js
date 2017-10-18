import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  BodyText,
  FormLabel,
} from '../../../../components'
import gStyles from '../../../styles'


export default (props) => {
  const styles = StyleSheet.create({
    parent: {
      flexDirection: 'row',
      width: props.width || gStyles.width.medium,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })

  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={props.onPress}
    >
      {
        props.bold
          ? <FormLabel>{props.children}</FormLabel>
          : <BodyText>{props.children}</BodyText>
      }
      <Icon
        size={30}
        name={props.name}
        color={props.color || 'black'}
      />
    </TouchableOpacity>
  )
}
