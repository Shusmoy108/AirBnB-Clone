import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// CONSTANTS
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
	const [active, setActive] = useState(0);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => setActive(0)}>
				<Text style={[styles.btnText, active === 0 && styles.btnTextActive]}>
					Stays
				</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => setActive(1)}>
				<Text style={[styles.btnText, active === 1 && styles.btnTextActive]}>
					Experiences
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ModalHeaderText;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 15,
	},
	btnText: {
		color: Colors.grey,
		fontSize: 20,
		fontFamily: "mon-sb",
	},
	btnTextActive: {
		color: "#000",
		textDecorationLine: "underline",
	},
});
