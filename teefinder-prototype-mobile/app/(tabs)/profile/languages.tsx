import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const suggestedLanguages = ['English (US)', 'English', 'Bahasa Indonesia'];
const otherLanguages = [
  'Chinese',
  'Croatian',
  'Czech',
  'Danish',
  'Filipino',
  'Finland',
];

const LanguagesScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');
  const router = useRouter();

  const renderLanguageItem = (language: string, index: number) => (
    <TouchableOpacity
      key={index} // Add unique key prop
      style={styles.languageItem}
      onPress={() => setSelectedLanguage(language)}
    >
      <Text style={styles.languageText}>{language}</Text>
      {selectedLanguage === language && (
        <Ionicons name="checkmark" size={20} color="#1a7a1a" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>Suggested Languages</Text>
        {suggestedLanguages.map((language, index) =>
          renderLanguageItem(language, index)
        )}
      </View>

      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>Other Languages</Text>
        {otherLanguages.map((language, index) =>
          renderLanguageItem(language, index)
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingTop: 56,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  languageSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 12,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  languageText: {
    fontSize: 16,
    color: '#222',
  },
});

export default LanguagesScreen;