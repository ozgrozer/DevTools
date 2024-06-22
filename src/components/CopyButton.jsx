import { useRef, useCallback } from 'react'
import Clipboard from '@react-native-clipboard/clipboard'
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'

import vars from 'styles/vars'

export default ({ text, onPress }) => {
  const animatedValue = useRef(new Animated.Value(0)).current

  const flashBackground = useCallback(() => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start()
  }, [animatedValue])

  const copyButtonOnPress = useCallback(() => {
    Clipboard.setString(text)

    flashBackground()
    if (onPress && typeof onPress === 'function') {
      onPress()
    }
  }, [text, onPress, flashBackground])

  const buttonStyle = {
    ...styles.copyButton,
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [vars.raisinBlack2, '#98c379']
    })
  }

  return (
    <View style={styles.copyButtonWrapper}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={copyButtonOnPress}
      >
        <Animated.View style={buttonStyle}>
          <Text style={styles.copyButtonText}>C</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  copyButtonWrapper: {
    top: 12,
    right: 12,
    zIndex: 2,
    position: 'absolute'
  },
  copyButton: {
    width: 30,
    height: 30,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.raisinBlack2
  },
  copyButtonText: {
    fontSize: 12,
    color: vars.battleshipGray
  }
})
