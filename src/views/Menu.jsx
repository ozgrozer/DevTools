import { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

export default () => {
  const buttons = [
    { id: 1, title: 'URL Encode/Decode' },
    { id: 2, title: 'URL Parser' }
  ]
  const [activeButtonId, setActiveButtonId] = useState(buttons[0].id)

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
                onPress={() => setActiveButtonId(button.id)}
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
