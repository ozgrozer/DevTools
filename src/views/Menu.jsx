import { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import { AppContext } from 'contexts/AppContext'

export default () => {
  const { state, setState } = AppContext()
  const { activeButtonId } = state

  const buttons = [
    { id: 1, title: 'URL Encode/Decode' },
    { id: 2, title: 'URL Parser' }
  ]
  useEffect(() => {
    setState({ activeButtonId: buttons[0].id })
  }, [])

  return (
    <View style={styles.menuWrapper}>
      <ScrollView
        contentContainerStyle={styles.menuContentWrapper}
      >
        {
          buttons.map((button, key) => {
            return (
              <TouchableOpacity
                key={key}
                activeOpacity={1}
                onPress={() => setState({ activeButtonId: button.id })}
                style={[styles.buttonContainer, activeButtonId === button.id ? styles.active : '']}
              >
                <Text style={styles.buttonText}>
                  {button.title}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  menuWrapper: {
    width: 300,
    backgroundColor: '#2A282C'
  },
  menuContentWrapper: {
    padding: 24
  },
  buttonContainer: {
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  active: {
    backgroundColor: '#423E45'
  },
  buttonText: {
    color: '#fff'
  }
})
