import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default () => {
  const [encodedUrl, setEncodedUrl] = useState()
  const onEncodedUrlChange = text => {
    setEncodedUrl(text)
  }

  const [decodedUrl, setDecodedUrl] = useState()
  const onDecodedUrlChange = text => {
    setDecodedUrl(text)
  }

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputWrapper}>
        {
          encodedUrl && (
            <View style={styles.placeholderWrapper}>
              <Text style={styles.placeholder}>
                Encoded URL
              </Text>
            </View>
          )
        }

        <TextInput
          multiline
          value={encodedUrl}
          enableFocusRing={false}
          style={styles.textInput}
          placeholder='Encoded URL'
          placeholderTextColor='#888'
          onChangeText={onEncodedUrlChange}
        />
      </View>

      <View style={styles.inputWrapper}>
        {
          decodedUrl && (
            <View style={styles.placeholderWrapper}>
              <Text style={styles.placeholder}>
                Decoded URL
              </Text>
            </View>
          )
        }

        <TextInput
          multiline
          value={decodedUrl}
          enableFocusRing={false}
          style={styles.textInput}
          placeholder='Decoded URL'
          placeholderTextColor='#888'
          onChangeText={onDecodedUrlChange}
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
    backgroundColor: '#222024'
  },
  placeholder: {
    fontSize: 12,
    color: '#fff'
  },
  textInput: {
    flex: 1,
    padding: 16,
    paddingTop: 12,
    borderRadius: 6,
    paddingBottom: 12,
    backgroundColor: '#2A282C'
  }
})
