import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const PromoModal = ({ visible, onClose, onSelectPromo, selectedPromo }: any) => {
  const [selected, setSelected] = useState(selectedPromo)
  const promos = [
    {
      id: 1,
      title: "50% Cashback",
      description: "Expires in 2 days. See Detail",
    },
    {
      id: 2,
      title: "15% Discount",
      description: "Expires in 1 days. See Detail",
    },
    {
      id: 3,
      title: "10% Cashback",
      description: "Expires in 7 days. See Detail",
    },
  ]
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.modalHandle} />
          <View style={styles.header}>
            <Text style={styles.title}>My Coupon</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.promoList}>
            {promos.map((promo) => (
              <TouchableOpacity
                key={promo.id}
                style={[styles.promoItem, (selected && selected?.id === promo.id) ? styles.selectedPromo : null]}
                onPress={() => setSelected(promo)}
              >
                <View style={styles.promoIcon}>
                  <Image source={require('@/assets/images/discount.png')} style={{ width: 24, height: 24 }} />
                </View>
                <View style={styles.promoDetails}>
                  <Text style={[styles.promoTitle, (selected && selected?.id === promo.id) ? { color: '#266807' } : null]}>{promo.title}</Text>
                  <Text style={styles.promoDescription}>{promo.description}</Text>
                </View>
                {(selected?.id === promo.id) && <Ionicons name="checkmark" size={20} color="#266807" />}
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.useCouponButton} onPress={() => {
            onSelectPromo(selected)
            onClose()
          }}>
            <Text style={styles.useCouponButtonText}>Use Coupon</Text>
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
    maxHeight: "70%",
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
    fontSize: 20,
    fontWeight: "600",
  },
  promoList: {
    marginBottom: 20,
  },
  promoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedPromo: {
    borderColor: "#266807",
  },
  promoIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  promoDetails: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#171725",
    marginBottom: 4,
  },
  promoDescription: {
    fontSize: 12,
    color: "#66707A",
  },
  useCouponButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  useCouponButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default PromoModal
