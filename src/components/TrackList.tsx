import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrackListItem from "./TrackListItem";
import library from "@assets/data/library.json";
import { Track } from "react-native-track-player";
import { TracksListProps } from "@/types/types";
import { utilsStyles } from "@/styles";
const ItemDivider = () => (
	<View
		style={{
			...utilsStyles.itemSeparator,
			marginVertical: 9,
			marginLeft: 60,
		}}
	/>
);
const TrackList = ({
	id,
	tracks,
	hideQueueControls = false,
	...flatlistProps
}: TracksListProps) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={ItemDivider}
			contentContainerStyle={{ paddingTop: 90, paddingBottom: 85 }}
			renderItem={({ item: track }) => <TrackListItem track={track} />}
			{...flatlistProps}
		></FlatList>
	);
};

export default TrackList;

const styles = StyleSheet.create({});
