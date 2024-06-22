import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import vars from 'styles/vars'
import CopyButton from 'components/CopyButton'

const EncodedUrl = ({ encodedUrl, setEncodedUrl, setDecodedUrl }) => {
  const [encodedUrlFocused, setEncodedUrlFocused] = useState()
  const [encodedUrlIsHovered, setEncodedUrlIsHovered] = useState(false)
  const onEncodedUrlChange = text => {
    setEncodedUrl(text)
    setDecodedUrl(decodeURIComponent(text))
  }

  return (
    <View
      style={styles.inputWrapper}
      onMouseEnter={() => setEncodedUrlIsHovered(true)}
      onMouseLeave={() => setEncodedUrlIsHovered(false)}
    >
      {
        encodedUrl && (
          <View style={styles.placeholderWrapper}>
            <Text style={styles.placeholder}>
              Encoded URL
            </Text>
          </View>
        )
      }

      {encodedUrlIsHovered && <CopyButton text={encodedUrl} />}

      <TextInput
        multiline
        value={encodedUrl}
        enableFocusRing={false}
        placeholder='Encoded URL'
        onChangeText={onEncodedUrlChange}
        onFocus={() => setEncodedUrlFocused(true)}
        onBlur={() => setEncodedUrlFocused(false)}
        placeholderTextColor={vars.battleshipGray}
        style={[styles.textInput, encodedUrlFocused && styles.textInputFocused]}
      />
    </View>
  )
}

const DecodedUrl = ({ decodedUrl, setEncodedUrl, setDecodedUrl }) => {
  const [decodedUrlFocused, setDecodedUrlFocused] = useState()
  const [decodedUrlIsHovered, setDecodedUrlIsHovered] = useState(false)
  const onDecodedUrlChange = text => {
    setDecodedUrl(text)
    setEncodedUrl(encodeURIComponent(text))
  }

  return (
    <View
      style={styles.inputWrapper}
      onMouseEnter={() => setDecodedUrlIsHovered(true)}
      onMouseLeave={() => setDecodedUrlIsHovered(false)}
    >
      {
        decodedUrl && (
          <View style={styles.placeholderWrapper}>
            <Text style={styles.placeholder}>
              Decoded URL
            </Text>
          </View>
        )
      }

      {decodedUrlIsHovered && <CopyButton text={decodedUrl} />}

      <TextInput
        multiline
        value={decodedUrl}
        enableFocusRing={false}
        placeholder='Decoded URL'
        onChangeText={onDecodedUrlChange}
        onFocus={() => setDecodedUrlFocused(true)}
        onBlur={() => setDecodedUrlFocused(false)}
        placeholderTextColor={vars.battleshipGray}
        style={[styles.textInput, decodedUrlFocused && styles.textInputFocused]}
      />
    </View>
  )
}

export default () => {
  const [encodedUrl, setEncodedUrl] = useState()
  const [decodedUrl, setDecodedUrl] = useState()

  return (
    <View style={styles.contentWrapper}>
      <EncodedUrl
        encodedUrl={encodedUrl}
        setEncodedUrl={setEncodedUrl}
        setDecodedUrl={setDecodedUrl}
      />

      <DecodedUrl
        decodedUrl={decodedUrl}
        setEncodedUrl={setEncodedUrl}
        setDecodedUrl={setDecodedUrl}
      />
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
  textInput: {
    flex: 1,
    padding: 16,
    paddingTop: 12,
    borderRadius: 6,
    paddingBottom: 12,
    backgroundColor: vars.raisinBlack
  },
  textInputFocused: {
    backgroundColor: vars.jet2
  }
})
