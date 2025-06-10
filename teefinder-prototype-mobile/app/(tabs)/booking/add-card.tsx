

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

const AddCardScreen = () => {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [holderName, setHolderName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\s/g, "")
    const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim()
    return formatted.substring(0, 19)
  }

  const formatExpiry = (text: string) => {
    const cleaned = text.replace(/\D/g, "")
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4)
    }
    return cleaned
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Card</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.cardPreview}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image source={require('@/assets/images/mastercard.png')} style={styles.masterCardLogo} resizeMode="contain" />
              <Text style={styles.cardType}>Master Card</Text>
            </View>
            <Text style={styles.cardNumber}>{cardNumber || "2894 - 4389 - 4432 - 9432"}</Text>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabel}>Holder Name</Text>
                <Text style={styles.cardHolderName}>{holderName || "John Doe"}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.fieldLabel}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Card Number"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            keyboardType="numeric"
            maxLength={19}
            placeholderTextColor={'#9CA4AB'}
          />

          <Text style={styles.fieldLabel}>Card Holder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Holder Name"
            value={holderName}
            onChangeText={setHolderName}
            placeholderTextColor={'#9CA4AB'}
          />

          <View style={styles.row}>
            <View style={styles.halfField}>
              <Text style={styles.fieldLabel}>Expired</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                value={expiry}
                onChangeText={(text) => setExpiry(formatExpiry(text))}
                keyboardType="numeric"
                maxLength={5}
                placeholderTextColor={'#9CA4AB'}
              />
            </View>
            <View style={styles.halfField}>
              <Text style={styles.fieldLabel}>CVV Code</Text>
              <TextInput
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
                maxLength={3}
                secureTextEntry
                placeholderTextColor={'#9CA4AB'}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => router.back()}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
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
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cardPreview: {
    alignItems: "center",
    marginVertical: 24,
  },
  cardContainer: {
    width: 300,
    height: 180,
    backgroundColor: "#266807",
    borderRadius: 12,
    padding: 16,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  masterCardLogo: {
    width: 40,
    height: 24,
  },
  cardType: {
    color: "#FFFFFFCC",
    fontSize: 12,
  },
  cardNumber: {
    color: "#FEFEFE",
    fontSize: 18,
    fontWeight: "500",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLabel: {
    color: "#FFFFFFCC",
    fontSize: 12,
    marginBottom: 4,
  },
  cardHolderName: {
    color: "#FEFEFE",
    fontSize: 14,
    fontWeight: "500",
  },
  form: {
    marginTop: 24,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#171725",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E9EBED",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#9CA4AB",
    marginBottom: 16,
    backgroundColor: "#FEFEFE",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfField: {
    flex: 1,
    marginHorizontal: 4,
  },
  footer: {
    padding: 16,
  },
  addButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default AddCardScreen
