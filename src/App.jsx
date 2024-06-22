import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <ScrollView
          contentContainerStyle={styles.menuContentWrapper}
        >
          <Text>menuWrapper</Text>
        </ScrollView>
      </View>
      <View style={styles.contentWrapper}>
        <Text>contentWrapper</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#252327'
  },
  menuWrapper: {
    width: 300,
    backgroundColor: '#2A282C'
  },
  menuContentWrapper: {
    padding: 24
  },
  contentWrapper: {
    flex: 1
  }
})
