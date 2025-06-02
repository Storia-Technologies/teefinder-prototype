import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput label="Full Name" style={styles.input} mode="outlined" />
      <TextInput label="E-mail" style={styles.input} mode="outlined" />
      <TextInput label="Password" secureTextEntry style={styles.input} mode="outlined" />

      <Button mode="contained" style={styles.button} onPress={() => router.push('/auth/otp' as any)}>
        Create An Account
      </Button>

      <TouchableOpacity onPress={() => router.push('/auth/login' as any)}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { marginBottom: 15 },
  button: { marginTop: 20 },
  link: { textAlign: 'center', marginTop: 15, color: 'green' },
});
