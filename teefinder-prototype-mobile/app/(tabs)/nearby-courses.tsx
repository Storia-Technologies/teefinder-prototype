import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import { withModalProvider } from '@/components/withModalProvider';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import SearchFilter from '@/components/SearchFilter';
import { hasGoogleMapsApiKey } from '@/constants/Config';

const golfCourses = [
  {
    id: 1,
    name: 'Point Walter Golf',
    location: 'Bicton, WA',
    price: 75,
    rating: 4.7,
    image: require('@/assets/images/marangaru-golf.jpg'),
    coordinate: { latitude: -32.0304, longitude: 115.7692 },
  },
  {
    id: 2,
    name: 'Collier Park Golf',
    location: 'Como, WA',
    price: 50,
    rating: 4.0,
    image: require('@/assets/images/marangaru-golf.jpg'),
    coordinate: { latitude: -31.9505, longitude: 115.8605 },
  },
  {
    id: 3,
    name: 'Wembley Golf Course',
    location: 'Wembley, WA',
    price: 65,
    rating: 4.5,
    image: require('@/assets/images/marangaru-golf.jpg'),
    coordinate: { latitude: -31.9369, longitude: 115.8114 },
  },
  {
    id: 4,
    name: 'Kings Park Golf',
    location: 'West Perth, WA',
    price: 80,
    rating: 4.7,
    image: require('@/assets/images/marangaru-golf.jpg'),
    coordinate: { latitude: -31.9614, longitude: 115.8394 },
  },
];

const NearbyCoursesScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = useMemo(() => ["25%", "50%", "95%"], []);
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    ),
    []
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {hasGoogleMapsApiKey ? (
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: -31.995,
            longitude: 115.881,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {golfCourses.map((course) => (
            <Marker
              key={course.id}
              coordinate={course.coordinate}
            >
              <View style={styles.markerContainer}>
                <Image source={course.image} style={styles.markerImage} />
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{course.rating}</Text>
                </View>
              </View>
            </Marker>
          ))}
        </MapView>
      ) : (
        <View style={[StyleSheet.absoluteFillObject, styles.mapFallback]}>
          <Text style={styles.mapFallbackTitle}>Google Maps unavailable</Text>
          <Text style={styles.mapFallbackSubtitle}>
            Add a Google Maps API key to explore nearby courses on the map.
          </Text>
        </View>
      )}

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
            onPress={() => router.navigate('/(tabs)/search')}
          />
          <TouchableOpacity style={styles.expandButton} onPress={handlePresentModalPress}>
            <Octicons name="arrow-switch" size={18} color="#171725" />
          </TouchableOpacity>
          <BottomSheetModal
            enablePanDownToClose
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            index={2}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            backdropComponent={renderBackdrop}

          >
            <BottomSheetScrollView>
              <SearchFilter onClose={handleCloseModalPress}
              />
            </BottomSheetScrollView>
          </BottomSheetModal>
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
  mapFallback: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 24,
    gap: 6,
  },
  mapFallbackTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171725',
  },
  mapFallbackSubtitle: {
    fontSize: 14,
    color: '#66707A',
    textAlign: 'center',
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 150,
    // height: 150,
    // backgroundColor: '#000',
    position: 'relative'
  },
  markerImage: {
    width: 38,
    height: 38,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#fff',
    objectFit: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  ratingText: {
    color: '#171725',
    fontSize: 10,
    fontWeight: '600',
  },
});


export default withModalProvider(NearbyCoursesScreen)

