declare module 'react-native-snap-carousel' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export interface CarouselProps<T> {
    data: T[];
    renderItem: ({ item, index }: { item: T; index: number }) => React.ReactNode;
    sliderWidth: number;
    itemWidth: number;
    onSnapToItem?: (index: number) => void;
    style?: ViewStyle;
    ref?: React.Ref<Carousel<T>>;
  }

  export default class Carousel<T> extends React.Component<CarouselProps<T>> {
    snapToNext(animated?: boolean): void;
    snapToPrev(animated?: boolean): void;
    snapToItem(index: number, animated?: boolean): void;
  }
}
