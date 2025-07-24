import { colors } from "@/constants/colors";
import React, { useRef } from "react";
import {
	View,
	Text,
	Animated,
	StyleSheet,
	Platform,
	StatusBar,
} from "react-native";

interface AnimatedHeaderProps {
	title: string;
	scrollY: Animated.Value;
	backgroundColor?: string;
	textColor?: string;
}

const HEADER_MAX_HEIGHT = Platform.OS === "ios" ? 100 : 80;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 70 : 40;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 44 : StatusBar.currentHeight;

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
	title,
	scrollY,
	backgroundColor = colors.background,
	textColor = colors.text,
}) => {
	// Animation cho header height
	const headerHeight = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: "clamp",
	});

	// Animation cho large title opacity
	const largeTitleOpacity = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [1, 0.3, 0],
		extrapolate: "clamp",
	});

	// Animation cho small title opacity
	const smallTitleOpacity = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 0.3, 1],
		extrapolate: "clamp",
	});

	// Animation cho large title transform
	const largeTitleTranslateY = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -15],
		extrapolate: "clamp",
	});

	// Animation cho header shadow
	const headerElevation = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 4],
		extrapolate: "clamp",
	});

	return (
		<Animated.View
			style={[
				styles.header,
				{
					height: headerHeight,
					backgroundColor: backgroundColor,
					elevation: Platform.OS === "android" ? headerElevation : 0,
				},
			]}
		>
			{/* Status Bar Spacer */}
			<View style={{ height: STATUS_BAR_HEIGHT }} />

			{/* Small Title (center) */}
			<Animated.Text
				style={[
					styles.smallTitle,
					{
						opacity: smallTitleOpacity,
						color: textColor,
					},
				]}
				numberOfLines={1}
			>
				{title}
			</Animated.Text>

			{/* Large Title (bottom left) */}
			<Animated.View
				style={[
					styles.largeTitleContainer,
					{
						opacity: largeTitleOpacity,
						transform: [{ translateY: largeTitleTranslateY }],
					},
				]}
			>
				<Text
					style={[styles.largeTitle, { color: textColor }]}
					numberOfLines={1}
				>
					{title}
				</Text>
			</Animated.View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1000,
		justifyContent: "center",
		paddingHorizontal: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3.84,
	},
	smallTitle: {
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
		position: "absolute",
		left: 16,
		right: 16,
	},
	largeTitleContainer: {
		position: "absolute",
		bottom: 12,
		left: 16,
		right: 16,
	},
	largeTitle: {
		fontSize: 34,
		fontWeight: Platform.OS === "ios" ? "700" : "bold",
		lineHeight: Platform.OS === "ios" ? 41 : 34,
	},
});
