import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const facilities: {
  id: string;
  name: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
}[] = [
  { id: 'all', name: 'All' },
  { id: 'tavern', name: 'Tavern', icon: 'restaurant-outline' },
  { id: 'hire', name: 'Hire', icon: 'golf-outline' },
  { id: 'eot', name: 'End of Trip', icon: 'business-outline' },
];

const FAVOURITES = [
  {
    id: '1',
    title: 'Collier Park Golf',
    location: 'Como, WA',
    price: 50,
    rating: 4.4,
    reviews: 532,
    image: require('@/assets/images/collier.jpg'),
  },
  {
    id: '2',
    title: 'Links Kennedy Bay',
    location: 'Port Kennedy, WA',
    price: 50,
    rating: 4.4,
    reviews: 532,
    image: require('@/assets/images/kennedy.jpg'),
  },
  {
    id: '3',
    title: 'Stirling Leisure – Hamersley',
    location: 'Karrinyup, WA',
    price: 50,
    rating: 4.4,
    reviews: 532,
    image: require('@/assets/images/hamersley.jpg'),
  },
  {
    id: '4',
    title: 'Whaleback Golf Course',
    location: 'Parkwood, WA',
    price: 50,
    rating: 4.4,
    reviews: 532,
    image: require('@/assets/images/whaleback.jpg'),
  },
];

export default function FavouritesScreen() {
  const [selectedFacility, setSelectedFacility] = useState('all');
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Filter logic placeholder (expand as needed)
  const filtered = FAVOURITES.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile' as any)}>
          <Ionicons name="arrow-back" size={24} color="#171725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Favorites</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#171725" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <Ionicons name="search-outline" size={20} color="#9CA4AB" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#9CA4AB"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity>
          <Ionicons name="options-outline" size={22} color="#171725" />
        </TouchableOpacity>
      </View>

      {/* Facilities Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsRow}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        {facilities.map((facility) => (
          <TouchableOpacity
            key={facility.id}
            style={[
              styles.filterTab,
              selectedFacility === facility.id && styles.activeFilterTab,
            ]}
            onPress={() => setSelectedFacility(facility.id)}
          >
            {facility.icon && (
              <Ionicons
                name={facility.icon}
                size={16}
                color={selectedFacility === facility.id ? '#fff' : '#66707A'}
                style={{ marginRight: 4 }}
              />
            )}
            <Text
              style={[
                styles.filterTabText,
                selectedFacility === facility.id && styles.activeFilterTabText,
              ]}
            >
              {facility.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Favourites Grid */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 12 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        renderItem={({ item }) => {
          const isCollierPark = item.title === 'Collier Park Golf';
          const CardContent = (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <TouchableOpacity style={styles.heartBtn}>
                <Ionicons name="heart-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <View style={styles.cardInfo}>
                <View style={styles.cardRatingRow}>
                  <Ionicons name="star" size={14} color="#FFC107" />
                  <Text style={styles.cardRating}>
                    {item.rating.toFixed(1)} <Text style={styles.cardReviews}>({item.reviews})</Text>
                  </Text>
                </View>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardLocation}>{item.location}</Text>
                <Text style={styles.cardPrice}>
                  ${item.price} <Text style={styles.cardPerPlayer}>Per Player</Text>
                </Text>
              </View>
            </View>
          );
          return (
            <View style={{ flex: 1 }}>
              {isCollierPark ? (
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={{ flex: 1 }}
                  onPress={() => router.push('/(tabs)/search/details')}
                >
                  {CardContent}
                </TouchableOpacity>
              ) : (
                CardContent
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingTop: 35, // space for status bar and header
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
    color: '#171725',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20, // less rounded
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    height: 45,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#222',
  },
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 0,
  },
  filterTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#E9EBED',
    marginRight: 8,
  },
  activeFilterTab: {
    backgroundColor: '#266807',
  },
  filterTabText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#66707A',
    marginLeft: 4,
  },
  activeFilterTabText: {
    color: 'white',
    fontSize: 12, // keep consistent size
    fontWeight: '600',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12, // less rounded
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 130, // taller image
  },
  heartBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    padding: 6,
  },
  cardInfo: {
    padding: 12,
    gap: 2,
  },
  cardRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  cardRating: {
    fontSize: 13,
    color: '#171725',
    fontWeight: '600',
    marginLeft: 4,
  },
  cardReviews: {
    color: '#9CA4AB',
    fontWeight: '400',
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171725',
    marginTop: 2,
  },
  cardLocation: {
    fontSize: 12,
    color: '#66707A',
  },
  cardPrice: {
    fontSize: 15,
    color: '#171725',
    fontWeight: 'bold',
  },
  cardPerPlayer: {
    fontSize: 12,
    color: '#66707A',
  },
});