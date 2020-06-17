import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigation from "./navigation/CustomNavigator";
export default function App() {
	return <BottomNavigation />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
