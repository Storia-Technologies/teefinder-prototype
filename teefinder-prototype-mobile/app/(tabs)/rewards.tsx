import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const rewardDrops = [
  {
    id: 'gear',
    title: 'Weekly Gear Giveaway',
    description: 'Win premium drivers, putters, and rangefinders from top golf brands.',
    entries: '5 entries per booking',
    icon: 'golf',
  },
  {
    id: 'tee-times',
    title: 'Monthly Tee Time Raffle',
    description: 'Score a free foursome or snag 50% off twilight rounds at featured clubs.',
    entries: 'Automatic with any completed round',
    icon: 'flag-variant-outline',
  },
  {
    id: 'grand-prize',
    title: 'Season Grand Prize',
    description: 'Unlock access to destination golf trips and VIP tournament experiences.',
    entries: '100 bonus entries for Pro members',
    icon: 'trophy-outline',
  },
];

const bonusEntries = [
  {
    id: 'free',
    tier: 'Free',
    highlight: '4 entries per completed booking',
    background: ['#f2f7ff', '#f0f5ff'],
  },
  {
    id: 'lite',
    tier: 'Lite',
    highlight: '30 guaranteed entries every month',
    background: ['#e9f7ef', '#e3f3e8'],
  },
  {
    id: 'pro',
    tier: 'Pro',
    highlight: 'Priority access + boosted odds on all raffles',
    background: ['#fff1da', '#ffe8c0'],
  },
];

const RewardsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Rewards & Raffles</Text>
          <TouchableOpacity
            style={styles.headerLink}
            onPress={() => router.push('/(tabs)/profile/membership')}
          >
            <Ionicons name="sparkles-outline" size={18} color="#0F172A" />
            <Text style={styles.headerLinkText}>Memberships</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subheader}>
          Turn every booking into entries for exclusive golf rewards, discounted gear, and unforgettable experiences.
        </Text>

      <LinearGradient colors={["#2f855a", "#276749"]} style={styles.overviewCard}>
        <View style={styles.overviewHeader}>
          <Ionicons name="sparkles-outline" size={26} color="#D1FAE5" />
          <Text style={styles.overviewTitle}>Your October Snapshot</Text>
        </View>
        <View style={styles.overviewStats}>
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>18</Text>
            <Text style={styles.statLabel}>Entries earned</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Active raffles</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>Lite</Text>
            <Text style={styles.statLabel}>Member tier</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/(tabs)/profile/membership')}>
          <Text style={styles.ctaButtonText}>Boost entries with Pro</Text>
          <Ionicons name="chevron-forward" size={18} color="#0F172A" />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Rewards</Text>
        <View style={styles.rewardsGrid}>
          {rewardDrops.map((reward) => (
            <View key={reward.id} style={styles.rewardCard}>
              <View style={styles.rewardIconContainer}>
                <MaterialCommunityIcons name={reward.icon as any} size={26} color="#2563EB" />
              </View>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardDescription}>{reward.description}</Text>
              <View style={styles.rewardFooter}>
                <Ionicons name="ticket-outline" size={16} color="#1D4ED8" />
                <Text style={styles.rewardEntries}>{reward.entries}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How Entries Add Up</Text>
        <View style={{ gap: 12 }}>
          {bonusEntries.map((bonus) => (
            <LinearGradient key={bonus.id} colors={bonus.background} style={styles.bonusCard}>
              <View>
                <Text style={styles.bonusTier}>{bonus.tier} Membership</Text>
                <Text style={styles.bonusHighlight}>{bonus.highlight}</Text>
              </View>
              <Ionicons name="arrow-up-circle" size={24} color="#1E3A8A" />
            </LinearGradient>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Draws</Text>
        <View style={{ gap: 12 }}>
          <View style={styles.drawCard}>
            <View>
              <Text style={styles.drawTitle}>Friday Night Range Party</Text>
              <Text style={styles.drawMeta}>Entries close Oct 24 • Winner announced Oct 26</Text>
            </View>
            <TouchableOpacity style={styles.secondaryCta} onPress={() => {}}>
              <Text style={styles.secondaryCtaText}>View details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCard}>
            <View>
              <Text style={styles.drawTitle}>Cyber Monday Gear Drop</Text>
              <Text style={styles.drawMeta}>Entries close Nov 30 • Bonus odds for Pro</Text>
            </View>
            <TouchableOpacity style={styles.secondaryCta} onPress={() => {}}>
              <Text style={styles.secondaryCtaText}>Set reminder</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 22,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#E2E8F0',
  },
  headerLinkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
  },
  subheader: {
    marginTop: 4,
    marginBottom: 16,
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
  },
  overviewCard: {
    marginTop: 24,
    borderRadius: 16,
    padding: 20,
    gap: 18,
  },
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  overviewTitle: {
    color: '#ECFDF5',
    fontSize: 18,
    fontWeight: '600',
  },
  overviewStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statBlock: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F0FDFA',
  },
  statLabel: {
    color: '#D1FAE5',
    marginTop: 4,
    fontSize: 12,
  },
  divider: {
    width: 1,
    height: 38,
    backgroundColor: 'rgba(209, 250, 229, 0.25)',
  },
  ctaButton: {
    backgroundColor: '#F8FAFC',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ctaButtonText: {
    color: '#0F172A',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 14,
  },
  rewardsGrid: {
    gap: 14,
  },
  rewardCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    gap: 12,
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  rewardIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  rewardDescription: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 20,
  },
  rewardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rewardEntries: {
    color: '#1D4ED8',
    fontWeight: '600',
    fontSize: 13,
  },
  bonusCard: {
    borderRadius: 14,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bonusTier: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  bonusHighlight: {
    marginTop: 4,
    color: '#334155',
    fontSize: 13,
  },
  drawCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  drawTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  drawMeta: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 4,
  },
  secondaryCta: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#E0E7FF',
  },
  secondaryCtaText: {
    color: '#3730A3',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default RewardsScreen;
