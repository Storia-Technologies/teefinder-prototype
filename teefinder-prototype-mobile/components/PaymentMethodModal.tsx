import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const PaymentMethodModal = ({ visible, onClose, onSelectPayment, onAddCard, selectedPayment }: any) => {
  const [selected, setSelected] = useState(selectedPayment)
  const paymentMethods = [
    {
      id: 1,
      name: "Master Card",
      icon: require('@/assets/images/mastercard.png'),
    },
    {
      id: 2,
      name: "Visa",
      icon: require('@/assets/images/visa.png'),
    },
  ]

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.modalHandle} />
          <View style={styles.header}>
            <Text style={styles.title}>Payment Method</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>


          <View style={styles.paymentList}>
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={styles.paymentItem}
                onPress={() => setSelected(method)}
              >
                <Image source={method.icon} style={styles.paymentIcon} resizeMode="contain" />
                <Text style={styles.paymentName}>{method.name}</Text>
                {(selected && selected?.id === method.id) ? (
                  <View style={styles.checkmark}>
                    <Ionicons name="checkmark" size={16} color="white" />
                  </View>
                ) : <View style={styles.unCheck} />}
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.addCardItem} onPress={onAddCard}>
              <View style={styles.addIcon}>
                <Ionicons name="add-circle" size={24} color="#266807" />
              </View>
              <Text style={styles.addCardText}>Add Debit Card</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={onSelectPayment}>
            <Text style={styles.confirmButtonText}>Confirm and Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: "80%",
  },
  modalHandle: {
    alignSelf: 'center',
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E9EBED',
    marginBottom: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  paymentList: {
    marginBottom: 20,
  },
  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    marginBottom: 12,
    position: "relative",
  },

  paymentIcon: {
    width: 40,
    height: 24,
    marginRight: 12,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#266807",
    justifyContent: "center",
    alignItems: "center",
  },
  unCheck: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#D1D8DD'
  },
  addCardItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  addIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  addCardText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#171725",
  },
  confirmButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default PaymentMethodModal
