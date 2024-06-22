import { View, TextInput, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          multiline
          placeholder='Input'
          enableFocusRing={false}
          style={styles.textInput}
          placeholderTextColor='#888'
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          multiline
          placeholder='Output'
          enableFocusRing={false}
          style={styles.textInput}
          placeholderTextColor='#888'
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
    flex: 1
  },
  textInput: {
    flex: 1,
    padding: 16,
    paddingTop: 12,
    borderRadius: 6,
    paddingBottom: 12,
    backgroundColor: '#312E34'
  }
})
