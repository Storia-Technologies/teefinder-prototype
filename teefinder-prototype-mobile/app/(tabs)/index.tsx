import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Stack, useRouter } from 'expo-router';
import { Icon, IconButton } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const golfCourses = [
  {
    id: 1,
    name: 'Marangaroo Golf Course',
    location: 'Marangaroo, WA',
    price: 50,
    rating: 4.5,
    reviews: 100,
    originalPrice: 60,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 2,
    name: 'Collier Park Golf',
    location: 'Como, WA',
    price: 50,
    rating: 4.5,
    reviews: 100,
    originalPrice: 60,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
  {
    id: 3,
    name: 'Wembley Golf Course',
    location: 'Wembley, WA',
    price: 45,
    rating: 4.0,
    reviews: 100,
    originalPrice: 60,
    image: require('@/assets/images/marangaru-golf.jpg'),
  },
];

const membershipBenefits = [
  {
    id: 'free',
    tier: 'Free',
    headline: '$4 booking fee per round',
    entries: '4 raffle entries for every booking',
  },
  {
    id: 'lite',
    tier: 'Lite',
    headline: '$14.99 / month',
    entries: '30 monthly entries + $2 booking fee',
  },
  {
    id: 'pro',
    tier: 'Pro',
    headline: '$29.99 / month',
    entries: 'Free booking fees + bonus prize access',
  },
];

const rewardSpotlights = [
  {
    id: 'gear',
    title: 'Weekly Gear Giveaway',
    detail: 'Drivers, putters and rangefinders from top brands.',
  },
  {
    id: 'rounds',
    title: 'Free Foursome Fridays',
    detail: 'Win a complimentary tee time for you and friends.',
  },
  {
    id: 'trips',
    title: 'Season Grand Prize',
    detail: 'Bucket-list golf trips and VIP tournament passes.',
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  return (
    <>
      <Stack.Screen options={{
        headerTitle: () => (<View style={styles.headerTitle}>
          <Image source={require('@/assets/images/avatar.png')} style={styles.avatarLogo} />
          <View>
            <Text style={{ fontWeight: 600, fontSize: 16 }}>John Doe</Text>
            <Text style={{ fontSize: 14, color: '#66707A' }}><Icon
              source="map-marker-outline"
              color={'#66707A'}
              size={16}
            />Perth, WA</Text>
          </View>
        </View>),
        headerRight: () => (
          <View style={{ ...styles.headerTitle, paddingRight: 12, gap: 0 }}>
            <IconButton
              icon="magnify"
              mode='outlined'
              size={20}
              onPress={()=>router.navigate('/(tabs)/search')}
            />

            <IconButton
              icon="bell-badge-outline"
              mode='outlined'
              size={20}
              onPress={() => router.navigate('/(tabs)/notifications')}
            />

          </View>
        )
      }} />
      <ScrollView style={{ padding: 14 }}>
        <View style={{ gap: 24 }}>
          <View style={{ backgroundColor: '#33961B', padding: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 5 }}>
            <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: '100%' }}>
              <Icon
                source="map-marker"
                color={Colors[colorScheme ?? 'light'].tint}
                size={30}
              /></View>
            <View style={{ flexShrink: 1 }}>
              <Text style={{ color: '#F6F6F6' }}>You Can Change Your Location to show nearby courses</Text>
            </View>
            <Icon
              source="chevron-right"
              color={'#171725'}
              size={30}
            />
          </View>
          <LinearGradient
            colors={['#14532D', '#1B7A47']}
            style={styles.membershipCard}
          >
            <View style={styles.membershipHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.membershipLabel}>Membership</Text>
                <Text style={styles.membershipTitle}>Lite plan active</Text>
                <Text style={styles.membershipSubtitle}>Collecting 30 raffle entries every month</Text>
              </View>
              <TouchableOpacity
                style={styles.membershipButton}
                onPress={() => router.push('/(tabs)/profile/membership')}
              >
                <Text style={styles.membershipButtonText}>View plans</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 16 }}>
              <View style={styles.membershipBenefitRow}>
                {membershipBenefits.map((benefit) => (
                  <View key={benefit.id} style={styles.membershipBenefitCard}>
                    <Text style={styles.membershipBenefitTier}>{benefit.tier}</Text>
                    <Text style={styles.membershipBenefitHeadline}>{benefit.headline}</Text>
                    <Text style={styles.membershipBenefitEntries}>{benefit.entries}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </LinearGradient>
          <View style={styles.rewardsSection}>
            <View style={styles.rewardsHeader}>
              <Text style={styles.rewardsTitle}>Rewards & Raffles</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/rewards')}>
                <Text style={styles.rewardsLink}>See details</Text>
              </TouchableOpacity>
            </View>
            {rewardSpotlights.map((reward) => (
              <View key={reward.id} style={styles.rewardRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.rewardRowTitle}>{reward.title}</Text>
                  <Text style={styles.rewardRowDescription}>{reward.detail}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#1B7A47" />
              </View>
            ))}
            <TouchableOpacity
              style={styles.rewardsCta}
              onPress={() => router.push('/(tabs)/rewards')}
            >
              <Text style={styles.rewardsCtaText}>Enter this week’s raffles</Text>
              <Ionicons name="sparkles-outline" size={18} color="#0F172A" />
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Most Popular</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={{ flexDirection: 'row', gap: 12 }}>
                {golfCourses.map((course) => (
                  <View key={course.id} style={{
                    borderRadius: 12, height: 220, width: 156, overflow: 'hidden',
                    justifyContent: 'space-between'
                  }}>
                    <Image source={course.image} style={{ position: 'absolute', inset: 0, borderRadius: 12 }} />
                    <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                      style={styles.gradientBackground}
                    />
                    <IconButton icon="heart"
                      mode='contained'
                      iconColor='#F41F52'
                      containerColor='#fff'
                      size={10}
                      style={{
                        alignSelf: 'flex-end'
                      }} />
                    <View style={{ padding: 12, gap: 5 }}>
                      <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }} numberOfLines={1}>{course.name}</Text>
                      <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: 400 }}>{course.location}</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 600 }}>${course.price} /player</Text>
                        <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 400 }}>
                          <Icon
                            source="star"
                            color={'#FCD400'}
                            size={12}
                          />{course.rating}</Text>
                      </View>
                    </View>
                  </View>
                ))}

              </View>
            </ScrollView>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recommended for you</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

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
            </ScrollView>

            {golfCourses.map((course, index) => (
              <TouchableOpacity
                key={course.id}
                style={[styles.courseListItem, index === golfCourses.length - 1 && styles.lastCourseListItem]}
                onPress={()=>router.push('/(tabs)/search/details')}
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
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Courses Near You</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/nearby-courses')}>
                <Text style={styles.seeAll}>Open Map</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: -31.995,
                  longitude: 115.881,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}
              >
              </MapView>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>Best Today</Text>
                <Text style={styles.fireEmoji}>🔥</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity style={styles.bestTodayItem}>
                  <Image
                    source={golfCourses[2].image}
                    style={styles.bestTodayImage}
                  />
                  <View style={styles.bestTodayInfo}>
                    <Text style={styles.bestTodayName} numberOfLines={1}>{golfCourses[2].name}</Text>
                    <View style={styles.bestTodayLocation}>
                      <Ionicons name="location" size={14} color="#66707A" />
                      <Text style={styles.bestTodayLocationText}>{golfCourses[2].location}</Text>
                    </View>
                    <View style={styles.bestTodayFooter}>
                      <View style={styles.bestTodayRating}>
                        <Ionicons name="star" size={14} color="#EDB900" />
                        <Text style={styles.bestTodayRatingText}>
                          {golfCourses[2].rating} <Text style={styles.bestTodayRatingReviewText}>({golfCourses[2].reviews})</Text>
                        </Text>
                      </View>
                      <View style={styles.bestTodayPricing}>
                        <Text style={styles.bestTodayPrice}>${golfCourses[2].price}</Text>
                        <Text style={styles.bestTodayOriginalPrice}>${golfCourses[2].originalPrice}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bestTodayItem}>
                  <Image
                    source={golfCourses[1].image}
                    style={styles.bestTodayImage}
                  />
                  <View style={styles.bestTodayInfo}>
                    <Text style={styles.bestTodayName}>{golfCourses[1].name}</Text>
                    <View style={styles.bestTodayLocation}>
                      <Ionicons name="location" size={12} color="#9CA4AB" />
                      <Text style={styles.bestTodayLocationText}>{golfCourses[1].location}</Text>
                    </View>
                    <View style={styles.bestTodayFooter}>
                      <View style={styles.bestTodayRating}>
                        <Ionicons name="star" size={12} color="#EDB900" />
                        <Text style={styles.bestTodayRatingText}>
                          {golfCourses[1].rating} <Text style={styles.bestTodayRatingReviewText}>({golfCourses[1].reviews})</Text>
                        </Text>
                      </View>
                      <View style={styles.bestTodayPricing}>
                        <Text style={styles.bestTodayPrice}>${golfCourses[1].price}</Text>
                        <Text style={styles.bestTodayOriginalPrice}>${golfCourses[1].originalPrice}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity></View>
            </ScrollView>
          </View>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerTitle: {
    flexDirection: 'row',
    gap: 10
  },
  avatarLogo: {
    height: 40,
    width: 40,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  gradientBackground: {
    position: 'absolute',
    inset: 0,
  },
  membershipCard: {
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  membershipHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  membershipLabel: {
    color: 'rgba(226, 252, 203, 0.9)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  membershipTitle: {
    color: '#F0FDFA',
    fontSize: 20,
    fontWeight: 700,
    marginTop: 6,
  },
  membershipSubtitle: {
    color: '#BBF7D0',
    fontSize: 13,
    marginTop: 4,
  },
  membershipButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8FAFC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  membershipButtonText: {
    color: '#14532D',
    fontWeight: 600,
    fontSize: 13,
  },
  membershipBenefitRow: {
    flexDirection: 'row',
    gap: 12,
  },
  membershipBenefitCard: {
    backgroundColor: 'rgba(248, 250, 252, 0.9)',
    borderRadius: 14,
    padding: 14,
    width: 180,
    gap: 6,
  },
  membershipBenefitTier: {
    color: '#0F172A',
    fontWeight: 700,
    fontSize: 14,
  },
  membershipBenefitHeadline: {
    color: '#14532D',
    fontWeight: 600,
    fontSize: 12,
  },
  membershipBenefitEntries: {
    color: '#1F2937',
    fontSize: 12,
  },
  rewardsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    gap: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  rewardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#0F172A',
  },
  rewardsLink: {
    color: '#1B7A47',
    fontWeight: 600,
    fontSize: 13,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 10,
  },
  rewardRowTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: '#0B1120',
  },
  rewardRowDescription: {
    color: '#475569',
    fontSize: 13,
    marginTop: 2,
  },
  rewardsCta: {
    marginTop: 4,
    backgroundColor: '#DCFCE7',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rewardsCtaText: {
    color: '#0F172A',
    fontWeight: 600,
    fontSize: 14,
  },
  tabBtn: {
    borderRadius: 8
  },
  section: {
    gap: 16
  },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16, color: '#111111', fontWeight: 600
  },
  seeAll: {
    fontSize: 12, color: '#266807', fontWeight: 500
  },
  horizontalScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  courseCard: {
    width: 160,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  courseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    justifyContent: 'space-between',
  },
  favoriteButton: {
    alignSelf: 'flex-end',
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  courseName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  courseLocation: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 8,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursePrice: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
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
  filterTabs: {
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
    fontSize: 14,
    fontWeight: 600,
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
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  fireEmoji: {
    fontSize: 16,
    marginLeft: 8,
  },
  bestTodayItem: {
    width: 290,
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#E9EBED',
    borderWidth: 1,
    padding: 12
  },
  bestTodayImage: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },
  bestTodayInfo: {
    flex: 1,

  },
  bestTodayName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171725',
    marginBottom: 4
  },
  bestTodayLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bestTodayLocationText: {
    fontSize: 14,
    color: '#66707A',
  },
  bestTodayFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestTodayRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestTodayRatingText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#EDB900',
  },
  bestTodayRatingReviewText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#9CA4AB',
  },
  bestTodayPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  bestTodayPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#171725',
  },
  bestTodayOriginalPrice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F41F52',
    textDecorationLine: 'line-through',
  },
});
