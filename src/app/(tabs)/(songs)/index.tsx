import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Animated,
	Platform,
} from "react-native";
import React, { useRef } from "react";
import { defaultStyles } from "@/styles";
import TrackList from "@/components/TrackList";
import { screenPadding } from "@/constants/screenPadding";
import { AnimatedHeader } from "@/components/AnimatedHeader";
import { colors } from "@/constants/colors";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: "Find in songs",
		},
	});

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TrackList />
			</ScrollView>
		</View>
	);
};

export default SongsScreen;

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
});
