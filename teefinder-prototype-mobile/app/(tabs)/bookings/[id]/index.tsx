import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { hasGoogleMapsApiKey } from '@/constants/Config';

export default function BookingDetailScreen() {
  const router = useRouter();

  // Example coordinates for Collier Park Golf
  const latitude = -31.995;
  const longitude = 115.881;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/bookings')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Detail</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={22} color="#222" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Your Booking</Text>
        <View style={styles.topRow}>
          <Image
            source={require('@/assets/images/collier.jpg')}
            style={styles.courseImage}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.courseTitle} numberOfLines={1}>Collier Park Golf</Text>
              <MaterialIcons name="star" size={18} color="#FFC107" style={{ marginLeft: 6 }} />
              <Text style={styles.rating}>4.7</Text>
            </View>
            <Text style={styles.location}>
              <Ionicons name="location-outline" size={14} /> Como, WA
            </Text>
            <Text style={styles.price}>$50 <Text style={styles.perPlayer}>/player</Text></Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <Text style={styles.sectionLabel}>Location</Text>
          <TouchableOpacity>
            <Text style={styles.openMap}>Open Map</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mapContainer}>
          {hasGoogleMapsApiKey ? (
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
          ) : (
            <View style={[styles.map, styles.mapFallback]}>
              <Text style={styles.mapFallbackTitle}>Google Maps unavailable</Text>
              <Text style={styles.mapFallbackSubtitle}>
                Add a Google Maps API key to preview the booking location.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.sectionLabel}>Your Booking</Text>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#8a9399" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>Dates</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.infoValue}>14 May 2025</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={20} color="#8a9399" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>Players</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.infoValue}>2 Players (1 Adult, 1 Child )</Text>
        </View>
        <View style={styles.infoRow}>
          <Feather name="clipboard" size={20} color="#8a9399" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>Game</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.infoValue}>9 Holes</Text>
        </View>
        <View style={styles.infoRow}>
          <Feather name="phone" size={20} color="#8a9399" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>Phone</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.infoValue}>0432 542 155</Text>
        </View>

        <View style={styles.barcodeSection}>
          <Image
            source={require('@/assets/images/barcode-placeholder.png')}
            style={styles.barcode}
            resizeMode="contain"
          />
          <Text style={styles.barcodeText}>06158310–5427–471d–af1f–bd9029b</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingTop: 30,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginHorizontal: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ececec',
  },
  sectionLabel: {
    color: '#8a9399',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    flex: 1,
  },
  rating: {
    fontSize: 15,
    color: '#222',
    fontWeight: '600',
    marginLeft: 2,
  },
  location: {
    fontSize: 14,
    color: '#8a9399',
    marginTop: 2,
    marginBottom: 2,
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
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  openMap: {
    color: '#1a7a1a',
    fontWeight: '600',
    fontSize: 15,
  },
  mapContainer: {
    width: '100%',
    height: 90,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#e6ede6',
    marginBottom: 12,
  },
  map: {
    flex: 1,
    borderRadius: 14,
  },
  mapFallback: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    padding: 16,
    gap: 4,
  },
  mapFallbackTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#171725',
  },
  mapFallbackSubtitle: {
    fontSize: 13,
    color: '#66707A',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 2,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoLabel: {
    color: '#8a9399',
    fontSize: 15,
    minWidth: 60,
  },
  infoValue: {
    color: '#222',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'right',
    marginLeft: 10,
  },
  barcodeSection: {
    alignItems: 'center',
    marginTop: 18,
  },
  barcode: {
    width: '90%',
    height: 48,
    marginBottom: 6,
  },
  barcodeText: {
    color: '#8a9399',
    fontSize: 13,
    letterSpacing: 1,
    textAlign: 'center',
  },
});