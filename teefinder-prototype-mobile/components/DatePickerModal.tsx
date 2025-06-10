import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native"
import { Calendar } from 'react-native-calendars';

const DatePickerModal = ({ visible, onClose, onSelectDate }: any) => {
  const [date, setDate] = useState(new Date());
  const [markedDate, setMarkedDate] = useState({})

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Select Date</Text>
          <Calendar
            theme={{
              arrowColor: '#171725'
            }}
            markedDates={markedDate}
            onDayPress={day => {
              setDate(new Date(day.dateString))
              setMarkedDate({
                [day.dateString]: {
                  selected: true,
                  selectedColor: '#266807',
                },
              });
            }}
          />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={() => {
              onSelectDate(date)
              onClose()
            }}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171725",
    textAlign: "center",
    marginBottom: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#F41F52",
    fontSize: 14,
    fontWeight: "500",
  },
  applyButton: {
    flex: 1,
    backgroundColor: "#266807",
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FEFEFE",
    fontSize: 15,
    fontWeight: "500",
  },
})

export default DatePickerModal
