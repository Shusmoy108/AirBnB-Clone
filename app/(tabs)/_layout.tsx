import { Platform } from "react-native";
import { Tabs } from "expo-router";

// CONSTANTS
import Colors from "@/constants/Colors";
import {
	AntDesign,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				tabBarStyle: {
					height: 80,
					paddingBottom: Platform.OS === "ios" ? 30 : 13,
				},
				tabBarLabelStyle: {
					fontFamily: "mon-sb",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: "Explore",
					tabBarLabelStyle: { fontSize: 12 },
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="search1" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="wishlists"
				options={{
					tabBarLabel: "Wishlists",
					tabBarLabelStyle: { fontSize: 12 },
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="heart-outline" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="trips"
				options={{
					tabBarLabel: "Trips",
					tabBarLabelStyle: { fontSize: 12 },
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="airbnb" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="inbox"
				options={{
					tabBarLabel: "Inbox",
					tabBarLabelStyle: { fontSize: 12 },
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="message-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: "Profile",
					tabBarLabelStyle: { fontSize: 12 },
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-circle-outline" size={size} color={color} />
					),
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default Layout;
