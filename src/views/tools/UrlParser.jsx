import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.contentWrapper}>
      <Text>UrlParser</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1
  }
})
