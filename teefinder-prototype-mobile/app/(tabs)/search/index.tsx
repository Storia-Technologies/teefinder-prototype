import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons'
import { useRouter } from 'expo-router'

const recentSearches = [
  { id: 1, name: "Whaleback Golf Course", location: "Parkwood, WA" },
  { id: 2, name: "Como Park Golf", location: "Como, WA" },
  { id: 3, name: "Point Walter Golf Course", location: "Bicton, WA" },
]

const recentlyViewed = [
  {
    id: 1,
    name: "Collier Park Golf",
    location: "Como, WA",
    price: 50,
    rating: 4.0,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 2,
    name: "Point Walter Golf Course",
    location: "Bicton, WA",
    price: 45,
    rating: 3.8,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 3,
    name: "Links Kennedy Bay",
    location: "Port Kennedy, WA",
    price: 75,
    rating: 3.8,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
]

const SearchScreen = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#78828A" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#9CA4AB"
        />
        <TouchableOpacity style={styles.expandButton}>
          <Octicons name="arrow-switch" size={18} color="#171725" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <TouchableOpacity>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        </View>

        {recentSearches.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.recentSearchItem}
            onPress={() => router.push("/(tabs)/search/results")}
          >
            <View style={styles.clockIconContainer}>
              <Ionicons name="time-outline" size={20} color="#999" />
            </View>
            <View style={styles.recentSearchTextContainer}>
              <Text style={styles.recentSearchName}>{item.name}</Text>
              <Text style={styles.recentSearchLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most Popular</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {recentlyViewed.map((course, index) => (
          <TouchableOpacity
            key={course.id}
            style={[styles.courseListItem, index === recentlyViewed.length - 1 && styles.lastCourseListItem]}
            onPress={() => router.push("/(tabs)/search/results")}
          >
            <Image source={course.image} style={styles.courseListImage} />
            <View style={styles.courseListInfo}>
              <View style={styles.courseListHeader}>
                <Text style={styles.courseListName}>{course.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#EDB900" />
                  <Text style={styles.rating}>{course.rating}</Text>
                </View>
              </View>
              <View style={styles.courseListLocation}>
                <Ionicons name="location-outline" size={12} color="#66707A" />
                <Text style={styles.courseListLocationText}>{course.location}</Text>
              </View>
              <View style={styles.courseListFooter}>
                <Text style={styles.courseListPricePer}><Text style={styles.courseListPrice}>${course.price}</Text> /player</Text>

              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E9EBED'
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#9CA4AB',
    position: 'relative',
    paddingRight: 18,
  },
  expandButton: {
    padding: 10,
    position: 'absolute',
    right: 0
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: '#111111'
  },
  clearAllText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#F41F52",
  },
  seeAll: {
    fontSize: 12, color: '#266807', fontWeight: 500
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 15
  },
  clockIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  recentSearchTextContainer: {
    flex: 1,
    gap: 4
  },
  recentSearchName: {
    fontSize: 14,
    fontWeight: "600",
    color: '#171725'
  },
  recentSearchLocation: {
    fontSize: 12,
    fontWeight: '400',
    color: "#9CA4AB",
  },

  courseListItem: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EBED',
    gap: 12,
  },
  lastCourseListItem: {
    borderBottomWidth: 0,
  },

  courseListImage: {
    width: 78,
    height: 78,
    borderRadius: 8,
  },
  courseListInfo: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 8
  },
  courseListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  courseListName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171725',
  },
  courseListLocation: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  courseListLocationText: {
    fontSize: 12,
    fontWeight: 400,
    color: '#66707A',
  },
  courseListFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseListPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#266807',
  },
  courseListPricePer: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171725',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#171725',
    fontSize: 14,
    fontWeight: 500,
    marginLeft: 4,
  },
})
export default SearchScreen
