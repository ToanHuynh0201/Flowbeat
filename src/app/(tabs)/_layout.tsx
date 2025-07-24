import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabNavigation = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="favorites"
				options={{
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default TabNavigation;
const styles = StyleSheet.create({});
