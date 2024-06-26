import moment from 'moment'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import vars from 'styles/vars'
import CopyButton from 'components/CopyButton'

const format = ({ text }) => {
  const lines = text.split('\n')

  const output = []
  for (const key in lines) {
    const line = lines[key]
    const dateFormat = 'YYYY-MM-DD HH:mm:ss'
    const formatted = line
      ? moment.unix(line).format(dateFormat)
      : ''
    output.push(formatted)
  }

  return output.join('\n')
}

const Input = ({ input, setInput, setOutput }) => {
  const [inputFocused, setInputFocused] = useState()
  const [inputIsHovered, setInputIsHovered] = useState(false)
  const onInputChange = text => {
    setInput(text)
    setOutput(format({ text }))
  }

  return (
    <View
      style={styles.inputWrapper}
      onMouseEnter={() => setInputIsHovered(true)}
      onMouseLeave={() => setInputIsHovered(false)}
    >
      {
        input && (
          <View style={styles.placeholderWrapper}>
            <Text style={styles.placeholder}>
              Input
            </Text>
          </View>
        )
      }

      {inputIsHovered && <CopyButton text={input} />}

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
  )
}

const Output = ({ output, setInput, setOutput }) => {
  const [outputFocused, setOutputFocused] = useState()
  const [ouputIsHovered, setOutputIsHovered] = useState(false)

  return (
    <View
      style={styles.inputWrapper}
      onMouseEnter={() => setOutputIsHovered(true)}
      onMouseLeave={() => setOutputIsHovered(false)}
    >
      {
        output && (
          <View style={styles.placeholderWrapper}>
            <Text style={styles.placeholder}>
              Output
            </Text>
          </View>
        )
      }

      {ouputIsHovered && <CopyButton text={output} />}

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
  )
}

export default () => {
  const [input, setInput] = useState()
  const [output, setOutput] = useState()

  return (
    <View style={styles.contentWrapper}>
      <Input
        input={input}
        setInput={setInput}
        setOutput={setOutput}
      />

      <Output
        output={output}
        setInput={setInput}
        setOutput={setOutput}
      />
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
