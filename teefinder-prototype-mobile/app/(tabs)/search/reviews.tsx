import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
const reviews = [
  {
    id: 1,
    name: "Uncle Bob",
    rating: 4.5,
    comment: "Amazing! The course is better than the picture. Thanks for amazing experience!",
    avatar: require('@/assets/images/avatar.png'),
  },
  {
    id: 2,
    name: "Mirai Kamizuki",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png'),
  },
  {
    id: 3,
    name: "Jane Doe",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png'),
  },
  {
    id: 4,
    name: "Rezikan Akay",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png'),
  },
  {
    id: 5,
    name: "Rezingkaly",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png'),
  },
  {
    id: 6,
    name: "Andizky",
    rating: 5.0,
    comment: "The service is on point, and I really like the facilities. Good job!",
    avatar: require('@/assets/images/avatar.png'),
  },
]
const averageRating = 4.4
const totalReviews = 532
const ReviewsScreen = () => {
  return (
    <ScrollView style={{ padding: 14 }}>
      <View style={styles.ratingOverview}>
        <Text style={styles.averageRating}>{averageRating}</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={'star'}
              size={18}
              color="#EDB900"
            />
          ))}
        </View>
        <Text style={styles.totalReviews}>Based on {totalReviews} review</Text>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Reviews ({totalReviews})</Text>
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
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ratingOverview: {
    alignItems: "center",
    paddingVertical: 24,
    marginBottom: 24
  },
  averageRating: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
    color: '#171725'
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  totalReviews: {
    fontSize: 12,
    color: "#9CA4AB",
    fontWeight: '500',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: '#171725'
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
})
export default ReviewsScreen