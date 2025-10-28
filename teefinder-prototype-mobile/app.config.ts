import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  const androidConfig = config.android ?? {};
  const existingAndroidRuntimeConfig = androidConfig.config ?? {};

  return {
    ...config,
    android: {
      ...androidConfig,
      ...(googleMapsApiKey
        ? {
            config: {
              ...existingAndroidRuntimeConfig,
              googleMaps: {
                apiKey: googleMapsApiKey,
              },
            },
          }
        : androidConfig.config
        ? { config: existingAndroidRuntimeConfig }
        : {}),
    },
    extra: {
      ...config.extra,
      googleMapsApiKey,
    },
  };
};
