import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [showTerms, setShowTerms] = useState(false);
  const inputs = useRef<Array<TextInput | null>>([]);
  const params = useLocalSearchParams();
  const isNewAccount = params?.new === '1'; // Pass ?new=1 for new accounts
  const email = params?.email || 'example@gmail.com';

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
    if (!value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
    // Show terms popup after last digit for new accounts
    if (isNewAccount && value && index === 3) {
      setTimeout(() => setShowTerms(true), 150);
    }
  };

  const handleBack = () => router.back();

  const handleAgree = () => {
    setShowTerms(false);
  };

  const handleDisagree = () => {
    setShowTerms(false);
    // Optionally clear OTP or show a message
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="#171725" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>
        We have just sent you 4 digit code via your email
      </Text>
      <Text style={styles.email}>{email}</Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            ref={ref => { inputs.current[idx] = ref; }}
            value={digit}
            onChangeText={value => handleChange(value, idx)}
            keyboardType="number-pad"
            maxLength={1}
            style={[
              styles.otpInput,
              otp[idx] && idx === otp.findIndex(d => d === '') - 1
                ? styles.otpInputActive
                : undefined,
            ]}
            returnKeyType="next"
            autoFocus={idx === 0}
            textAlign="center"
            selectionColor="#266807"
          />
        ))}
      </View>

      {/* Continue Button (for login flow) */}
      {!isNewAccount && (
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      )}

      {/* Resend Link */}
      <TouchableOpacity style={styles.resendBtn}>
        <Text style={styles.resendText}>
          Didn’t receive code? <Text style={styles.resendLink}>Resend Code</Text>
        </Text>
      </TouchableOpacity>

      {/* Terms Modal */}
      <Modal visible={showTerms} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.termsModal}>
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.termsBold}>Terms of Service</Text> and{' '}
              <Text style={styles.termsBold}>Conditions</Text> of Use including consent to
              electronic communications and I affirm that the information provided is my own.
            </Text>
            <View style={styles.termsBtnRow}>
              <TouchableOpacity style={styles.disagreeBtn} onPress={handleDisagree}>
                <Text style={styles.disagreeText}>Disagree</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.agreeBtn} onPress={handleAgree}>
                <Text style={styles.agreeText}>Agree</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginTop: 6,
  },
  email: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 2,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    marginBottom: 32,
    marginTop: 8,
  },
  otpInput: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#F6F7F9',
    fontSize: 22,
    color: '#171725',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#E9EBED',
    marginHorizontal: 4,
  },
  otpInputActive: {
    borderColor: '#266807',
  },
  continueBtn: {
    backgroundColor: '#266807',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 18,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  resendBtn: {
    alignItems: 'center',
    marginTop: 8,
  },
  resendText: {
    color: '#888',
    fontSize: 15,
  },
  resendLink: {
    color: '#266807',
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(23,23,37,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsModal: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 28,
    marginHorizontal: 18,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  termsText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
  termsBold: {
    color: '#171725',
    fontWeight: '700',
  },
  termsBtnRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 18,
  },
  disagreeBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    alignItems: 'center',
    paddingVertical: 14,
    marginRight: 8,
  },
  disagreeText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '700',
  },
  agreeBtn: {
    flex: 1,
    backgroundColor: '#266807',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 14,
    marginLeft: 8,
  },
  agreeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
