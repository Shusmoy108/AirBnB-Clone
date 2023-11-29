import { StyleSheet } from "react-native";

// CONSTANTS
import Colors from "@/constants/Colors";

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FDFFFF",
	},
	inputField: {
		height: 54,
		padding: 10,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ABABAB",
		borderRadius: 8,
		fontSize: 18,
	},
	btn: {
		height: 54,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary,
		borderRadius: 8,
	},
	btnText: {
		color: "#fff",
		fontSize: 16,
		fontFamily: "mon-b",
	},
	bntIcon: {
		position: "absolute",
		left: 16,
	},
	fotter: {
		height: 100,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "#fff",
		borderTopColor: Colors.grey,
		borderTopWidth: StyleSheet.hairlineWidth,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
});
