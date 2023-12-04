import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Stack } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

// COMPONENTS
import LoggedIn from "@/components/Logged-In";
import LoggedOut from "@/components/Logged-out";

// CONSTANTS
import Colors from "@/constants/Colors";

const Page = () => {
	const { user } = useUser();

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

			{user ? <LoggedIn /> : <LoggedOut />}
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
});

// const styles = StyleSheet.create({
// 	headerContainer: {
// 		padding: 24,
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 	},
// 	header: {
// 		fontSize: 24,
// 		fontFamily: "mon-b",
// 	},
// 	card: {
// 		marginVertical: 24,
// 		marginHorizontal: 24,
// 		padding: 24,
// 		alignItems: "center",
// 		gap: 14,
// 		backgroundColor: "#fff",
// 		borderRadius: 24,
// 		elevation: 2,
// 		shadowColor: "#000",
// 		shadowOpacity: 0.2,
// 		shadowRadius: 6,
// 		shadowOffset: {
// 			width: 1,
// 			height: 2,
// 		},
// 	},
// 	avatar: {
// 		width: 100,
// 		height: 100,
// 		backgroundColor: Colors.grey,
// 		borderRadius: 5,
// 	},
// 	editRow: {
// 		flex: 1,
// 		height: 50,
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		gap: 8,
// 	},
// 	logoutBtn: {
// 		width: "100%",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// 	logoutBtnText: {
// 		color: Colors.primary,
// 		fontSize: 18,
// 		fontFamily: "mon-sb",
// 	},
// });

// const { signOut, isSignedIn } = useAuth();
// 	const [firstName, setFirstName] = useState(user?.firstName);
// 	const [lastName, setLastName] = useState(user?.lastName);
// 	const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
// 	const [edit, setEdit] = useState(false);

// 	useEffect(() => {
// 		if (!user) return;

// 		setFirstName(user.firstName);
// 		setLastName(user.lastName);
// 		setEmail(user.emailAddresses[0].emailAddress);
// 	}, [user]);

// 	const onSaveUser = async () => {
// 		try {
// 			if (!firstName || !lastName) return;
// 			await user?.update({
// 				firstName,
// 				lastName,
// 			});
// 		} catch (error) {
// 			console.log({ error });
// 		} finally {
// 			setEdit(false);
// 		}
// 	};

// 	const onCaptureImage = async () => {
// 		const result = await ImagePicker.launchImageLibraryAsync({
// 			mediaTypes: ImagePicker.MediaTypeOptions.All,
// 			allowsEditing: true,
// 			aspect: [4, 3],
// 			quality: 0.75,
// 			base64: true,
// 		});

// 		if (!result.canceled) {
// 			const base64 = `data:image/png;base64,${result.assets[0].base64}`;
// 			user?.setProfileImage({
// 				file: base64,
// 			});
// 		}
// 	};

{
	/* <SafeAreaView
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
</SafeAreaView>; */
}
