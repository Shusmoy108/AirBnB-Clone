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
