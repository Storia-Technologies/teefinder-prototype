import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

type Slide = {
  image: any;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: require('../../assets/images/onboarding1.png'),
    title: 'Tee Off in Seconds, Anywhere',
    description: 'Quickly book tee times at your favorite courses.',
  },
  {
    image: require('../../assets/images/onboarding2.png'),
    title: 'Compare, Book, and Play Smarter',
    description: 'Compare courses and secure the best prices.',
  },
  {
    image: require('../../assets/images/onboarding3.png'),
    title: 'Discover New Courses, Effortlessly',
    description: 'Find and explore new golf courses easily.',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace('/auth/login' as any); // Navigate to login screen
    }
  };

  const renderItem = ({ item }: { item: Slide }) => (
    <ImageBackground source={item.image} style={styles.slide}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.pagination}>
          {slides.map((_, i) => (
            <View key={i} style={[styles.dot, currentIndex === i && styles.activeDot]} />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={scrollToNext}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={slides}
      keyExtractor={(_, i) => i.toString()}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 30,
    paddingBottom: 50,
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1a7a1a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#aaa',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1a7a1a',
    width: 12,
  },
});
