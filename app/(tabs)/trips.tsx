import {
	View,
	Text,
	StyleSheet,
	Platform,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { Stack, Link } from "expo-router";

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
				<Text style={styles.titleText}>Trips</Text>
			</View>

			<View style={styles.empty}>
				<Text style={styles.emptyTitle}>No trips booked...yet!</Text>

				<Text style={styles.emptyText}>
					Time to dust off your bags and start planning your next adventure.
				</Text>

				<Link href={"/(tabs)/"} asChild>
					<TouchableOpacity style={styles.emptyBtn}>
						<Text style={styles.emptyBtnText}>Start searching</Text>
					</TouchableOpacity>
				</Link>
			</View>

			<View style={styles.helpInstructions}>
				<Text style={styles.helpInstructionsText}>
					Can't find your reservations here?
				</Text>

				<TouchableOpacity>
					<Text style={styles.helpInstructionsLink}>Visit the help center</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "ios" ? 50 : 100,
		backgroundColor: "#fff",
	},
	header: {
		height: Platform.OS === "ios" ? 50 : 100,
	},
	title: {
		marginTop: 20,
		marginHorizontal: 30,
		paddingBottom: 30,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.grey,
	},
	titleText: {
		color: "#000",
		fontSize: 30,
		fontFamily: "mon-b",
	},
	empty: {
		marginTop: 25,
		marginHorizontal: 30,
		paddingBottom: 30,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.grey,
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
		fontFamily: "mon",
		lineHeight: 19,
	},
	emptyBtn: {
		width: Platform.OS === "ios" ? 160 : 180,
		marginTop: 25,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: Colors.dark,
		borderRadius: 8,
	},
	emptyBtnText: {
		color: Colors.dark,
		fontSize: 16,
		fontFamily: "mon-sb",
	},
	helpInstructions: {
		marginTop: 20,
		marginHorizontal: 30,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 4,
	},
	helpInstructionsText: {
		color: Colors.grey,
		fontSize: 15,
		fontFamily: "mon",
	},
	helpInstructionsLink: {
		color: Colors.dark,
		fontSize: 15,
		fontFamily: "mon-sb",
		textDecorationLine: "underline",
	},
});
