import { View, Text, SafeAreaView, Platform, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// CONSTANTS
import Colors from "@/constants/Colors";

const Page = () => {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					header: () => (
						<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
							<View style={styles.header} />
						</SafeAreaView>
					),
				}}
			/>

			<View style={styles.title}>
				<Text style={styles.titleText}>Inbox</Text>
			</View>

			<View style={styles.empty}>
				<MaterialCommunityIcons
					name="message-badge-outline"
					size={30}
					color="black"
				/>

				<Text style={styles.emptyTitle}>No new messages</Text>

				<Text style={styles.emptyText}>
					When you contact a Host or send a reservation request, you'll see your
					messages here.
				</Text>
			</View>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "ios" ? 40 : 100,
		backgroundColor: "#fff",
	},
	header: {
		height: Platform.OS === "ios" ? 40 : 100,
	},
	title: {
		marginTop: 20,
		marginHorizontal: 30,
	},
	titleText: {
		color: "#000",
		fontSize: 30,
		fontFamily: "mon-b",
	},
	empty: {
		marginTop: 45,
		marginHorizontal: 30,
		alignItems: "center",
	},
	emptyTitle: {
		marginTop: 20,
		color: "#000",
		fontSize: 20,
		fontFamily: "mon-sb",
	},
	emptyText: {
		marginTop: 10,
		textAlign: "center",
		color: Colors.grey,
		fontSize: 14,
		fontFamily: "mon",
		lineHeight: 19,
	},
});
