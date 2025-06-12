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

const SecurityScreen = () => {
  const [securitySettings, setSecuritySettings] = useState({
    faceID: true,
    rememberPassword: true,
    touchID: false,
  });

  const router = useRouter();

  const toggleSwitch = (key: keyof typeof securitySettings) => {
    setSecuritySettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile' as any)}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.securitySection}>
        <View style={styles.securityItem}>
          <Text style={styles.securityLabel}>Face ID</Text>
          <Switch
            value={securitySettings.faceID}
            onValueChange={() => toggleSwitch('faceID')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={securitySettings.faceID ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
        <View style={styles.securityItem}>
          <Text style={styles.securityLabel}>Remember Password</Text>
          <Switch
            value={securitySettings.rememberPassword}
            onValueChange={() => toggleSwitch('rememberPassword')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={securitySettings.rememberPassword ? '#1a7a1a' : '#f4f3f4'}
          />
        </View>
        <View style={styles.securityItem}>
          <Text style={styles.securityLabel}>Touch ID</Text>
          <Switch
            value={securitySettings.touchID}
            onValueChange={() => toggleSwitch('touchID')}
            trackColor={{ false: '#ccc', true: '#1a7a1a' }}
            thumbColor={securitySettings.touchID ? '#1a7a1a' : '#f4f3f4'}
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
  securitySection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
  },
  securityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  securityLabel: {
    fontSize: 16,
    color: '#222',
  },
});

export default SecurityScreen;