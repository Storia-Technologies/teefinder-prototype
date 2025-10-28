import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const membershipTiers = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    cadence: 'per month',
    description: 'Pay as you go and unlock raffle entries on every booking.',
    highlight: '4 giveaway entries per round',
    features: [
      'Standard $4 booking fee',
      'Driving range & bar vouchers',
      'Access to weekly gear giveaways',
    ],
    colors: ['#F8FAFC', '#EEF2FF'],
  },
  {
    id: 'lite',
    name: 'Lite',
    price: '$14.99',
    cadence: 'per month',
    description: 'Save on booking fees and stack guaranteed raffle entries every month.',
    highlight: '30 monthly entries guaranteed',
    features: [
      'Reduced $2 booking fee',
      'Driving range & bar vouchers',
      'Preferred pricing on partner deals',
    ],
    colors: ['#ECFDF3', '#DEF7E2'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29.99',
    cadence: 'per month',
    description: 'Unlock the best perks with free bookings and premium reward access.',
    highlight: 'Priority access to premier prizes',
    features: [
      'No booking fees on every round',
      'Enhanced voucher benefits',
      '50% bonus entries on every raffle',
    ],
    colors: ['#FEF3C7', '#FDE68A'],
    accent: '#EA580C',
  },
];

const MembershipScreen = () => {
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
          <Text style={styles.headerTitle}>Membership Plans</Text>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={styles.subheader}>
          Choose the plan that fits your tee time routine. Every tier unlocks raffle entries and member-only rewards.
        </Text>

        <LinearGradient colors={["#14532D", "#166534"]} style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Ionicons name="golf-outline" size={26} color="#BBF7D0" />
            <Text style={styles.summaryTitle}>Lite Member</Text>
          </View>
          <Text style={styles.summaryCopy}>
            You are saving on booking fees and collecting 30 raffle entries each month. Upgrade to Pro to unlock free
            bookings and premium prize pools.
          </Text>
          <TouchableOpacity
            style={styles.summaryCta}
            onPress={() => router.push('/profile/billing')}
          >
            <Text style={styles.summaryCtaText}>Manage billing</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={{ gap: 18, marginTop: 28 }}>
          {membershipTiers.map((tier) => (
            <LinearGradient
              key={tier.id}
              colors={tier.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.tierCard, tier.id === 'pro' && styles.proTierCard]}
            >
              <View style={styles.tierHeader}>
                <View style={styles.tierTitleGroup}>
                  <Text style={styles.tierName}>{tier.name}</Text>
                  <Text style={styles.tierDescription}>{tier.description}</Text>
                </View>
                <View style={styles.priceGroup}>
                  <Text style={styles.price}>{tier.price}</Text>
                  <Text style={styles.cadence}>{tier.cadence}</Text>
                </View>
              </View>

              <View style={styles.highlightRow}>
                <Ionicons name="sparkles-outline" size={18} color="#1F2937" />
                <Text style={styles.highlightText}>{tier.highlight}</Text>
              </View>

              <View style={styles.featureList}>
                {tier.features.map((feature) => (
                  <View key={feature} style={styles.featureRow}>
                    <MaterialCommunityIcons name="check-circle" size={18} color={tier.accent ?? '#15803D'} />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.tierCta, tier.id === 'pro' ? styles.primaryCta : styles.secondaryCta]}
                onPress={() => {}}
              >
                <Text style={[styles.tierCtaText, tier.id === 'pro' && styles.primaryCtaText]}>
                  {tier.id === 'free' ? 'Stay on Free plan' : tier.id === 'lite' ? 'Switch to Lite' : 'Upgrade to Pro'}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>

        <View style={styles.compareSection}>
          <Text style={styles.compareTitle}>Plan Comparison</Text>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Booking fees</Text>
            <Text style={styles.compareValue}>$4 • $2 • $0</Text>
          </View>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Monthly raffle entries</Text>
            <Text style={styles.compareValue}>4 per booking • 30 • 45 + bonus</Text>
          </View>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Voucher benefits</Text>
            <Text style={styles.compareValue}>Standard • Enhanced • Premium</Text>
          </View>
          <View style={styles.compareRow}>
            <Text style={styles.compareLabel}>Grand prize access</Text>
            <Text style={styles.compareValue}>Included • Early access • Priority draws</Text>
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
    backgroundColor: '#F5F7FB',
  },
  content: {
    paddingTop: 12,
    paddingHorizontal: 22,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    marginBottom: 8,
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
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerSpacer: {
    width: 36,
  },
  subheader: {
    marginTop: 4,
    marginBottom: 18,
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
  },
  summaryCard: {
    marginTop: 16,
    borderRadius: 18,
    padding: 22,
    gap: 16,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  summaryTitle: {
    color: '#BBF7D0',
    fontSize: 20,
    fontWeight: '700',
  },
  summaryCopy: {
    color: '#DCFCE7',
    fontSize: 14,
    lineHeight: 20,
  },
  summaryCta: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(226, 252, 203, 0.92)',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  summaryCtaText: {
    color: '#14532D',
    fontWeight: '600',
    fontSize: 14,
  },
  tierCard: {
    borderRadius: 16,
    padding: 20,
    gap: 14,
  },
  proTierCard: {
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  tierHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  tierTitleGroup: {
    flex: 1,
    gap: 6,
  },
  tierName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B1120',
  },
  tierDescription: {
    color: '#334155',
    fontSize: 14,
    lineHeight: 20,
  },
  priceGroup: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0B1120',
  },
  cadence: {
    color: '#475569',
    fontSize: 13,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  highlightText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  featureList: {
    gap: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    color: '#1F2937',
    fontSize: 14,
  },
  tierCta: {
    marginTop: 6,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
  },
  secondaryCta: {
    backgroundColor: 'rgba(30, 64, 175, 0.1)',
  },
  primaryCta: {
    backgroundColor: '#EA580C',
  },
  tierCtaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
  primaryCtaText: {
    color: '#FEF3C7',
  },
  compareSection: {
    marginTop: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  compareTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  compareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compareLabel: {
    color: '#475569',
    fontSize: 14,
  },
  compareValue: {
    color: '#0B1120',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default MembershipScreen;
