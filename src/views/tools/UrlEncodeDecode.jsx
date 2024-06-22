import { useState } from 'react'
import Clipboard from '@react-native-clipboard/clipboard'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import vars from 'styles/vars'

export default () => {
  const [encodedUrl, setEncodedUrl] = useState()
  const onEncodedUrlChange = text => {
    setEncodedUrl(text)
    setDecodedUrl(decodeURIComponent(text))
  }

  const [decodedUrl, setDecodedUrl] = useState()
  const onDecodedUrlChange = text => {
    setDecodedUrl(text)
    setEncodedUrl(encodeURIComponent(text))
  }

  const copyButtonOnPress = ({ type }) => {
    if (type === 'encode') {
      Clipboard.setString(encodedUrl)
    } else if (type === 'decode') {
      Clipboard.setString(decodedUrl)
    }
  }

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputWrapper}>
        {
          encodedUrl && (
            <>
              <View style={styles.placeholderWrapper}>
                <Text style={styles.placeholder}>
                  Encoded URL
                </Text>
              </View>

              <View style={styles.copyButtonWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.copyButton}
                  onPress={() => copyButtonOnPress({ type: 'encode' })}
                >
                  <Text style={styles.copyButtonText}>
                    C
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }

        <TextInput
          multiline
          value={encodedUrl}
          enableFocusRing={false}
          style={styles.textInput}
          placeholder='Encoded URL'
          onChangeText={onEncodedUrlChange}
          placeholderTextColor={vars.battleshipGray}
        />
      </View>

      <View style={styles.inputWrapper}>
        {
          decodedUrl && (
            <>
              <View style={styles.placeholderWrapper}>
                <Text style={styles.placeholder}>
                  Decoded URL
                </Text>
              </View>

              <View style={styles.copyButtonWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.copyButton}
                  onPress={() => copyButtonOnPress({ type: 'decode' })}
                >
                  <Text style={styles.copyButtonText}>
                    C
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }

        <TextInput
          multiline
          value={decodedUrl}
          enableFocusRing={false}
          style={styles.textInput}
          placeholder='Decoded URL'
          onChangeText={onDecodedUrlChange}
          placeholderTextColor={vars.battleshipGray}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    gap: 24,
    padding: 24
  },
  inputWrapper: {
    flex: 1,
    position: 'relative'
  },
  placeholderWrapper: {
    top: -10,
    left: 12,
    zIndex: 2,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    position: 'absolute',
    backgroundColor: vars.raisinBlack2
  },
  placeholder: {
    fontSize: 12,
    color: vars.battleshipGray
  },
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.raisinBlack2
  },
  copyButtonText: {
    fontSize: 12,
    color: vars.battleshipGray
  },
  textInput: {
    flex: 1,
    padding: 16,
    paddingTop: 12,
    borderRadius: 6,
    paddingBottom: 12,
    backgroundColor: vars.raisinBlack
  }
})
