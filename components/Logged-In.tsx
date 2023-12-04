import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	Ionicons,
	FontAwesome,
	FontAwesome5,
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
	SimpleLineIcons,
	AntDesign,
} from "@expo/vector-icons";
import { useAuth, useUser } from "@clerk/clerk-expo";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const LoggedIn = () => {
	const { user } = useUser();
	const { signOut } = useAuth();

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 50 }}
		>
			<View style={styles.title}>
				<Text style={styles.titleText}>Profile</Text>

				<Ionicons name="notifications-outline" size={26} />
			</View>

			<View style={styles.body}>
				<TouchableOpacity style={styles.userInfo}>
					<View style={styles.userInfoLeftContent}>
						<Image source={{ uri: user?.imageUrl }} style={styles.avatar} />

						<View style={styles.userDetail}>
							<Text
								style={{
									color: Colors.dark,
									fontSize: 19,
									fontFamily: "mon-sb",
								}}
							>
								{user?.firstName}
							</Text>

							<Text
								style={{ color: Colors.grey, fontSize: 15, fontFamily: "mon" }}
							>
								Show profile
							</Text>
						</View>
					</View>

					<Ionicons name="chevron-forward" size={26} color={Colors.dark} />
				</TouchableOpacity>

				<TouchableOpacity style={styles.newFeature}>
					<View style={styles.newFeatureLeftContent}>
						<Text
							style={{ color: Colors.dark, fontSize: 17, fontFamily: "mon-sb" }}
						>
							Winter Release feature
						</Text>

						<View
							style={{
								backgroundColor: Colors.primary,
								paddingHorizontal: 5,
								paddingVertical: 2,
								borderRadius: 6,
							}}
						>
							<Text
								style={{ color: "#fff", fontSize: 11, fontFamily: "mon-sb" }}
							>
								NEW
							</Text>
						</View>
					</View>

					<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
				</TouchableOpacity>

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
					<Text style={defaultStyles.menuHeader}>Settings</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<FontAwesome5 name="user-circle" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Personal information</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<FontAwesome name="credit-card" size={24} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Payments and payouts</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<Feather name="file" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Taxes</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<MaterialCommunityIcons
								name="shield-outline"
								size={26}
								color={Colors.dark}
							/>

							<Text style={defaultStyles.menuText}>Login & security</Text>
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

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<MaterialIcons name="translate" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Translation</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<Ionicons
								name="notifications-outline"
								size={26}
								color={Colors.dark}
							/>

							<Text style={defaultStyles.menuText}>Translation</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<SimpleLineIcons name="lock" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Privacy and sharing</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 50 }}>
					<Text style={defaultStyles.menuHeader}>Hosting</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<MaterialCommunityIcons
								name="home-plus-outline"
								size={26}
								color={Colors.dark}
							/>

							<Text style={defaultStyles.menuText}>List your space</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 50 }}>
					<Text style={defaultStyles.menuHeader}>Referrals & Credits</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContentAlt}>
							<AntDesign name="gift" size={26} color={Colors.dark} />

							<View style={defaultStyles.menuTextGroup}>
								<Text style={defaultStyles.menuText}>Gift cards</Text>

								<Text style={defaultStyles.menuSubText}>
									Send or redeem a gift card
								</Text>
							</View>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContentAlt}>
							<AntDesign name="gift" size={26} color={Colors.dark} />

							<View style={defaultStyles.menuTextGroup}>
								<Text style={defaultStyles.menuText}>Refer a Host</Text>

								<Text style={defaultStyles.menuSubText}>
									Earn $15 for every Host your refer
								</Text>
							</View>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 50 }}>
					<Text style={defaultStyles.menuHeader}>Tools</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<MaterialIcons
								name="settings-voice"
								size={26}
								color={Colors.dark}
							/>

							{Platform.OS === "ios" ? (
								<Text style={defaultStyles.menuText}>Siri settings</Text>
							) : (
								<Text style={defaultStyles.menuText}>
									Google Assistant settings
								</Text>
							)}
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 50 }}>
					<Text style={defaultStyles.menuHeader}>Support</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
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

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<AntDesign name="Safety" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>
								Get help with a safety issue
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<AntDesign name="customerservice" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>
								Report a neighborhood concern
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<FontAwesome5 name="airbnb" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>How Airbnb works </Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<Feather name="edit-2" size={26} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>How Airbnb works </Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 50 }}>
					<Text style={defaultStyles.menuHeader}>Legal</Text>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<SimpleLineIcons name="book-open" size={24} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Terms of Service</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<SimpleLineIcons name="book-open" size={24} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Privacy Policy</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<SimpleLineIcons name="book-open" size={24} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Your Privacy Choices</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>

					<TouchableOpacity style={defaultStyles.menuItem}>
						<View style={defaultStyles.menuLeftContent}>
							<SimpleLineIcons name="book-open" size={24} color={Colors.dark} />

							<Text style={defaultStyles.menuText}>Open source license</Text>
						</View>

						<Ionicons name="chevron-forward" size={24} color={Colors.dark} />
					</TouchableOpacity>
				</View>

				<TouchableOpacity onPress={() => signOut()} style={{ marginTop: 50 }}>
					<Text
						style={{
							color: Colors.dark,
							fontSize: 16,
							fontFamily: "mon-sb",
							textDecorationLine: "underline",
						}}
					>
						Log out
					</Text>
				</TouchableOpacity>

				<Text
					style={{
						marginTop: 40,
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

export default LoggedIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		marginTop: 20,
		marginHorizontal: "5%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	titleText: {
		color: "#000",
		fontSize: 30,
		fontFamily: "mon-b",
	},
	body: {
		flex: 1,
		marginTop: 40,
		marginHorizontal: "5%",
	},
	userInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	userInfoLeftContent: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 15,
	},
	avatar: {
		width: 65,
		height: 65,
		borderRadius: 50,
		backgroundColor: "#999",
	},
	userDetail: {
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 3,
	},
	newFeature: {
		marginTop: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	newFeatureLeftContent: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 6,
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
