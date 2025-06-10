import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { useRouter } from 'expo-router'
const facilities = [
  { id: "tavern", name: "Tavern", icon: "beer-outline" },
  { id: "restaurant", name: "Restaurant", icon: "restaurant-outline" },
  { id: "driving", name: "Driving Range", icon: "golf-outline" },
  { id: "eot", name: "End of Trip Facilities", icon: "flag-outline" },
]

const reviews = [
  {
    id: 1,
    name: "Uncle Bob",
    rating: 4.5,
    comment: "Amazing! The room is good then the picture. Thanks for amazing experience!",
    avatar: require('@/assets/images/avatar.png')
  },
  {
    id: 2,
    name: "Jane Doe",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png')
  },
]

const recommendations = [
  {
    id: 1,
    name: "Lumière Palace",
    location: "Las Vegas, NV",
    rating: 4.4,
    reviews: 537,
    price: 210,
    originalPrice: 345,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 2,
    name: "Tranquil Shores",
    location: "Santa Monica, CA",
    rating: 4.4,
    reviews: 537,
    price: 210,
    originalPrice: 345,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
]

const DetailsScreen = () => {
  const router= useRouter()
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>

          <Image source={require('@/assets/images/marangaru-golf.jpg')} style={{ height: '100%', width: '100%' }} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseName}>Collier Park Golf</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={18} color="#266807" />
              <Text style={styles.locationText}>Como, WA</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#EDB900" />
                <Text style={styles.ratingText}>4.6</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Common Facilities</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facilitiesContainer}>
            {facilities.map((facility) => (
              <View key={facility.id} style={styles.facilityItem}>
                <View style={styles.facilityIconContainer}>
                  <Ionicons name={facility.icon as any} size={24} color="#000" />
                </View>
                <Text style={styles.facilityName} numberOfLines={2}>{facility.name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Description</Text>
          </View>
          <Text style={styles.descriptionText}>
            Collier Park Golf is a 27 hole international standard public golf course, driving range and practice ....
            <Text style={styles.readMoreText}>Read More</Text>
          </Text>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Location</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Open Map</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer} >
            <View style={styles.mapLocationContainer}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: -31.995,
                  longitude: 115.881,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}
              />
            </View>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={18} color="#266807" />
              <Text style={styles.locationText}>Como, WA</Text>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity
            onPress={() => router.push("/(tabs)/search/reviews")}
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewContainer}>
                <Image source={review.avatar} style={styles.reviewAvatar} />
                <View style={{ flexShrink: 1 }}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    <View style={styles.reviewRating}>
                      <Ionicons name="star" size={16} color="#FFBB0D" />
                      <Text style={styles.reviewRatingText}>{review.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.reviewComment}>{review.comment}</Text>
                </View>
              </View>
            </View>
          ))}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <View style={{ flexDirection: 'row', gap: 16 }}>
              {recommendations.map((recommendation) => (
                <TouchableOpacity key={recommendation.id} style={styles.recommendationItem}>
                  <Image
                    source={recommendation.image}
                    style={styles.recommendationImage}
                  />
                  <View style={styles.recommendationInfo}>
                    <Text style={styles.recommendationName} numberOfLines={1}>{recommendation.name}</Text>
                    <View style={styles.recommendationLocation}>
                      <Ionicons name="location" size={14} color="#66707A" />
                      <Text style={styles.recommendationLocationText}>{recommendation.location}</Text>
                    </View>
                    <View style={styles.recommendationFooter}>
                      <View style={styles.recommendationRating}>
                        <Ionicons name="star" size={14} color="#EDB900" />
                        <Text style={styles.recommendationRatingText}>
                          {recommendation.rating} <Text style={styles.recommendationRatingReviewText}>({recommendation.reviews})</Text>
                        </Text>
                      </View>
                      <View style={styles.recommendationPricing}>
                        <Text style={styles.recommendationPrice}>${recommendation.price}</Text>
                        <Text style={styles.recommendationOriginalPrice}>${recommendation.originalPrice}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$120.00</Text>
        </View>
        <TouchableOpacity style={styles.bookingButton} onPress={()=>router.push('/(tabs)/booking')}>
          <Text style={styles.bookingButtonText}>Booking Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
    backgroundColor: "#e0e0e0",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  detailsContainer: {
    padding: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  courseHeader: {
    marginBottom: 16,
    gap: 5
  },
  courseName: {
    fontSize: 18,
    fontWeight: "600",
    color: '#171725',
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
    marginRight: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  facilityItem: {
    alignItems: "center",
    // marginRight:28
  },
  facilityIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: "#33961B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  facilityName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#78828A',
    textAlign: "center",
    maxWidth: 64
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: '#111111'
  },
  seeAllText: {
    fontSize: 12, color: '#266807', fontWeight: 500
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 24,
  },
  readMoreText: {
    color: "#266807",
    fontWeight: "500",
  },
  mapContainer: {
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 15,
    marginBottom: 24,
    padding: 5,
    gap: 15
  },
  mapLocationContainer: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  reviewItem: {
    marginBottom: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  reviewAvatar: {
    width: 38,
    height: 38,
    borderRadius: 50
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: "600",
    color: '#191D31'
  },
  reviewRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewRatingText: {
    fontSize: 12,
    fontWeight: "600",
    color: '#171725',
    marginLeft: 4,
  },
  reviewComment: {
    fontSize: 12,
    color: "#9CA4AB",
    lineHeight: 20,
  },
  recommendationItem: {
    width: 290,
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#E9EBED',
    borderWidth: 1,
    padding: 12
  },
  recommendationImage: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },
  recommendationInfo: {
    flex: 1,

  },
  recommendationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171725',
    marginBottom: 4
  },
  recommendationLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  recommendationLocationText: {
    fontSize: 14,
    color: '#66707A',
  },
  recommendationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendationRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationRatingText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#EDB900',
  },
  recommendationRatingReviewText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#9CA4AB',
  },
  recommendationPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  recommendationPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#171725',
  },
  recommendationOriginalPrice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F41F52',
    textDecorationLine: 'line-through',
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    borderRadius: 16,
    backgroundColor: '#FFFFFF'
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: "#A7AEC1",
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "600",
    color: '#191D31'
  },
  bookingButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  bookingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})
export default DetailsScreen