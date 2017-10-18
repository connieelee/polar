import React from 'react'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'

import gStyle from '../../../styles'
import {
  ColoredSquare,
} from '../../../../components'

const boxSize = 75

export default (props) => {
  const styles = StyleSheet.create({
    parent: {
      flexDirection: 'row',
      height: boxSize,
      width: boxSize * props.animals.length,
    },
  })

  return (
    <View style={styles.parent}>
      {
        props.animals.map(animal => (
          <ColoredSquare key={animal.order} backgroundColor={animal.backgroundColor}>
            <Image source={{ uri: animal.imageUrl }} />
          </ColoredSquare>
        ))
      }
    </View>
  )
}
