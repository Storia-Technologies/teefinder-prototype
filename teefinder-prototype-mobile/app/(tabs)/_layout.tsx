import { Tabs, usePathname } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: pathname === '/nearby-courses' ? { display: 'none' } : Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   default: {},
        // }),
        sceneStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="list-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="message1" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="nearby-courses"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
