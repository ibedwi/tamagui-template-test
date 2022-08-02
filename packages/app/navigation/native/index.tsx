import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { Platform, SafeAreaView, StatusBar } from 'react-native'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      >
        {(props) => (
          <SafeAreaView
            style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
          >
            <HomeScreen {...props} />
          </SafeAreaView>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
