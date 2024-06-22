import { View, TextInput, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.contentWrapper}>
      <TextInput
        multiline
        placeholder='Input'
        enableFocusRing={false}
        style={styles.textInput}
        placeholderTextColor='#888'
      />

      <TextInput
        multiline
        placeholder='Output'
        enableFocusRing={false}
        style={styles.textInput}
        placeholderTextColor='#888'
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
  textInput: {
    height: '50%',
    paddingTop: 12,
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    backgroundColor: '#312E34'
  }
})
