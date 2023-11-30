import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

// HOOKS
import { useWarmUpBrowser } from "@/hook/useWarmUpBrowser";
import { TextInput } from "react-native-gesture-handler";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

// ENUMS
enum Strategy {
	Google = "oauth_google",
	Apple = "oauth_apple",
	Facebook = "oauth_facebook",
}

const Page = () => {
	const router = useRouter();
	useWarmUpBrowser();

	const { startOAuthFlow: googleAuth } = useOAuth({
		strategy: Strategy.Google,
	});
	const { startOAuthFlow: appleAuth } = useOAuth({ strategy: Strategy.Apple });
	const { startOAuthFlow: facebookAuth } = useOAuth({
		strategy: Strategy.Facebook,
	});

	const onSelectAuth = async (strategy: Strategy) => {
		const selectedAuth = {
			[Strategy.Google]: googleAuth,
			[Strategy.Facebook]: facebookAuth,
			[Strategy.Apple]: appleAuth,
		}[strategy];

		try {
			const { createdSessionId, setActive } = await selectedAuth();
			if (createdSessionId) setActive!({ session: createdSessionId });

			router.back();
		} catch (error) {
			console.error("OAuth Error: ", error);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				autoCapitalize="none"
				placeholder="Email"
				style={[defaultStyles.inputField, { marginBottom: 30 }]}
				placeholderTextColor="gray"
			/>

			<TouchableOpacity style={defaultStyles.btn}>
				<Text style={defaultStyles.btnText}>Continue</Text>
			</TouchableOpacity>

			<View style={styles.separatorView}>
				<View
					style={{
						flex: 1,
						borderBottomColor: "#000",
						borderBottomWidth: StyleSheet.hairlineWidth,
					}}
				/>
				<Text style={styles.separator}>or</Text>
				<View
					style={{
						flex: 1,
						borderBottomColor: "#000",
						borderBottomWidth: StyleSheet.hairlineWidth,
					}}
				/>
			</View>

			<View style={{ gap: 20 }}>
				<TouchableOpacity style={styles.btnOutline}>
					<Ionicons
						name="call-outline"
						size={24}
						style={defaultStyles.bntIcon}
					/>
					<Text style={styles.btnOutlineText}>Continue with Phone</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Apple)}
				>
					<Ionicons
						name="md-logo-apple"
						size={24}
						style={defaultStyles.bntIcon}
					/>
					<Text style={styles.btnOutlineText}>Continue with Apple</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Google)}
				>
					<Ionicons
						name="md-logo-google"
						size={24}
						style={defaultStyles.bntIcon}
					/>
					<Text style={styles.btnOutlineText}>Continue with Google</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Facebook)}
				>
					<Ionicons
						name="md-logo-facebook"
						size={24}
						style={defaultStyles.bntIcon}
					/>
					<Text style={styles.btnOutlineText}>Continue with Facebook</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 26,
	},
	separatorView: {
		marginVertical: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	separator: {
		marginHorizontal: 10,
		color: Colors.grey,
		fontSize: 17,
		fontFamily: "mon-sb",
	},
	btnOutline: {
		height: 54,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: Colors.grey,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	btnOutlineText: {
		color: "#000",
		fontSize: 16,
		fontFamily: "mon-sb",
	},
});

export default Page;
