import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to splash screen on app start
    router.replace("/onboarding/splash" as any);
  }, [router]);

  return null;
}