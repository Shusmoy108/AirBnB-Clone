import { useMemo, useReducer, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

// COMPONENTS
import Listings from "@/components/Listings";

// INTERFACES
import { Listing } from "@/interfaces/listing";

// CONSTANTS
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	listings: Listing[];
	category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["10%", "100%"], []);
	const [refresh, setRefresh] = useState<number>(0);

	const showMap = () => {
		bottomSheetRef.current?.collapse();
		setRefresh(refresh + 1);
	};

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={1}
			snapPoints={snapPoints}
			enablePanDownToClose={false}
			handleIndicatorStyle={{ backgroundColor: Colors.grey }}
			style={styles.sheetContainer}
		>
			<View style={{ flex: 1 }}>
				<Listings listings={listings} category={category} refresh={refresh} />

				<View style={styles.absoluteBtn}>
					<TouchableOpacity onPress={showMap} style={styles.btn}>
						<Text
							style={{
								color: "#fff",
								fontFamily: "mon-sb",
								textDecorationLine: "underline",
							}}
						>
							Map
						</Text>

						<Ionicons name="map" size={20} color={"#fff"} />
					</TouchableOpacity>
				</View>
			</View>
		</BottomSheet>
	);
};

export default ListingsBottomSheet;

const styles = StyleSheet.create({
	sheetContainer: {
		backgroundColor: "#fff",
		borderRadius: 10,
		elevation: 4,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowRadius: 4,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	absoluteBtn: {
		width: "100%",
		alignItems: "center",
		position: "absolute",
		bottom: 25,
	},
	btn: {
		height: 50,
		paddingHorizontal: 16,
		flexDirection: "row",
		backgroundColor: Colors.dark,
		alignItems: "center",
		borderRadius: 30,
		gap: 8,
	},
});
