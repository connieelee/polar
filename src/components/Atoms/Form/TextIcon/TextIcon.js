import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  BodyText,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    width: gStyles.width.medium,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default props => (
  <TouchableOpacity style={styles.parent}>
    <BodyText>{props.children}</BodyText>
    <Icon
      size={30}
      name={props.name}
      color={props.color || 'black'}
    />
  </TouchableOpacity>
)
