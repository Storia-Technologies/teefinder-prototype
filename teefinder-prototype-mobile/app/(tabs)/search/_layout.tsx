import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

const SearchLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
    }} />
  )
}

export default SearchLayout