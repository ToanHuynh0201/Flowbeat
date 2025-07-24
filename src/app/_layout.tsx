import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
};

const RootNavigation = () => {
	const insets = useSafeAreaInsets();
	return (
		<Stack
			screenOptions={{
				contentStyle: {
					paddingTop: insets.top,
					backgroundColor: colors.background,
				},
				headerStyle: {
					backgroundColor: colors.background,
				},
			}}
		>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default App;
