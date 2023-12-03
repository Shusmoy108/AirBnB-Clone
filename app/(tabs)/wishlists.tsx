import {
	View,
	Text,
	StyleSheet,
	Platform,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";

// COSNTANTS
import Colors from "@/constants/Colors";

const Page = () => {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					header: () => (
						<SafeAreaView style={{ flex: 1 }}>
							<TouchableOpacity style={styles.header}>
								<Text style={styles.headerText}>Edit</Text>
							</TouchableOpacity>
						</SafeAreaView>
					),
				}}
			/>

			<View style={styles.title}>
				<Text style={styles.titleText}>Wishtlists</Text>
			</View>

			<View style={styles.empty}>
				<Text style={styles.emptyTitle}>Create your first wishlist</Text>

				<Text style={styles.emptyText}>
					As your search, tap the heart icon to save your favorite places and
					experiences to a wishlist.
				</Text>
			</View>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "ios" ? 50 : 100,
	},
	header: {
		height: Platform.OS === "ios" ? 50 : 100,
		paddingHorizontal: 25,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: Platform.OS === "ios" ? "center" : "flex-end",
	},
	headerText: {
		color: "#000",
		fontSize: 20,
		fontFamily: "mon-sb",
		textDecorationLine: "underline",
	},
	title: {
		marginTop: 20,
		paddingHorizontal: 30,
	},
	titleText: {
		color: "#000",
		fontSize: 30,
		fontFamily: "mon-b",
	},
	empty: {
		marginTop: 45,
		paddingHorizontal: 60,
	},
	emptyTitle: {
		color: "#000",
		fontSize: 20,
		fontFamily: "mon-sb",
	},
	emptyText: {
		marginTop: 10,
		color: Colors.grey,
		fontSize: 16,
		lineHeight: 19,
	},
});
