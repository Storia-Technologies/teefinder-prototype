import { Tabs, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const router = useRouter()
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
        sceneStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
        lazy: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="school" color={color} />,
          href: null,
          headerShown: false, // Hide the header for the Courses screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="bookings/index"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="list-alt" color={color} />,
          headerShown: false, // Hide the header for the Bookings screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="bookings/[id]/index"
        options={{
          title: 'Booking Details',
          href: null,
          headerShown: false, // Hide the header for the Booking Details screen
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'My Favorites',
          headerShown: false, // Hide the header for the Favorites screen
          href: null,
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
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/edit/index"
        options={{
          title: 'Edit Profile',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/legal-policies"
        options={{
          title: 'Legal & Policies',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/languages"
        options={{
          title: 'Languages',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/notifications"
        options={{
          title: 'Notifications',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/help-support"
        options={{
          title: 'Help & Support',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/security"
        options={{
          title: 'Security',
          href: null,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          headerShown: false, // Hide the header for the Profile screen and its nested screens
        }}
      />
      <Tabs.Screen
        name="profile/payment-methods"
        options={{
          href: null,
          title: 'Your Payment Methods',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="nearby-courses"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: null,
          title: 'Search',
          headerLeft: (props) => (
            <TouchableOpacity
              style={{ marginLeft: 12 }}
              onPressIn={() => router.back()}
              {...props}
            >
              <Ionicons name="arrow-back" size={24} color="#171725" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              paddingRight: 12,
            }}>
              <IconButton
                icon="bell-badge-outline"
                mode='outlined'
                size={20}
                onPress={() => router.navigate('/(tabs)/notifications')}
              />

            </View>
          )
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          href: null,
          title: 'Booking',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
