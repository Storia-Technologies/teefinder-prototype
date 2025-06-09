import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CreatePassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleContinue = () => {
    // Dummy: Assume password is created successfully
    setSuccess(true);
  };

  if (success) {
    return (
      <View style={styles.successContainer}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={48} color="#fff" />
        </View>
        <Text style={styles.successTitle}>Success</Text>
        <Text style={styles.successSubtitle}>Your password is succesfully{'\n'}created</Text>
        <TouchableOpacity style={styles.continueBtn} onPress={() => router.push('/auth/login')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#171725" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create Password</Text>
      <Text style={styles.subtitle}>Set a new password for your account</Text>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#BFC5CB"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPassword(v => !v)}>
          <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <Text style={[styles.label, { marginTop: 12 }]}>Confirm Password</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter new password"
          placeholderTextColor="#BFC5CB"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry={!showConfirm}
        />
        <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowConfirm(v => !v)}>
          <Ionicons name={showConfirm ? 'eye-outline' : 'eye-off-outline'} size={22} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  backBtn: {
    marginTop: 16,
    marginBottom: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    color: '#171725',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171725',
    marginBottom: 7,
    marginLeft: 2,
  },
  inputWrapper: {
    backgroundColor: '#F6F7F9',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    paddingHorizontal: 14,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#222',
    paddingVertical: 0,
  },
  eyeBtn: {
    padding: 4,
    marginLeft: 4,
  },
  continueBtn: {
    backgroundColor: '#266807',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 18,
    minWidth: 160,
    alignSelf: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  // Success styles
  successContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  successCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#6DD97A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171725',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
});