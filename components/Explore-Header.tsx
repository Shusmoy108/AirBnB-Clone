import { useRef, useState } from "react";
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Haptics from "expo-haptics";

// CONSTANTS
import Colors from "@/constants/Colors";

const categories = [
	{
		name: "Tiny homes",
		icon: "home",
	},
	{
		name: "Cabins",
		icon: "house-siding",
	},
	{
		name: "Trending",
		icon: "local-fire-department",
	},
	{
		name: "Play",
		icon: "videogame-asset",
	},
	{
		name: "City",
		icon: "apartment",
	},
	{
		name: "Beachfront",
		icon: "beach-access",
	},
	{
		name: "Countryside",
		icon: "nature-people",
	},
];

interface Props {
	onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
	const scrollRef = useRef<ScrollView>(null);
	const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const selectCategory = (index: number) => {
		const selected = itemsRef.current[index];
		setActiveIndex(index);
		selected?.measure((x) => {
			scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
		});

		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		onCategoryChanged(categories[index].name);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.container}>
				<ActionRow>
					<Link href={"/(modals)/booking"} asChild>
						<SearchBtn style={styles.searchBtn}>
							<Ionicons name="search" size={24} style={{ marginRight: 10 }} />

							<View>
								<Text style={{ marginBottom: 1, fontFamily: "mon-sb" }}>
									Where to?
								</Text>
								<Text
									style={{
										color: Colors.grey,
										fontSize: 13,
										fontFamily: "mon",
									}}
								>
									Anywhere · Any week · Add guests
								</Text>
							</View>
						</SearchBtn>
					</Link>

					<TouchableOpacity style={styles.filterBtn}>
						<Ionicons name="options-outline" size={24} />
					</TouchableOpacity>
				</ActionRow>

				<ScrollView
					ref={scrollRef}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						alignItems: "center",
						gap: 25,
						paddingHorizontal: 16,
					}}
				>
					{categories.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => selectCategory(index)}
							ref={(element) => (itemsRef.current[index] = element)}
							style={
								activeIndex === index
									? styles.categoriesBtnActive
									: styles.categoriesBtn
							}
						>
							<MaterialIcons
								name={item.icon as any}
								size={24}
								style={{ color: activeIndex === index ? "#000" : Colors.grey }}
							/>

							<Text
								style={
									activeIndex === index
										? styles.categoryTextActive
										: styles.categoryText
								}
							>
								{item.name}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default ExploreHeader;

const styles = StyleSheet.create({
	container: {
		height: Platform.OS === "ios" ? 130 : 200,
		backgroundColor: "#fff",
	},
	actionRow: {
		marginTop: Platform.OS === "ios" ? 0 : 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 24,
		paddingBottom: 16,
		gap: 10,
	},
	searchBtn: {
		elevation: 2,
		shadowColor: "#000",
		shadowOpacity: 0.12,
		shadowRadius: 8,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	filterBtn: {
		padding: 7,
		borderWidth: 1,
		borderColor: "#c2c2c2",
		borderRadius: 24,
	},
	categoriesBtn: {
		flex: 1,
		paddingHorizontal: 5,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 8,
	},
	categoriesBtnActive: {
		flex: 1,
		paddingHorizontal: 5,
		paddingBottom: 8,
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#000",
		borderBottomWidth: 2,
	},
	categoryText: {
		fontSize: 14,
		fontFamily: "mon-sb",
		color: Colors.grey,
	},
	categoryTextActive: {
		fontSize: 14,
		fontFamily: "mon-sb",
		color: "#000",
	},
});

const ActionRow = styled.View`
	width: 100%;
	margin-top: ${() => (Platform.OS === "ios" ? 0 : 50)}px;
	margin-bottom: 20px;
	padding: 0 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const SearchBtn = styled.TouchableOpacity`
	width: 85%;
	padding: 14px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
	border: ${() => StyleSheet.hairlineWidth}px solid #c2c2c2;
	border-radius: 50px;
`;
