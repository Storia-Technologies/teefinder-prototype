import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Import router for navigation

type Message = {
  id: string;
  name: string;
  message: string;
  time: string;
};

const messages: Message[] = [
  { id: '1', name: 'John Doe', message: 'Hey, how are you?', time: '2:30 PM' },
  { id: '2', name: 'Jane Smith', message: 'Let’s catch up soon!', time: '1:15 PM' },
  { id: '3', name: 'Mike Johnson', message: 'Can you send me the files?', time: 'Yesterday' },
];

const MessageScreen = () => {
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity
      style={styles.messageRow}
      onPressOut={() => {
        console.log(`Navigating to thread with id: ${item.id}`);
        router.push(`/(tabs)/thread?id=${item.id}&name=${item.name}` as any)
      }} // Navigate to thread screen
    >
      <View style={styles.avatar}>
        <Ionicons name="person-circle-outline" size={40} color="#888" />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#171725',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EBED',
  },
  avatar: {
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171725',
  },
  message: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#BFC5CB',
  },
});

export default MessageScreen;