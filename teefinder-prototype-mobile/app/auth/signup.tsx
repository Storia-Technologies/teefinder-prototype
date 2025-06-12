import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/auth/login' as any)}>
        <Ionicons name="arrow-back" size={24} color="#171725" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</Text>

      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#BFC5CB"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />
      </View>

      <Text style={[styles.label, { marginTop: 12 }]}>Email Address</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#BFC5CB"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Text style={[styles.label, { marginTop: 12 }]}>Password</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#BFC5CB"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeBtn}
          onPress={() => setShowPassword((v) => !v)}
        >
          <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => router.push('/auth/otp' as any)}
      >
        <Text style={styles.signUpText}>Create An Account</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/auth/login' as any)}>
          <Text style={styles.signupLink}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or Sign Up with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="google" size={22} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="apple1" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="facebook" size={22} color="#1877F3" />
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        By signing up you agree to our <Text style={styles.termsBold}>Terms</Text>
        {'\n'}and <Text style={styles.termsBold}>Conditions of Use</Text>
      </Text>
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
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    color: '#171725',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginBottom: 28,
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
  signUpBtn: {
    backgroundColor: '#266807',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  signupText: {
    color: '#888',
    fontSize: 15,
    fontWeight: '500',
  },
  signupLink: {
    color: '#266807',
    fontWeight: '700',
    fontSize: 15,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9EBED',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    marginBottom: 18,
  },
  socialBtn: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#F6F7F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  terms: {
    color: '#888',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
    lineHeight: 18,
  },
  termsBold: {
    color: '#171725',
    fontWeight: '700',
  },
});
