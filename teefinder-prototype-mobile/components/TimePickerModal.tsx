import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native"

const TimePickerModal = ({ visible, onClose, onSelectTime }: any) => {
  const timeSlots = [
    { time: "7:04 am", status: "taken" },
    { time: "7:12 am", status: "taken" },
    { time: "7:20 am", status: "taken" },
    { time: "7:28 am", status: "taken" },
    { time: "7:36 am", status: "taken" },
    { time: "7:44 am", status: "taken" },
    { time: "7:52 am", status: "available" },
    { time: "8:00 am", status: "available" },
    { time: "8:08 am", status: "taken" },
    { time: "8:16 am", status: "taken" },
  ]

  const handleTimeSelect = (time: any) => {
    onSelectTime(time)
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Select Time</Text>

          <ScrollView style={styles.timeList}>
            <View style={styles.timeGrid}>
              {timeSlots.map((slot, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.timeSlot, slot.status === "available" ? styles.availableSlot : styles.takenSlot]}
                  onPress={() => slot.status === "available" && handleTimeSelect(slot.time)}
                  disabled={slot.status === "taken"}
                >
                  <Text
                    style={styles.timeText}
                  >
                    {slot.time}
                  </Text>
                  <Text
                    style={
                      styles.statusText
                    }
                  >
                    {slot.status === "available" ? "Available" : "Taken"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={onClose}>
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
    maxHeight: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171725",
    textAlign: "center",
    marginBottom: 24,
  },
  timeList: {
    maxHeight: 300,
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden"
  },
  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

  },
  timeSlot: {
    width: "50%",
    padding: 16,
    alignItems: "center",
  },
  availableSlot: {
    backgroundColor: "#66CB634D",
    borderWidth: 1,
    borderColor: "#66707A",
  },
  takenSlot: {
    backgroundColor: "#F41F524D",
    borderWidth: 1,
    borderColor: "#66707A",
  },
  timeText: {
    fontSize: 18,
    fontWeight: "600",
    color: '#000000',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
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

export default TimePickerModal
