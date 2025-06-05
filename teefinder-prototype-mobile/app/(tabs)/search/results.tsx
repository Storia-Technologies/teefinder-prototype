import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons'
import { useRouter } from 'expo-router'

const golfCourses = [
  {
    id: 1,
    name: "Collier Park Golf",
    location: "Como, WA",
    price: 50,
    rating: 4.9,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 2,
    name: "Links Kennedy Bay",
    location: "Port Kennedy, WA",
    price: 75,
    rating: 4.9,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
]

const SearchResultsScreen = () => {
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
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterTabs}>
          <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
            <Text style={[styles.filterTabText, styles.activeFilterTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="restaurant-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>Tavern</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="golf-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>Hire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="calendar-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>End of Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="restaurant-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>Tavern</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="golf-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>Hire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Ionicons name="calendar-outline" size={16} color="#66707A" />
            <Text style={styles.filterTabText}>End of Trip</Text>
          </TouchableOpacity>
        </ScrollView></View>
      <ScrollView showsVerticalScrollIndicator={false} >
        {golfCourses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseItem} onPress={() => router.push("/(tabs)/search/details")}>
            <View style={styles.courseImageContainer}>
              <Image source={course.image} style={styles.courseImage} />
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={16} color="#F4C700" />
                <Text style={styles.ratingBadgeText}>{course.rating}</Text>
              </View>
              <TouchableOpacity style={styles.favoriteButton}>
                <Ionicons name="heart-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.courseDetails}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.coursePrice}>${course.price}</Text>
              </View>
              <View style={styles.courseLocation}>
                <Text style={styles.courseLocationText}>{course.location}</Text>
                <Text style={styles.perPlayerText}>Per Player</Text>
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
  filterTabs: {
    marginVertical: 16,
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
    fontWeight: 400,
    color: '#66707A',
    marginLeft: 4,
  },
  activeFilterTabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 600
  },

  courseItem: {
    marginBottom: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",

  },
  courseImageContainer: {
    height: 180,
    position: "relative",
  },
  courseImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 4,
  },
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  courseDetails: {
    paddingTop: 12,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "600",
    color: '#171725'
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#266807",
  },
  courseLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseLocationText: {
    fontSize: 12,
    color: "#9CA4AB",
  },
  perPlayerText: {
    fontSize: 12,
    color: "#878787",
  },
})

export default SearchResultsScreen