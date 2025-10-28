import { ExpoConfig } from 'expo/config';
import 'dotenv/config';

const appJson = require('./app.json');

export default (): ExpoConfig => {
  const baseConfig = appJson.expo as ExpoConfig;
  const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

  const androidConfig = baseConfig.android ?? {};
  const existingAndroidConfig = (androidConfig as any).config ?? {};

  return {
    ...baseConfig,
    android: {
      ...androidConfig,
      ...(googleMapsApiKey
        ? {
            config: {
              ...existingAndroidConfig,
              googleMaps: {
                apiKey: googleMapsApiKey,
              },
            },
          }
        : {}),
    },
    extra: {
      ...(baseConfig.extra ?? {}),
      googleMapsApiKey,
    },
  };
};
