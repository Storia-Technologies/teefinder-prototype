import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const helpTopics = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    content: '',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    content: '',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
    content: '',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    content: '',
  },
];

const HelpSupportScreen = () => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleTopic = (id: number) => {
    setExpandedTopic((prev) => (prev === id ? null : id));
  };

  const filteredTopics = helpTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTopic = ({ item }: { item: typeof helpTopics[0] }) => (
    <View>
      <TouchableOpacity
        style={styles.topicRow}
        onPress={() => toggleTopic(item.id)}
      >
        <Text
          style={[
            styles.topicTitle,
            expandedTopic === item.id && styles.expandedTitle,
          ]}
        >
          {item.title}
        </Text>
        <Ionicons
          name={expandedTopic === item.id ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={expandedTopic === item.id ? '#1a7a1a' : '#222'}
        />
      </TouchableOpacity>
      {expandedTopic === item.id && item.content && (
        <Text style={styles.topicContent}>{item.content}</Text>
      )}
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help and Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredTopics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTopic}
      />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#222',
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  topicTitle: {
    fontSize: 16,
    color: '#222',
  },
  expandedTitle: {
    color: '#1a7a1a',
  },
  topicContent: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
});

export default HelpSupportScreen;