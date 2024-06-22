import { View, StyleSheet } from 'react-native'

import Menu from './Menu'
import Content from './Content'

export default () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Content />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#252327'
  }
})
