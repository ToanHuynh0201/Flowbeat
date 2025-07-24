import { StackScreenWithSearchBar } from "@/constants/layout";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Platform, View } from "react-native";

const SongScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: "Songs",
						headerTitleStyle: {
							fontSize: 40,
						},
					}}
				/>
			</Stack>
		</View>
	);
};

export default SongScreenLayout;
