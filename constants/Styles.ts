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
	footer: {
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
	menuHeader: {
		color: Colors.dark,
		fontSize: 24,
		fontFamily: "mon-sb",
		marginBottom: 20,
	},
	menuItem: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.grey,
	},
	menuLeftContent: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 15,
	},
	menuLeftContentAlt: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 15,
	},
	menuTextGroup: {
		paddingTop: 5,
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 3,
	},
	menuText: {
		color: Colors.dark,
		fontSize: 17,
		fontFamily: "mon-sb",
	},
	menuSubText: {
		color: Colors.grey,
		fontSize: 14,
		fontFamily: "mon",
	},
});
