import { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Platform,
	TouchableOpacity,
	Image,
} from "react-native";
import { Link } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { TextInput } from "react-native-gesture-handler";

const Page = () => {
	const { signOut, isSignedIn } = useAuth();
	const { user } = useUser();
	const [firstName, setFirstName] = useState(user?.firstName);
	const [lastName, setLastName] = useState(user?.lastName);
	const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		if (!user) return;

		setFirstName(user.firstName);
		setLastName(user.lastName);
		setEmail(user.emailAddresses[0].emailAddress);
	}, [user]);

	const onSaveUser = async () => {
		try {
			if (!firstName || !lastName) return;
			await user?.update({
				firstName,
				lastName,
			});
		} catch (error) {
			console.log({ error });
		} finally {
			setEdit(false);
		}
	};

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
		<SafeAreaView
			style={[
				defaultStyles.container,
				{ paddingTop: Platform.OS === "ios" ? 0 : 40 },
			]}
		>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Profile</Text>

				<Ionicons name="notifications-outline" size={26} />
			</View>

			{user && (
				<View style={styles.card}>
					<TouchableOpacity onPress={onCaptureImage}>
						<Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
					</TouchableOpacity>

					<View style={{ flexDirection: "row", gap: 6 }}>
						{edit ? (
							<View style={styles.editRow}>
								<TextInput
									placeholder="First Name"
									value={firstName || ""}
									onChangeText={setFirstName}
									style={[defaultStyles.inputField, { width: 100 }]}
								/>

								<TextInput
									placeholder="Last Name"
									value={lastName || ""}
									onChangeText={setLastName}
									style={[defaultStyles.inputField, { width: 100 }]}
								/>

								<TouchableOpacity onPress={onSaveUser}>
									<Ionicons name="checkmark-outline" size={24} color={"#000"} />
								</TouchableOpacity>
							</View>
						) : (
							<View style={styles.editRow}>
								<Text style={{ fontSize: 22, fontFamily: "mon-b" }}>
									{firstName} {lastName}
								</Text>

								<TouchableOpacity onPress={() => setEdit(true)}>
									<Ionicons name="create-outline" size={24} color={"#000"} />
								</TouchableOpacity>
							</View>
						)}
					</View>

					<Text>{email}</Text>
					<Text>Since {user?.createdAt?.toLocaleDateString()}</Text>
				</View>
			)}

			{isSignedIn && (
				<TouchableOpacity style={styles.logoutBtn} onPress={() => signOut()}>
					<Text style={styles.logoutBtnText}>Log Out</Text>
				</TouchableOpacity>
			)}

			{!isSignedIn && (
				<Link href={"/(modals)/login"} asChild>
					<TouchableOpacity style={styles.logoutBtn} onPress={() => signOut()}>
						<Text style={styles.logoutBtnText}>Log In</Text>
					</TouchableOpacity>
				</Link>
			)}
		</SafeAreaView>
	);
};

export default Page;

const styles = StyleSheet.create({
	headerContainer: {
		padding: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	header: {
		fontSize: 24,
		fontFamily: "mon-b",
	},
	card: {
		marginVertical: 24,
		marginHorizontal: 24,
		padding: 24,
		alignItems: "center",
		gap: 14,
		backgroundColor: "#fff",
		borderRadius: 24,
		elevation: 2,
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowRadius: 6,
		shadowOffset: {
			width: 1,
			height: 2,
		},
	},
	avatar: {
		width: 100,
		height: 100,
		backgroundColor: Colors.grey,
		borderRadius: 5,
	},
	editRow: {
		flex: 1,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	},
	logoutBtn: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	logoutBtnText: {
		color: Colors.primary,
		fontSize: 18,
		fontFamily: "mon-sb",
	},
});
