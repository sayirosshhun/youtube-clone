import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subscription = (props) => {
	return (
		<View style={styles.screen}>
			<Text>From Subscription</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default Subscription;
