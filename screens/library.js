import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Library = (props) => {
	return (
		<View style={styles.screen}>
			<Text>From Library</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default Library;
