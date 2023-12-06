import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Platform,
	ScrollView,
	Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import * as ImagePicker from "expo-image-picker";

// CONSTANTS
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
	const router = useRouter();
	const { user } = useUser();

	const onCaptureImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.75,
			base64: true,
		});

		if (!result.canceled) {
			const base64 = `data:image/png;base64,${result.assets[0].base64}`;
			user?.setProfileImage({
				file: base64,
			});
		}
	};

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					header: () => (
						<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
							<View style={styles.header}>
								<TouchableOpacity onPress={() => router.back()}>
									<Ionicons name="chevron-back" size={24} color={Colors.dark} />
								</TouchableOpacity>

								<TouchableOpacity>
									<Text style={styles.headerText}>Edit</Text>
								</TouchableOpacity>
							</View>
						</SafeAreaView>
					),
				}}
			/>

			<ScrollView
				style={styles.body}
				contentContainerStyle={{ paddingHorizontal: "5%", paddingVertical: 25 }}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.card}>
					<TouchableOpacity onPress={onCaptureImage}>
						<Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
					</TouchableOpacity>

					<Text
						style={{ color: Colors.dark, fontSize: 32, fontFamily: "mon-b" }}
					>
						{user?.firstName}
					</Text>

					<Text
						style={{ color: Colors.grey, fontSize: 16, fontFamily: "mon-sb" }}
					>
						Guest
					</Text>
				</View>

				<View style={styles.block}>
					<Text style={styles.blockTitle}>
						{user?.firstName}'s confirmed information
					</Text>

					<View style={styles.blockBody}>
						<View style={styles.blockTextContainer}>
							<Ionicons name="md-checkmark-sharp" size={28} color="black" />

							<Text style={styles.blockText}>Email address</Text>
						</View>

						<View style={styles.blockTextContainer}>
							<Ionicons name="md-checkmark-sharp" size={28} color="black" />

							<Text style={styles.blockText}>Phone number</Text>
						</View>
					</View>
				</View>

				<View style={styles.block}>
					<Text style={styles.blockTitle}>Identity verification</Text>

					<View style={styles.blockBody}>
						<Text style={styles.blockText}>
							Show others you're really you with the identity verification
							badge.
						</Text>

						<TouchableOpacity style={styles.blockBtn}>
							<Text style={styles.blockBtnText}>Get the badge</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View
					style={[styles.block, { paddingBottom: 25, borderBottomWidth: 0 }]}
				>
					<Text style={styles.blockTitle}>
						It's time to create your profile
					</Text>

					<View style={styles.blockBody}>
						<Text style={styles.blockSubText}>
							Your Airbnb profile is an important part of every reservation.
							Create yours to help Hosts and guests get to know you.
						</Text>
					</View>
				</View>

				<TouchableOpacity style={defaultStyles.btn}>
					<Text style={defaultStyles.btnText}>Create profile</Text>
				</TouchableOpacity>
			</ScrollView>
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
		marginHorizontal: "5%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: Platform.OS === "ios" ? "center" : "flex-end",
	},
	headerText: {
		color: "#000",
		fontSize: 20,
		fontFamily: "mon-sb",
		textDecorationLine: "underline",
	},
	body: {
		flex: 1,
	},
	card: {
		padding: 35,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		backgroundColor: "#fff",
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#dedede",
		borderRadius: 25,
		elevation: 2,
		shadowColor: "#000",
		shadowOpacity: 0.13,
		shadowRadius: 25,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	avatar: {
		width: 105,
		height: 105,
		borderRadius: 60,
		backgroundColor: "#999",
	},
	block: {
		marginTop: 35,
		paddingBottom: 40,
		alignItems: "flex-start",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.grey,
	},
	blockTitle: {
		color: Colors.dark,
		fontSize: 22,
		fontFamily: "mon-sb",
	},
	blockBody: {
		marginTop: 20,
		alignItems: "flex-start",
		gap: 10,
	},
	blockTextContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 9,
	},
	blockText: {
		paddingRight: 20,
		color: Colors.dark,
		fontSize: 16,
		fontFamily: "mon",
	},
	blockSubText: {
		color: Colors.grey,
		fontSize: 13,
		fontFamily: "mon",
	},
	blockBtn: {
		marginTop: 15,
		paddingVertical: 17,
		paddingHorizontal: 25,
		borderWidth: 1,
		borderColor: Colors.dark,
		borderRadius: 10,
	},
	blockBtnText: {
		color: Colors.dark,
		fontSize: 16,
		fontFamily: "mon-sb",
	},
});
