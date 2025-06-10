import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import PromoModal from '@/components/PromoModal'
import PaymentMethodModal from '@/components/PaymentMethodModal'

const CheckoutScreen = () => {
  const [showPromoModal, setShowPromoModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPromo, setSelectedPromo] = useState<any>(null)
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.courseCard}>
          <Image source={require('@/assets/images/collier.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <View style={styles.courseHeader}>
              <Text style={styles.courseName}>Collier Park Golf</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#EDB900" />
                <Text style={styles.ratingText}>4.7</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={14} color="#9CA4AB" />
              <Text style={styles.locationText}>Como, WA</Text>
            </View>
            <Text style={styles.priceText}>$50 /player</Text>
          </View>
        </View>
        <View style={styles.bookingContainer}>
          <Text style={styles.bookingTitle}>Your Booking</Text>
          <View style={styles.bookingDetails}>
            <View style={styles.bookingRow}>
              <Ionicons name="calendar-outline" size={20} color="#666" />
              <Text style={styles.bookingLabel}>Date</Text>
              <Text style={styles.bookingValue}>14 May 2025</Text>
            </View>
            <View style={styles.bookingRow}>
              <Ionicons name="people-outline" size={20} color="#666" />
              <Text style={styles.bookingLabel}>Players</Text>
              <Text style={styles.bookingValue}>2 Players (1 Adult, 1 Child)</Text>
            </View>
            <View style={styles.bookingRow}>
              <Ionicons name="golf-outline" size={20} color="#666" />
              <Text style={styles.bookingLabel}>Game</Text>
              <Text style={styles.bookingValue}>9 Holes</Text>
            </View>
            <View style={styles.bookingRow}>
              <Ionicons name="call-outline" size={20} color="#666" />
              <Text style={styles.bookingLabel}>Phone</Text>
              <Text style={styles.bookingValue}>0432 542 155</Text>
            </View>
          </View>

          <Text style={styles.bookingTitle}>Price Details</Text>
          <View style={styles.priceDetails}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceValue}>$139.00</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service fee</Text>
              <Text style={styles.priceValue}>$2.50</Text>
            </View>
            <View style={[styles.priceRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total price</Text>
              <Text style={styles.totalValue}>$141.50</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Promo</Text>
        <TouchableOpacity style={styles.promoButton} onPress={() => setShowPromoModal(true)}>
          <View style={styles.promoIcon}>
            <Image source={require('@/assets/images/discount.png')} style={{width: 24, height: 24}} />
          </View>
          <Text style={styles.promoText}>{selectedPromo ? selectedPromo.title : "Select"}</Text>
          <Ionicons name="chevron-forward" size={24} color="#266807" />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.paymentButton} onPress={() => setShowPaymentModal(true)}>
          <Text style={styles.paymentButtonText}>Select Payment</Text>
        </TouchableOpacity>
      </View>

      {showPromoModal && <PromoModal
        visible={showPromoModal}
        onClose={() => setShowPromoModal(false)}
        onSelectPromo={(promo: any) => {
          setSelectedPromo(promo)
          setShowPromoModal(false)
        }}
        selectedPromo={selectedPromo}
      />}

      {showPaymentModal && <PaymentMethodModal
        visible={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSelectPayment={() => {
          setShowPaymentModal(false)
          router.push("/(tabs)/booking/complete")
        }}
        onAddCard={() => {
          setShowPaymentModal(false)
          router.push('/(tabs)/booking/add-card')
        }}
      />}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  courseCard: {
    flexDirection: "row",
    paddingVertical: 16,
    marginTop: 16,
  },
  courseImage: {
    width: 78,
    height: 78,
    borderRadius: 8,
  },
  courseDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    color: "#9CA4AB",
    marginLeft: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#266807",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 12,
  },
  bookingTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#266807"
  },
  bookingContainer: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E9EBED'
  },
  bookingDetails: {
    marginBottom: 16
  },
  bookingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  bookingLabel: {
    fontSize: 14,
    color: "#171725",
    marginLeft: 12,
    flex: 1,
  },
  bookingValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#191D31"
  },
  priceDetails: {

  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: "#171725",
  },
  priceValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#171725"
  },
  totalRow: {
    paddingTop: 12,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#171725"
  },
  totalValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#171725"
  },
  promoButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
  },
  promoIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  promoText: {
    flex: 1,
    fontSize: 14,
    color: "#266807",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  paymentButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  paymentButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
export default CheckoutScreen