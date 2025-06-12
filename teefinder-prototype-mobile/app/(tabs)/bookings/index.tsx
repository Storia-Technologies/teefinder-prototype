import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BOOKINGS = [
  {
    id: '1',
    title: 'Hamersley Public Golf Course',
    location: 'Karrinyup, WA',
    price: 45,
    date: '14 Nov 2025',
    players: 2,
    rating: 4.7,
    image: require('@/assets/images/hamersley.jpg'),
  },
  {
    id: '2',
    title: 'Collier Park Golf',
    location: 'Como, WA',
    price: 50,
    date: '25 April 2025',
    players: 1,
    rating: 4.0,
    image: require('@/assets/images/collier.jpg'),
  },
  {
    id: '3',
    title: 'Whaleback Golf Course',
    location: 'Riverton, WA',
    price: 38,
    date: '10 May 2025',
    players: 3,
    rating: 3.8,
    image: require('@/assets/images/whaleback.jpg'),
  },
];

const BookingsScreen = () => {
  const [tab, setTab] = useState<'Upcoming' | 'History'>('Upcoming');
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filteredBookings = BOOKINGS.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBookingPress = (item: typeof BOOKINGS[0]) => {
    // Only Collier Park Golf navigates to the detail screen for now
    if (item.id === '2') {
      router.push('/bookings/2' as any);
    }
  };

  const renderBooking = ({ item }: { item: typeof BOOKINGS[0] }) => (
    <TouchableOpacity
      activeOpacity={item.id === '2' ? 0.7 : 1}
      onPress={() => handleBookingPress(item)}
      disabled={item.id !== '2'}
      style={{}}
    >
      <View style={styles.bookingCard}>
        <Image source={item.image} style={styles.bookingImage} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.bookingTitle} numberOfLines={1}>{item.title}</Text>
            <MaterialIcons name="star" size={18} color="#FFC107" style={{ marginLeft: 6 }} />
            <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.location}><Ionicons name="location-outline" size={14} /> {item.location}</Text>
          <Text style={styles.price}>${item.price} <Text style={styles.perPlayer}>/player</Text></Text>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={16} color="#888" />
              <Text style={styles.infoText}>Date</Text>
              <Text style={styles.infoValue}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="people-outline" size={16} color="#888" />
              <Text style={styles.infoText}>Players</Text>
              <Text style={styles.infoValue}>{item.players}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={22} color="#222" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#bbb" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#bbb"
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={20} color="#1a7a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'Upcoming' && styles.tabBtnActive]}
          onPress={() => setTab('Upcoming')}
        >
          <Text style={[styles.tabText, tab === 'Upcoming' && styles.tabTextActive]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'History' && styles.tabBtnActive]}
          onPress={() => setTab('History')}
        >
          <Text style={[styles.tabText, tab === 'History' && styles.tabTextActive]}>History</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBooking}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: 20,
    marginTop: 0,
    justifyContent: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 48,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#222',
  },
  filterBtn: {
    position: 'absolute',
    right: 36,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderRadius: 24,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 4,
    height: 48,
    alignItems: 'center',
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    borderRadius: 20,
    height: 40,
  },
  tabBtnActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  tabText: {
    fontSize: 16,
    color: '#bbb',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#222',
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    alignItems: 'center',
  },
  bookingImage: {
    width: 80,
    height: 150,
    borderRadius: 14,
    backgroundColor: '#eee',
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    flex: 1,
  },
  rating: {
    fontSize: 14,
    color: '#222',
    fontWeight: '600',
    marginLeft: 2,
  },
  location: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    color: '#1a7a1a',
    fontWeight: '700',
    marginBottom: 2,
  },
  perPlayer: {
    color: '#888',
    fontWeight: '400',
    fontSize: 13,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 4,
    marginVertical: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  infoText: {
    fontSize: 13,
    color: '#888',
    marginLeft: 4,
    marginRight: 2,
  },
  infoValue: {
    fontSize: 13,
    color: '#222',
    fontWeight: '500',
    marginLeft: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
    marginLeft: 35,
    marginRight: 40, // Adjust this value for your desired divider length
    width: '100%',    // Divider is 80% of the card width, centered
    alignSelf: 'center',
    borderRadius: 1,
  },
});

export default BookingsScreen;