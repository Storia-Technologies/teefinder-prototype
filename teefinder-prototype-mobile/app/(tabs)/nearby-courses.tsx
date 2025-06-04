import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';

const NearbyCoursesScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: -31.995,
          longitude: 115.881,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -31.995, longitude: 115.881 }}
          title="Point Walter Golf"
          description="$75/player"
        />
      </MapView>

      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={styles.headerNav}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#171725" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nearby Courses</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#171725" />
          </TouchableOpacity>
        </View>
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

      </View>

      <View style={[styles.bottomCard, { bottom: insets.bottom + 24 }]}>
        <View style={{
          flexDirection: 'row',
          gap: 12,
        }}>
          <Image source={require('@/assets/images/marangaru-golf.jpg')} style={styles.courseListImage} />
          <View style={styles.courseListInfo}>
            <View style={styles.courseListHeader}>
              <Text style={styles.courseListName}>Point Walter Golf</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#EDB900" />
                <Text style={styles.rating}>4.7</Text>
              </View>
            </View>
            <View style={styles.courseListLocation}>
              <Ionicons name="location-outline" size={12} color="#66707A" />
              <Text style={styles.courseListLocationText}>Bicton, WA</Text>
            </View>
            <View style={styles.courseListFooter}>
              <Text style={styles.courseListPricePer}><Text style={styles.courseListPrice}>$75</Text> /player</Text>

            </View>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.bookButton} >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageButton}>
            <Ionicons name="chatbox-ellipses-outline" size={24} color="#191D31" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    paddingHorizontal: 24,
    gap: 24
  },
  headerNav: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#FEFEFE',
    borderRadius: 100
  },
  filterButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171725',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
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

  bottomCard: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    elevation: 4,
    gap: 24
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
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#266807',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: '600',
  },
  messageButton: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#E2E4EA'
  },

});


export default NearbyCoursesScreen

