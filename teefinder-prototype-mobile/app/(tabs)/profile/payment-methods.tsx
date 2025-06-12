import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const paymentMethods = [
  {
    id: 1,
    type: 'Visa Debit',
    cardNumber: '9865 3567 4563 4235',
    isDefault: true,
    brand: 'visa',
    bgColor: '#4B50E6',
    textColor: '#fff',
  },
  {
    id: 2,
    type: 'Mastercard',
    cardNumber: '5294 2436 4780 9568',
    isDefault: false,
    brand: 'mastercard',
    bgColor: '#181828',
    textColor: '#fff',
  },
];

const PaymentMethodsScreen = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(
    paymentMethods.find((card) => card.isDefault)?.id || null
  );
  const router = useRouter();

  const renderBrand = (brand: string) => {
    if (brand === 'visa') {
      return (
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>VISA</Text>
      );
    }
    if (brand === 'mastercard') {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            width: 18, height: 18, borderRadius: 9, backgroundColor: '#FF5F00', marginRight: -6, zIndex: 2,
          }} />
          <View style={{
            width: 18, height: 18, borderRadius: 9, backgroundColor: '#F79E1B', marginLeft: -6, zIndex: 1,
          }} />
        </View>
      );
    }
    return null;
  };

  const renderCard = ({ item }: { item: typeof paymentMethods[0] }) => (
    <View style={[styles.card, { backgroundColor: item.bgColor }]}>
      <View style={styles.cardRow}>
        <View>
          <Text style={[styles.cardType, { color: item.textColor }]}>{item.type}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          {renderBrand(item.brand)}
        </View>
      </View>
      <View style={styles.cardRow}>
        <Text style={[styles.cardNumber, { color: item.textColor }]}>
          **** **** **** {item.cardNumber.slice(-4)}
        </Text>
      </View>
    </View>
  );

  const renderDefaultToggle = (item: typeof paymentMethods[0]) => (
    <TouchableOpacity
      style={styles.defaultToggle}
      onPress={() => setSelectedCard(item.id)}
      activeOpacity={0.7}
    >
      <Ionicons
        name={selectedCard === item.id ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={selectedCard === item.id ? '#1a7a1a' : '#ccc'}
      />
      <Text style={[
        styles.defaultToggleText,
        selectedCard === item.id && styles.defaultToggleTextActive,
      ]}>
        Use as default payment method
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Card</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            {renderCard({ item })}
            {renderDefaultToggle(item)}
          </View>
        )}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
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
  cardList: {
    paddingBottom: 80,
  },
  card: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 8,
    minHeight: 100,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
    opacity: 0.9,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
    marginTop: 24,
  },
  defaultToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 8,
  },
  defaultToggleText: {
    fontSize: 15,
    color: '#888',
    marginLeft: 8,
    fontWeight: '600',
  },
  defaultToggleTextActive: {
    color: '#1a7a1a',
  },
  addButton: {
    position: 'absolute',
    bottom: 28,
    right: 28,
    backgroundColor: '#1a7a1a',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default PaymentMethodsScreen;