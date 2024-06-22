import { useState } from 'react'
import jsonBeautify from 'json-beautify'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import vars from 'styles/vars'
import CopyButton from 'components/CopyButton'

const isJsonValid = text => {
  try {
    const json = JSON.parse(text)
    return (typeof json === 'object')
  } catch (e) {
    return false
  }
}

const format = ({ text }) => {
  if (isJsonValid(text)) {
    const _text = JSON.parse(text)
    const beautify = jsonBeautify(_text, null, 2)
    return beautify
  } else {
    return 'JSON is not valid'
  }
}

export default () => {
  const [inputFocused, setInputFocused] = useState()
  const [input, setInput] = useState()
  const onInputChange = text => {
    setInput(text)
    setOutput(format({ text }))
  }

  const [outputFocused, setOutputFocused] = useState()
  const [output, setOutput] = useState()

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputWrapper}>
        {
          input && (
            <>
              <View style={styles.placeholderWrapper}>
                <Text style={styles.placeholder}>
                  Input
                </Text>
              </View>

              <CopyButton text={input} />
            </>
          )
        }

        <TextInput
          multiline
          value={input}
          placeholder='Input'
          enableFocusRing={false}
          onChangeText={onInputChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholderTextColor={vars.battleshipGray}
          style={[styles.textInput, inputFocused && styles.textInputFocused]}
        />
      </View>

      <View style={styles.inputWrapper}>
        {
          output && (
            <>
              <View style={styles.placeholderWrapper}>
                <Text style={styles.placeholder}>
                  Output
                </Text>
              </View>

              <CopyButton text={output} />
            </>
          )
        }

        <TextInput
          multiline
          value={output}
          editable={false}
          placeholder='Output'
          enableFocusRing={false}
          onFocus={() => setOutputFocused(true)}
          onBlur={() => setOutputFocused(false)}
          placeholderTextColor={vars.battleshipGray}
          style={[styles.textInput, outputFocused && styles.textInputFocused]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    gap: 24,
    padding: 24,
    flexDirection: 'row'
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
