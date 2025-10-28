import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { type ComponentType } from 'react';

export const withModalProvider = <P extends Record<string, unknown>>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <BottomSheetModalProvider>
      <Component {...props} />
    </BottomSheetModalProvider>
  );

  const componentName = Component.displayName ?? Component.name ?? 'Component';
  WrappedComponent.displayName = `withModalProvider(${componentName})`;

  return WrappedComponent;
};