import { useEffect, useRef, useState } from "react";
import {
	Image,
	ListRenderItem,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "expo-router";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import {
	BottomSheetFlatList,
	BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";

// INTERFACES
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	listings: any[];
	category: string;
	refresh: number;
}

const Listings = ({ listings: items, category, refresh }: Props) => {
	const [loading, setLoading] = useState(false);
	const listRef = useRef<BottomSheetFlatListMethods>(null);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, [category]);

	useEffect(() => {
		if (refresh) listRef.current?.scrollToOffset({ offset: 0, animated: true });
	}, [refresh]);

	const renderRow: ListRenderItem<Listing> = ({ item }) => (
		<Link href={`/listing/${item.id}`} asChild>
			<TouchableOpacity>
				<Animated.View
					style={styles.listing}
					entering={FadeInRight}
					exiting={FadeOutLeft}
				>
					<Image source={{ uri: item.thumbnail_url }} style={styles.image} />

					<TouchableOpacity
						style={{ position: "absolute", right: 30, top: 10 }}
					>
						<Ionicons name="ios-heart-outline" size={26} color="#000" />
					</TouchableOpacity>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 5,
						}}
					>
						<Text style={{ fontSize: 16, fontFamily: "mon-sb" }}>
							{item.name}
						</Text>

						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
						>
							<Ionicons name="star" size={14} />

							<Text style={{ fontFamily: "mon-sb" }}>
								{item.review_scores_rating / 20}
							</Text>
						</View>
					</View>

					<Text style={{ fontFamily: "mon", paddingHorizontal: 5 }}>
						{item.room_type}
					</Text>

					<View style={{ paddingHorizontal: 5, flexDirection: "row", gap: 4 }}>
						<Text style={{ fontFamily: "mon-sb" }}>${item.price}</Text>
						<Text style={{ fontFamily: "mon" }}>night</Text>
					</View>
				</Animated.View>
			</TouchableOpacity>
		</Link>
	);

	return (
		<View style={defaultStyles.container}>
			<BottomSheetFlatList
				ref={listRef}
				data={loading ? [] : items}
				renderItem={renderRow}
				keyExtractor={(item) => item.id.toString()}
				ListHeaderComponent={
					<Text style={styles.info}>{items.length} homes</Text>
				}
			/>
		</View>
	);
};

export default Listings;

const styles = StyleSheet.create({
	listing: {
		marginVertical: 20,
		paddingHorizontal: 22,
		gap: 5,
	},
	image: {
		width: "100%",
		height: 350,
		borderRadius: 10,
	},
	info: {
		marginTop: 4,
		textAlign: "center",
		fontSize: 18,
		fontFamily: "mon-sb",
	},
});
