import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const EditPersonalInfoScreen = () => {
  const [firstName, setFirstName] = useState('Gustavo');
  const [lastName, setLastName] = useState('Lipshutz');
  const [email, setEmail] = useState('Gustavolipshutz@gmail.com');
  const [phone, setPhone] = useState('+61 432 542 155');
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleSaveChanges = () => {
    // Add save logic here
    console.log('Changes saved:', { firstName, lastName, email, phone });
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Info</Text>
        <TouchableOpacity onPress={() => setIsEditing((prev) => !prev)}>
          <Ionicons
            name={isEditing ? 'checkmark-outline' : 'create-outline'}
            size={24}
            color="#222"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          editable={isEditing}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          editable={isEditing}
        />
      </View>

      {isEditing && (
        <TouchableOpacity
          style={[
            styles.saveButton,
            (!firstName || !lastName || !email || !phone) && styles.disabledButton,
          ]}
          onPress={handleSaveChanges}
          disabled={!firstName || !lastName || !email || !phone}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      )}
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
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#222',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#e5eaf2',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
  },
  disabledButton: {
    backgroundColor: '#e5eaf2',
    opacity: 0.5,
  },
});

export default EditPersonalInfoScreen;