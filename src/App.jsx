import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
