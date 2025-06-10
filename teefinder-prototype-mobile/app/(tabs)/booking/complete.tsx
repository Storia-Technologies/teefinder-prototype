import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

const BookingCompleteScreen = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Image source={require('@/assets/images/payment-complete.png')} style={{ width: 300, height: 200, }} />
        <View style={styles.messageContainer}>
          <Text style={styles.title}>Payment Complete</Text>
          <Text style={styles.subtitle}>
            Etiam cras nec metus laoreet. Faucibus
            iaculis cras ut posuere.
          </Text>
        </View>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  successContainer: {
    marginBottom: 28,
  },

  messageContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#121933",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#78828A",
    textAlign: "center",
    lineHeight: 24,
  },

})

export default BookingCompleteScreen
