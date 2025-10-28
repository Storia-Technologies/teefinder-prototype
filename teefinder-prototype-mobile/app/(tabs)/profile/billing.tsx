import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const invoiceHistory = [
  {
    id: 'INV-2409',
    label: 'September Membership Renewal',
    date: 'Sep 12, 2024',
    amount: '$14.99',
    status: 'Paid',
  },
  {
    id: 'INV-2408',
    label: 'August Membership Renewal',
    date: 'Aug 12, 2024',
    amount: '$14.99',
    status: 'Paid',
  },
];

const BillingScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#0F172A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Billing & Subscription</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Current plan</Text>
          <LinearGradient colors={["#14532D", "#166534"]} style={styles.planCard}>
            <View style={styles.planHeader}>
              <View>
                <Text style={styles.planBadge}>Lite Plan</Text>
                <Text style={styles.planPrice}>$14.99</Text>
                <Text style={styles.planCadence}>per month</Text>
              </View>
              <View style={styles.planMeta}>
                <Ionicons name="golf-outline" size={28} color="#DCFCE7" />
                <Text style={styles.planStatus}>Active</Text>
              </View>
            </View>
            <Text style={styles.planCopy}>
              Save on booking fees, collect 30 raffle entries every month, and enjoy preferred partner pricing.
            </Text>
            <View style={styles.planFooter}>
              <View style={styles.metaRow}>
                <Ionicons name="calendar-outline" size={18} color="#BBF7D0" />
                <Text style={styles.metaText}>Renews on Oct 12, 2024</Text>
              </View>
              <TouchableOpacity
                style={styles.managePlanButton}
                onPress={() => router.push('/(tabs)/profile/membership')}
              >
                <Text style={styles.managePlanText}>Change plan</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Payment method</Text>
          <LinearGradient colors={["#4B50E6", "#373BBA"]} style={styles.paymentCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardType}>Visa Debit</Text>
              <Text style={styles.cardBrand}>VISA</Text>
            </View>
            <Text style={styles.cardNumber}>**** **** **** 4235</Text>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabel}>Card holder</Text>
                <Text style={styles.cardValue}>John Doe</Text>
              </View>
              <View>
                <Text style={styles.cardLabel}>Expires</Text>
                <Text style={styles.cardValue}>08/27</Text>
              </View>
            </View>
          </LinearGradient>
          <TouchableOpacity
            style={styles.managePaymentButton}
            onPress={() => router.push('/profile/payment-methods')}
          >
            <Ionicons name="card-outline" size={18} color="#14532D" />
            <Text style={styles.managePaymentText}>Manage payment methods</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Upcoming charges</Text>
          <View style={styles.chargeCard}>
            <View style={styles.chargeRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.chargeLabel}>Next renewal</Text>
                <Text style={styles.chargeDate}>Oct 12, 2024</Text>
              </View>
              <Text style={styles.chargeAmount}>$14.99</Text>
            </View>
            <View style={styles.chargeRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <MaterialIcons name="workspace-premium" size={18} color="#14532D" />
                <Text style={styles.chargeMeta}>Lite membership + raffle entries</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.updateBillingBtn}>
              <Text style={styles.updateBillingText}>Update billing cycle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Invoice history</Text>
          <View style={styles.invoiceList}>
            {invoiceHistory.map((invoice) => (
              <View key={invoice.id} style={styles.invoiceRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.invoiceLabel}>{invoice.label}</Text>
                  <Text style={styles.invoiceMeta}>{invoice.date} · {invoice.id}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.invoiceAmount}>{invoice.amount}</Text>
                  <Text style={styles.invoiceStatus}>{invoice.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 12,
    paddingHorizontal: 22,
    paddingBottom: 40,
    gap: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerSpacer: {
    width: 36,
  },
  section: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  planCard: {
    borderRadius: 18,
    padding: 22,
    gap: 16,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planBadge: {
    color: '#DCFCE7',
    fontSize: 16,
    fontWeight: '700',
  },
  planPrice: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },
  planCadence: {
    color: '#BBF7D0',
    fontSize: 14,
  },
  planMeta: {
    alignItems: 'flex-end',
    gap: 6,
  },
  planStatus: {
    color: '#DCFCE7',
    fontWeight: '600',
  },
  planCopy: {
    color: '#DCFCE7',
    fontSize: 14,
    lineHeight: 20,
  },
  planFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaText: {
    color: '#BBF7D0',
    fontSize: 14,
    fontWeight: '500',
  },
  managePlanButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: 'rgba(226, 252, 203, 0.95)',
  },
  managePlanText: {
    color: '#14532D',
    fontWeight: '600',
    fontSize: 14,
  },
  paymentCard: {
    borderRadius: 18,
    padding: 20,
    gap: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  cardBrand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    letterSpacing: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
  },
  cardValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  managePaymentButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(20, 83, 45, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  managePaymentText: {
    color: '#14532D',
    fontWeight: '600',
    fontSize: 13,
  },
  chargeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chargeLabel: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '600',
  },
  chargeDate: {
    color: '#475569',
    marginTop: 4,
  },
  chargeAmount: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '700',
  },
  chargeMeta: {
    color: '#14532D',
    fontSize: 13,
    fontWeight: '600',
  },
  updateBillingBtn: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: 'rgba(20, 83, 45, 0.08)',
  },
  updateBillingText: {
    color: '#14532D',
    fontWeight: '600',
  },
  invoiceList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  invoiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  invoiceLabel: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '600',
  },
  invoiceMeta: {
    color: '#64748B',
    marginTop: 4,
    fontSize: 13,
  },
  invoiceAmount: {
    color: '#0F172A',
    fontWeight: '700',
    fontSize: 15,
  },
  invoiceStatus: {
    color: '#16A34A',
    marginTop: 4,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default BillingScreen;
