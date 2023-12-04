import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const LoggedOut = () => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 50 }}
		>
			<View style={styles.title}>
				<Text style={styles.titleText}>Profile</Text>

				<Text style={styles.titleSubText}>
					Log in to start planning your next trip.
				</Text>
			</View>

			<View style={styles.body}>
				<Link href={"/(modals)/login"} asChild>
					<TouchableOpacity style={defaultStyles.btn}>
						<Text style={defaultStyles.btnText}>Log in</Text>
					</TouchableOpacity>
				</Link>

				<View style={styles.loginInstruction}>
					<Text style={styles.loginInstructionText}>
						Don't have an account?
					</Text>

					<Link href={"/(modals)/login"} asChild>
						<Text style={styles.loginInstructionLink}>Sign up</Text>
					</Link>
				</View>

				<View style={styles.card}>
					<View style={styles.cardContent}>
						<Text
							style={{ color: Colors.dark, fontSize: 18, fontFamily: "mon-sb" }}
						>
							Airbnb your place
						</Text>
						<Text
							style={{ color: Colors.grey, fontSize: 13, fontFamily: "mon" }}
						>
							It's simple to get set up and start earning.
						</Text>
					</View>

					<Image
						source={require("../assets/images/house-3d-image.png")}
						style={styles.cardImage}
					/>
				</View>

				<View style={{ marginTop: 50 }}>
					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<Ionicons name="settings-outline" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Settings</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<MaterialIcons
								name="accessibility"
								size={26}
								color={Colors.dark}
							/>

							<Text style={defaultStyles.menuText}>Accessibility</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity
						style={[defaultStyles.menuItem, { borderBottomWidth: 0 }]}
					>
						<View style={defaultStyles.menuLeftContent}>
							<Ionicons
								name="help-circle-outline"
								size={26}
								color={Colors.dark}
							/>

							<Text style={defaultStyles.menuText}>Visit the Help Center</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<Text
					style={{
						marginTop: 100,
						color: Colors.grey,
						fontSize: 14,
						fontFamily: "mon",
					}}
				>
					Image by Freepik
				</Text>

				<Text
					style={{
						marginTop: 10,
						color: Colors.grey,
						fontSize: 14,
						fontFamily: "mon",
					}}
				>
					Listings data from public.opendatasoft.com
				</Text>
			</View>
		</ScrollView>
	);
};

export default LoggedOut;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		marginTop: 20,
		marginHorizontal: "5%",
	},
	titleText: {
		color: "#000",
		fontSize: 30,
		fontFamily: "mon-b",
	},
	titleSubText: {
		marginTop: 10,
		color: Colors.grey,
		fontSize: 17,
		fontFamily: "mon",
	},
	body: {
		flex: 1,
		marginTop: 40,
		marginHorizontal: "5%",
	},
	loginInstruction: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 4,
	},
	loginInstructionText: {
		color: Colors.grey,
		fontSize: 14,
		fontFamily: "mon-sb",
	},
	loginInstructionLink: {
		color: Colors.dark,
		fontSize: 14,
		fontFamily: "mon-b",
		textDecorationLine: "underline",
	},
	card: {
		marginTop: 40,
		paddingLeft: 20,
		paddingRight: 10,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#dedede",
		borderRadius: 18,
		elevation: 10,
		shadowColor: Colors.grey,
		shadowOpacity: 0.2,
		shadowRadius: 18,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	cardContent: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 8,
	},
	cardImage: {
		width: 120,
		height: 85,
		resizeMode: "stretch",
	},
});
