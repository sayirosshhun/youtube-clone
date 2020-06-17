import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Inbox = (props) => {
	return (
		<View style={styles.screen}>
			<Text>From Inbox</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default Inbox;
