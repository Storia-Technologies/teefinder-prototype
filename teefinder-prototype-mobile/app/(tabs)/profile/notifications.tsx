import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState({
    newEvent: true,
    delivery: false,
    message: true,
    payment: false,
  });

  const router = useRouter();

  const toggleSwitch = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Notifications Section */}
      <View style={styles.notificationSection}>
        <Text style={styles.sectionTitle}>Messages Notifications</Text>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationLabel}>New Event</Text>
          <Switch
            value={notifications.newEvent}
            onValueChange={() => toggleSwitch('newEvent')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={notifications.newEvent ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationLabel}>Delivery</Text>
          <Switch
            value={notifications.delivery}
            onValueChange={() => toggleSwitch('delivery')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={notifications.delivery ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationLabel}>Message</Text>
          <Switch
            value={notifications.message}
            onValueChange={() => toggleSwitch('message')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={notifications.message ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationLabel}>Payment</Text>
          <Switch
            value={notifications.payment}
            onValueChange={() => toggleSwitch('payment')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={notifications.payment ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingTop: 56,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  notificationSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  notificationLabel: {
    fontSize: 16,
    color: '#222',
  },
});

export default NotificationsScreen;