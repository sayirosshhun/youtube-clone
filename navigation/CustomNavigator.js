import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import YouTube from "../screens/inbox";
import Explore from "../screens/explore";
import Subscription from "../screens/subscription";
import Inbox from "../screens/inbox";
import Library from "../screens/library";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const HomeNavigator = createStackNavigator({
	YouTube: {
		screen: YouTube,
		navigationOptions: {
			headerRight: () => {
				return (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item title="cast" iconName="cast" color="gray" />
						<Item title="search" iconName="search" color="gray" />
						<Item
							title="video"
							iconName="video-call"
							color="gray"
						/>
						<Item
							title="account"
							iconName="account-circle"
							color="gray"
						/>
					</HeaderButtons>
				);
			},
		},
	},
});

const ExploreNavigator = createStackNavigator({
	YouTube: {
		screen: Explore,
		navigationOptions: {
			headerRight: () => {
				return (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item title="cast" iconName="cast" color="gray" />
						<Item title="search" iconName="search" color="gray" />
						<Item
							title="video"
							iconName="video-call"
							color="gray"
						/>
						<Item
							title="account"
							iconName="account-circle"
							color="gray"
						/>
					</HeaderButtons>
				);
			},
		},
	},
});

const SubscriptionNavigator = createStackNavigator({
	YouTube: {
		screen: Subscription,
		navigationOptions: {
			headerRight: () => {
				return (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item title="cast" iconName="cast" color="gray" />
						<Item title="search" iconName="search" color="gray" />
						<Item
							title="video"
							iconName="video-call"
							color="gray"
						/>
						<Item
							title="account"
							iconName="account-circle"
							color="gray"
						/>
					</HeaderButtons>
				);
			},
		},
	},
});

const InboxNavigator = createStackNavigator({
	YouTube: {
		screen: Inbox,
		navigationOptions: {
			headerRight: () => {
				return (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item title="cast" iconName="cast" color="gray" />
						<Item title="search" iconName="search" color="gray" />
						<Item
							title="video"
							iconName="video-call"
							color="gray"
						/>
						<Item
							title="account"
							iconName="account-circle"
							color="gray"
						/>
					</HeaderButtons>
				);
			},
		},
	},
});

const LibraryNavigator = createStackNavigator({
	YouTube: {
		screen: Library,
		navigationOptions: {
			headerRight: () => {
				return (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item title="cast" iconName="cast" color="gray" />
						<Item title="search" iconName="search" color="gray" />
						<Item
							title="video"
							iconName="video-call"
							color="gray"
						/>
						<Item
							title="account"
							iconName="account-circle"
							color="gray"
						/>
					</HeaderButtons>
				);
			},
		},
	},
});

const BottomNavigation = createBottomTabNavigator(
	{
		Home: {
			screen: HomeNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<MaterialIcons
							name="home"
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Explore: {
			screen: ExploreNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<MaterialIcons
							name="explore"
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Subscriptions: {
			screen: SubscriptionNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<MaterialIcons
							name="subscriptions"
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Inbox: {
			screen: InboxNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<MaterialIcons
							name="inbox"
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Library: {
			screen: LibraryNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<MaterialIcons
							name="video-library"
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: "black",
			inactiveTintColor: "gray",
		},
	}
);

export default createAppContainer(BottomNavigation);
