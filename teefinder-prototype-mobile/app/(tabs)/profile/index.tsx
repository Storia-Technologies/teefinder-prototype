import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const profileOptions = [
  {
    icon: <Ionicons name="heart-outline" size={22} color="#222" />,
    label: 'Your Favorites',
    route: '/(tabs)/favorites',
  },
  {
    icon: <MaterialIcons name="credit-card" size={22} color="#222" />,
    label: 'Your Payment Methods',
    route: '/profile/payment-methods',
  },
  {
    icon: <Ionicons name="shield-checkmark-outline" size={22} color="#222" />,
    label: 'Security',
    route: '/profile/security',
  },
  {
    icon: <Ionicons name="notifications-outline" size={22} color="#222" />,
    label: 'Notification',
    route: '/profile/notifications',
  },
  {
    icon: <Feather name="globe" size={22} color="#222" />,
    label: 'Languages',
    route: '/profile/languages',
  },
  {
    icon: <Feather name="help-circle" size={22} color="#222" />,
    label: 'Help and Support',
    route: '/profile/help-support',
  },
];

const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    // Add logout logic here
    router.push('/auth/login');
    toggleModal();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Info */}
      <View style={styles.profileRow}>
        <Image
          source={require('@/assets/images/avatar.png')}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.username}>@JDoe</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/profile/edit')}>
          <Feather name="edit-2" size={20} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Settings Label */}
      <Text style={styles.settingLabel}>Setting</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {profileOptions.map((option, idx) => (
          <View key={option.label}>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => option.route && router.push(option.route as any)}
            >
              {option.icon}
              <Text style={styles.optionLabel}>{option.label}</Text>
            </TouchableOpacity>
            {idx < profileOptions.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={toggleModal}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Logout Confirmation Modal */}
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="help-circle-outline" size={50} color="#ff3b30" />
            <Text style={styles.modalTitle}>Are You Sure?</Text>
            <Text style={styles.modalMessage}>Do you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={toggleModal}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.logoutButton]}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 24,
    color: '#222',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  username: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  settingLabel: {
    color: '#bfc5cb',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 2,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 30,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  optionLabel: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
    marginLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 38,
  },
  logoutBtn: {
    marginTop: 18,
    alignItems: 'center',
  },
  logoutText: {
    color: '#ff3b30',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginTop: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1a7a1a',
  },
  cancelButtonText: {
    color: '#1a7a1a',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProfileScreen;