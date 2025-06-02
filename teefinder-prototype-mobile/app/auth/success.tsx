import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Success() {
  return (
    <View style={styles.container}>
      <Text style={styles.successIcon}>✅</Text>
      <Text style={styles.message}>Your password is successfully created!</Text>

      <Button mode="contained" style={styles.button} onPress={() => router.replace('/auth/login' as any)}>
        Continue
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  successIcon: { fontSize: 50, marginBottom: 20 },
  message: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
  button: { width: '100%' },
});
