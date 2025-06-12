import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  { id: '1', sender: 'John Doe', message: 'Hey, how are you?', time: '2:30 PM' },
  { id: '2', sender: 'You', message: 'I’m good, thanks! How about you?', time: '2:32 PM' },
  { id: '3', sender: 'John Doe', message: 'Doing great! Let’s catch up soon.', time: '2:35 PM' },
];

const ThreadScreen = () => {
  const renderMessage = ({ item }: { item: { sender: string; message: string; time: string } }) => (
    <View
      style={[
        styles.messageRow,
        item.sender === 'You' ? styles.messageRowRight : styles.messageRowLeft,
      ]}
    >
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back')}>
          <Ionicons name="arrow-back" size={24} color="#171725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>John Doe</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#BFC5CB"
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171725',
    marginLeft: 12,
  },
  list: {
    paddingBottom: 20,
  },
  messageRow: {
    marginBottom: 12,
    flexDirection: 'row',
  },
  messageRowLeft: {
    justifyContent: 'flex-start',
  },
  messageRowRight: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F6F7F9',
  },
  messageText: {
    fontSize: 14,
    color: '#171725',
  },
  messageTime: {
    fontSize: 12,
    color: '#BFC5CB',
    marginTop: 4,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: '#E9EBED',
  },
  input: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 15,
    color: '#222',
  },
  sendBtn: {
    marginLeft: 12,
    backgroundColor: '#266807',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThreadScreen;