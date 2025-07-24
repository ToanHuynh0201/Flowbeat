import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import React, { useState } from "react";
import { TrackListItemProps } from "@/types/types";
import { unknownTrackImageUri } from "@/constants/images";
import { colors } from "@/constants/colors";
import { defaultStyles } from "@/styles";
import { fontSize } from "@/constants/fontSize";

const TrackListItem = ({
	track,
	onTrackSelect: handleTrackSelect,
}: TrackListItemProps) => {
	const [isActiveTrack, setIsActiveTrack] = useState(false);
	return (
		<TouchableHighlight>
			<View style={styles.trackItemContainer}>
				<View>
					<Image
						source={{
							uri: track?.artwork ?? unknownTrackImageUri,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/>
				</View>

				<View style={{ width: "100%" }}>
					<Text
						numberOfLines={1}
						style={{
							...styles.trackTitleText,
							color: isActiveTrack ? colors.primary : colors.text,
						}}
					>
						{track?.title}
					</Text>
					{track?.artist && (
						<Text numberOfLines={1} style={styles.trackArtistText}>
							{track.artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default TrackListItem;

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: "row",
		columnGap: 14,
		alignItems: "center",
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: "absolute",
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: "absolute",
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: "600",
		maxWidth: "90%",
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
});
