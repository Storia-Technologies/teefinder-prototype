import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Slider from "@react-native-community/slider"
import RNPickerSelect from 'react-native-picker-select';


const SearchFilter = ({ onClose }: { onClose: () => void }) => {
  const [instantBook, setInstantBook] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 80])
  const [selectedLocations, setSelectedLocations] = useState(["Perth"])
  const [selectedFacilities, setSelectedFacilities] = useState(["Bar", "EOT Facilities"])
  const [selectedRating, setSelectedRating] = useState(4)

  const locations = ["Perth", "Wembley", "Como"]
  const facilities = ["Bar", "Driving Range", "Equipment Hire", "EOT Facilities"]
  const ratings = [5, 4, 3, 2, 1]

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((item) => item !== location))
    } else {
      setSelectedLocations([...selectedLocations, location])
    }
  }

  const toggleFacility = (facility: string) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter((item) => item !== facility))
    } else {
      setSelectedFacilities([...selectedFacilities, facility])
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Filter By</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Placeholder</Text>
          <View style={styles.dropdown}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: '3 Players (2 Adult, 1 Children)', value: '3 Players (2 Adult, 1 Children)' },
                { label: '3 Players (1 Adult, 2 Children)', value: '3 Players (1 Adult, 2 Children)' },
                { label: '2 Players (2 Adult)', value: '3 Players (2 Adult)' },
              ]}
            // style={pickerSelectStyles}
            /></View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Price</Text>
            <View style={styles.priceRangeContainer}>
              <Text style={styles.priceRangeText}>${priceRange[0]}-${priceRange[1]}</Text>
            </View></View>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={200}
              minimumTrackTintColor="#266807"
              maximumTrackTintColor="#E3E9ED"
              thumbTintColor="#266807"
              value={priceRange[1]}
              onValueChange={(value) => setPriceRange([priceRange[0], Math.round(value)])}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.sectionTitle}>Instant Book</Text>
              <Text style={styles.sectionDescription}>Book without waiting for the host to respond</Text>
            </View>
            <Switch
              trackColor={{ false: "#9CA4AB", true: "#266807" }}
              thumbColor="#fff"
              ios_backgroundColor="#9CA4AB"
              onValueChange={() => setInstantBook(!instantBook)}
              value={instantBook}
            />
          </View>

        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.locationContainer}>
            {locations.map((location) => (
              <TouchableOpacity
                key={location}
                style={[
                  styles.locationButton,
                  selectedLocations.includes(location) ? styles.locationButtonActive : null,
                ]}
                onPress={() => toggleLocation(location)}
              >
                <Text
                  style={[
                    styles.locationButtonText,
                    selectedLocations.includes(location) ? styles.locationButtonTextActive : null,
                  ]}
                >
                  {location}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            {facilities.map((facility) => (
              <View key={facility} style={styles.facilityRow}>
                <Text style={styles.facilityText}>{facility}</Text>
                <TouchableOpacity
                  style={[styles.checkbox, selectedFacilities.includes(facility) ? styles.checkboxActive : null]}
                  onPress={() => toggleFacility(facility)}
                >
                  {selectedFacilities.includes(facility) && <Ionicons name="checkmark" size={16} color="#fff" />}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ratings</Text>
          <View style={styles.ratingsContainer}>
            {ratings.map((rating) => (
              <TouchableOpacity
                key={rating}
                style={[styles.ratingButton, selectedRating === rating ? styles.ratingButtonActive : null]}
                onPress={() => setSelectedRating(rating)}
              >
                <Ionicons name="star" size={16} color={"#EDB900"} />
                <Text style={styles.ratingButtonText}>{rating}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={onClose}>
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: '#171725'
  },
  content: {
    flex: 1,
  },
  section: {
    paddingVertical: 12,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    color: '#171725'
  },
  sectionDescription: {
    fontSize: 12,
    color: "#9CA4AB",
    marginTop: 4,
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#9CA4AB",
    borderRadius: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#9CA4AB",
    borderRadius: 15,
  },
  dropdownText: {
    fontSize: 14,
  },
  priceRangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  priceRangeText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777A81"
  },

  sliderContainer: {
    paddingHorizontal: 4,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginHorizontal: -4,
  },
  locationButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  locationButtonActive: {
    backgroundColor: "#266807",
  },
  locationButtonText: {
    fontSize: 14,
    color: "#266807",
  },
  locationButtonTextActive: {
    color: "#FEFEFE",
  },
  facilitiesContainer: {
    marginTop: 8,
  },
  facilityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  facilityText: {
    fontSize: 14,
    color: '#A7AEC1'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#9CA4AB",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: {
    backgroundColor: "#266807",
    borderColor: "#266807",
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  ratingButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#9CA4AB",
  },
  ratingButtonActive: {
    borderColor: "#266807",
  },
  ratingButtonText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#171725'
  },
  footer: {
    padding: 16,
  },
  applyButton: {
    backgroundColor: "#266807",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FEFEFE",
    fontSize: 16,
    fontWeight: "600",
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 15,
    color: '#171725',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 15,
    color: '#171725',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default SearchFilter