import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { router } from 'expo-router';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>We have sent you a 4 digit code via your email</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            mode="outlined"
            keyboardType="numeric"
            maxLength={1}
            style={styles.otpInput}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <Button mode="contained" style={styles.button} onPress={() => router.push('/auth/success' as any)}>
        Continue
      </Button>

      <TouchableOpacity>
        <Text style={styles.link}>Didn&#39;t receive code? Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { textAlign: 'center', marginBottom: 20 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
  otpInput: { width: 50, textAlign: 'center', fontSize: 20 },
  button: { width: '100%', marginTop: 30 },
  link: { marginTop: 15, color: 'green' },
});
