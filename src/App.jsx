import { View, StyleSheet } from 'react-native'

import Menu from './Menu'
import Content from './Content'
import { AppProvider } from 'contexts/AppContext'

export default () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Menu />
        <Content />
      </View>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#252327'
  }
})
