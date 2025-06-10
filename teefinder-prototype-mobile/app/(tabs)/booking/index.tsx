import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import TimePickerModal from '@/components/TimePickerModal'
import DatePickerModal from '@/components/DatePickerModal'
import { format } from "date-fns";

const RequestBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState("12:30 PM")
  const [playerCount, setPlayerCount] = useState(1)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const router = useRouter()
  const totalPrice = playerCount * 50
  const serviceFee = 5
  const totalPayment = totalPrice + serviceFee
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request to book</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Date</Text>

        <View style={styles.dateTimeContainer}>
          <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>

            <View style={styles.dateTimeTextContainer}>
              <Ionicons name="calendar-outline" size={20} color="black" />
              <Text style={styles.dateTimeLabel}>Tee Off</Text>
            </View>
            <Text style={styles.dateTimeValue}>{format(selectedDate, 'PP')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>

            <View style={styles.dateTimeTextContainer}>
              <Ionicons name="time-outline" size={20} color="black" />
              <Text style={styles.dateTimeLabel}>Time</Text>
            </View>
            <Text style={styles.dateTimeValue}>{selectedTime}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Players</Text>
        <View style={styles.playersContainer}>
          <TouchableOpacity style={styles.playerButton} onPress={() => setPlayerCount(Math.max(1, playerCount - 1))}>
            <Ionicons name="remove" size={20} color="white" />
          </TouchableOpacity>
          <View style={styles.playerSlider}>
            <View style={[styles.sliderTrack, { width: `${(playerCount / 4) * 100}%` }]} />
          </View>
          <TouchableOpacity style={styles.playerButton} onPress={() => setPlayerCount(Math.min(4, playerCount + 1))}>
            <Ionicons name="add" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.playerCount}>{playerCount}</Text>
        </View>

        <Text style={styles.sectionTitle}>Pay With</Text>
        <TouchableOpacity style={styles.paymentMethod}>
          <View style={styles.paymentIcon}>
            <Ionicons name="wallet-outline" size={25} color="black" />
          </View>
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentName}>FastPayz</Text>
            <Text style={styles.paymentNumber}>••••••6587</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Payment Details</Text>
        <View style={styles.paymentDetailsContainer}>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Total: {playerCount} Players</Text>
            <Text style={styles.paymentValue}>${totalPrice}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Service Fee</Text>
            <Text style={styles.paymentValue}>${serviceFee}</Text>
          </View>
          <View style={[styles.paymentRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total Payment:</Text>
            <Text style={styles.totalValue}>${totalPayment}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push("/(tabs)/booking/checkout")}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>

      <DatePickerModal
        visible={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onSelectDate={(date: any) => {
          setSelectedDate(date)
          setShowDatePicker(false)
        }}
      />

      <TimePickerModal
        visible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={(time: any) => {
          setSelectedTime(time)
          setShowTimePicker(false)
        }}
      />
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171725",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#171725",
    marginTop: 24,
    marginBottom: 12,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeButton: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 16,
    marginHorizontal: 4,
    gap: 14
  },
  dateTimeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dateTimeLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: "#171725",
  },
  dateTimeValue: {
    fontSize: 16,
    fontWeight: "400",
    color: "#66707A",
    marginTop: 2,
  },
  playersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  playerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#266807",
    justifyContent: "center",
    alignItems: "center",
  },
  playerSlider: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginHorizontal: 16,
    position: "relative",
  },
  sliderTrack: {
    height: "100%",
    backgroundColor: "#266807",
    borderRadius: 2,
  },
  playerCount: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
    minWidth: 20,
    textAlign: "center",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#0000001F",
    borderRadius: 16,
  },
  paymentIcon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentDetails: {
    flex: 1,
    marginLeft: 12,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "500",
  },
  paymentNumber: {
    fontSize: 14,
    color: "#66707A",
    marginTop: 2,
  },
  editButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#266807",
    borderRadius: 30,
  },
  editButtonText: {
    color: "#266807",
    fontSize: 14,
    fontWeight: "500",
  },
  paymentDetailsContainer: {
    marginTop: 8,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  paymentLabel: {
    fontSize: 16,
    color: "#66707A",
  },
  paymentValue: {
    fontSize: 18,
    color: "#171725",
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    marginTop: 8,
    paddingTop: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#171725"
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171725"
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  checkoutButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#FEFEFE",
    fontSize: 16,
    fontWeight: "600",
  },
})
export default RequestBooking