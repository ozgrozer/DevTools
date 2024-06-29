import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import vars from 'styles/vars'
import buttons from 'functions/buttons'
import { AppContext } from 'contexts/AppContext'

export default () => {
  const { state, setState } = AppContext()
  const { activeButtonId } = state

  return (
    <View style={styles.menuWrapper}>
      <ScrollView
        contentContainerStyle={styles.menuContentWrapper}
      >
        {
          buttons.map((button, key) => {
            const buttonIsActive = activeButtonId === button.id
            const settingsButtonIsActive = false

            return (
              <TouchableOpacity
                key={key}
                activeOpacity={1}
                onPress={() => setState({ activeButtonId: button.id })}
                style={[styles.buttonContainer, buttonIsActive ? styles.active : '']}
              >
                <Text style={styles.buttonText}>
                  {button.title}
                </Text>

                {(buttonIsActive && button.hasSettingsButton) && (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.settingsButton, settingsButtonIsActive ? styles.active : '']}
                  >
                    <Text>S</Text>
                  </TouchableOpacity>
                )}
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
    width: 280,
    backgroundColor: vars.raisinBlack
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
    backgroundColor: vars.jet
  },
  buttonText: {
    color: vars.white
  },
  settingsButton: {
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
