import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const notificationsData = [
  {
    id: '1',
    title: 'Whaleback Golf Course has updated their opening times!',
    time: '2 hours Ago',
    avatar: require('@/assets/images/whaleback.jpg'),
    section: 'Today',
    icon: null,
  },
  {
    id: '2',
    title: '20% discount this weekend at Stirling Leisure — Hamersley Public Golf Course',
    time: '2 hours Ago',
    avatar: require('@/assets/images/hamersley.jpg'),
    section: 'Today',
    icon: null,
  },
  {
    id: '3',
    title: 'Congratulations, you have successfully booked a game at Collier Park Golf',
    time: '2 hours Ago',
    avatar: null,
    section: 'Today',
    icon: { name: 'sparkles-outline', color: '#F7B731', bg: '#FDF6E9' }, // confetti
  },
  {
    id: '4',
    title: 'Payment has been successfully made, order is being processed',
    time: '2 hours Ago',
    avatar: null,
    section: 'Yesterday',
    icon: { name: 'cart-outline', color: '#266807', bg: '#EAF6E9' }, // cart
  },
  {
    id: '5',
    title: '20% discount this weekend at Stirling Leisure — Hamersley Public Golf Course',
    time: '2 hours Ago',
    avatar: require('@/assets/images/hamersley.jpg'),
    section: 'Yesterday',
    icon: null,
  },
  {
    id: '6',
    title: 'Congratulations, you have successfully booked a game at Collier Park Golf',
    time: '2 hours Ago',
    avatar: null,
    section: 'Yesterday',
    icon: { name: 'sparkles-outline', color: '#F7B731', bg: '#FDF6E9' }, // confetti
  },
];

const filterOptions = [
  { id: 'new', label: 'New Notification' },
  { id: 'chat', label: 'By Chat' },
  { id: 'longest', label: 'Longest' },
  { id: 'discount', label: 'Discounts' },
];

export default function NotificationsScreen() {
  const [filterModal, setFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(['chat']);
  const router = useRouter(); // Add router for navigation

  interface NotificationItem {
    id: string;
    title: string;
    time: string;
    avatar: any;
    section: string;
    icon?: { name: string; color: string; bg: string } | null;
  }

  const renderSection = (section: string) => (
    <Text style={styles.sectionHeader}>{section}</Text>
  );

  const renderAvatarOrIcon = (item: NotificationItem) => {
    if (item.icon) {
      return (
        <View style={[styles.iconAvatar, { backgroundColor: item.icon.bg }]}>
          <Ionicons name={item.icon.name as any} size={22} color={item.icon.color} />
        </View>
      );
    }
    return (
      <Image source={item.avatar} style={styles.avatar} />
    );
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: NotificationItem;
    index: number;
  }) => (
    <View>
      {index === 0 || notificationsData[index - 1].section !== item.section
        ? renderSection(item.section)
        : null}
      <View style={styles.notificationRow}>
        {renderAvatarOrIcon(item)}
        <View style={{ flex: 1 }}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
      {(index < notificationsData.length - 1 &&
        notificationsData[index + 1].section === item.section) && (
        <View style={styles.divider} />
      )}
    </View>
  );

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev: string[]) =>
      prev.includes(id)
        ? prev.filter((f: string) => f !== id)
        : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#171725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={() => setFilterModal(true)}>
          <Ionicons name="filter" size={24} color="#171725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={filterModal}
        animationType="slide"
        transparent
        onRequestClose={() => setFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Filter By</Text>
            {filterOptions.map((opt) => (
              <Pressable
                key={opt.id}
                style={styles.filterOption}
                onPress={() => toggleFilter(opt.id)}
              >
                <View style={[
                  styles.checkbox,
                  selectedFilters.includes(opt.id) && styles.checkboxChecked
                ]}>
                  {selectedFilters.includes(opt.id) && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.filterLabel}>{opt.label}</Text>
              </Pressable>
            ))}
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => setFilterModal(false)}
            >
              <Text style={styles.applyBtnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    marginTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fafbfc',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171725',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171725',
    marginTop: 18,
    marginBottom: 8,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  iconAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationTitle: {
    fontSize: 15,
    color: '#171725',
    fontWeight: '400',
    marginBottom: 2,
  },
  notificationTime: {
    fontSize: 13,
    color: '#9CA4AB',
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginLeft: 52,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(23,23,37,0.18)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
  },
  modalHandle: {
    alignSelf: 'center',
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E9EBED',
    marginBottom: 18,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#171725',
    marginBottom: 18,
    textAlign: 'center',
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#B7B7B7',
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#266807',
    borderColor: '#266807',
  },
  filterLabel: {
    fontSize: 15,
    color: '#171725',
  },
  applyBtn: {
    backgroundColor: '#266807',
    borderRadius: 8,
    marginTop: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  applyBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});