import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let&#39;s Sign you in</Text>

      <TextInput label="Email Address" style={styles.input} mode="outlined" />
      <TextInput label="Password" secureTextEntry style={styles.input} mode="outlined" />

      <TouchableOpacity onPress={() => router.push('/auth/forgot-password' as any)}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.button} onPress={() => router.push('/(tabs)')}>
        Sign In
      </Button>

      <TouchableOpacity onPress={() => router.push('/auth/signup' as any)}>
        <Text style={styles.link}>Don&#39;t have an account? Sign Up</Text>
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