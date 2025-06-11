import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Divider } from "react-native-paper"

interface ShareModalProps {
  visible: boolean
  onClose: () => void
}

const ShareModal = ({ visible, onClose }: ShareModalProps) => {
  const shareOptions = [
    { id: "airdrop", name: "Airdrop", icon: "radio-outline", color: "#171725" },
    { id: "whatsapp", name: "Whatsapp", icon: "logo-whatsapp", color: "#66CB63" },
    { id: "facebook", name: "Facebook", icon: "logo-facebook", color: "#1C3FF7" },
    { id: "instagram", name: "Instagram", icon: "logo-instagram", color: "#F41F52" },
  ]

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Share this Course</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>
          </View>
          <Divider />
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

          <View style={styles.urlContainer}>
            <Text style={styles.urlText} numberOfLines={1}>teefinder.com.au/course/collier-park-golf</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={16} color="#266807" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.shareOptions}>
            {shareOptions.map((option) => (
              <TouchableOpacity key={option.id} style={styles.shareOption}>
                <View style={[styles.shareIconContainer, { backgroundColor: option.color }]}>
                  <Ionicons name={option.icon as any} size={24} color="white" />
                </View>
                <Text style={styles.shareOptionText}>{option.name}</Text>
              </TouchableOpacity>
            ))}
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
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16
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
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  courseCard: {
    flexDirection: "row",
    paddingVertical: 16,
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
  urlContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 24,
  },
  urlText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "500",
    color: "#78828A",
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
  },
  copyText: {
    fontSize: 10,
    color: "#266807",
    fontWeight: "700",
    marginLeft: 4,
  },
  shareOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shareOption: {
    alignItems: "center",
  },
  shareIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  shareOptionText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#171725",
  },
})

export default ShareModal
