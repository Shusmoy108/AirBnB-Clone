import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Animated, {
	FadeIn,
	FadeOut,
	SlideInDown,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
// @ts-ignore
import DatePicker from "react-native-modern-datepicker";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

// DATA
import { places, guestsGroups } from "@/assets/data/booking-data";

const AnimatedTouchableOpacity =
	Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
	const router = useRouter();
	const [openCard, setOpenCard] = useState(0);
	const [selectedPlace, setSelectedPlace] = useState(0);
	const [groups, setGroups] = useState(guestsGroups);
	const today = new Date().toISOString().substring(0, 10);

	const onClearAll = () => {
		setSelectedPlace(0);
		setOpenCard(0);
		setGroups(() => guestsGroups);
	};

	return (
		<BlurView intensity={80} style={styles.container} tint="light">
			<ScrollView
				style={{ width: "100%", maxWidth: 450 }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				{/* Where */}
				<View style={styles.card}>
					{openCard != 0 ? (
						<AnimatedTouchableOpacity
							style={styles.cardPreview}
							onPress={() => setOpenCard(0)}
							entering={FadeIn.duration(200)}
							exiting={FadeOut.duration(200)}
						>
							<Text style={styles.previewText}>Where</Text>
							<Text style={styles.previewDate}>I'm flexible</Text>
						</AnimatedTouchableOpacity>
					) : (
						<>
							<Animated.Text
								style={styles.cardHeader}
								entering={FadeIn.delay(100)}
							>
								Where to?
							</Animated.Text>

							<Animated.View
								style={styles.cardBody}
								entering={FadeIn.delay(100)}
							>
								<View style={styles.searchSection}>
									<Ionicons
										name="ios-search"
										style={styles.searchIcon}
										size={20}
										color={"#000"}
									/>

									<TextInput
										style={styles.inputField}
										placeholder="Search destination"
										placeholderTextColor={Colors.grey}
									/>
								</View>

								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{ gap: 25, paddingLeft: 20 }}
								>
									{places.map((item, index) => (
										<TouchableOpacity
											key={index}
											onPress={() => setSelectedPlace(index)}
										>
											<Image
												source={item.img}
												style={
													selectedPlace === index
														? styles.placeSelected
														: styles.place
												}
											/>

											<Text
												style={{
													paddingTop: 6,
													fontFamily:
														selectedPlace === index ? "mon-sb" : "mon",
												}}
											>
												{item.title}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							</Animated.View>
						</>
					)}
				</View>

				{/* When */}
				<View style={styles.card}>
					{openCard != 1 ? (
						<AnimatedTouchableOpacity
							style={styles.cardPreview}
							onPress={() => setOpenCard(1)}
							entering={FadeIn.duration(200)}
							exiting={FadeOut.duration(200)}
						>
							<Text style={styles.previewText}>When</Text>
							<Text style={styles.previewDate}>Any week</Text>
						</AnimatedTouchableOpacity>
					) : (
						<>
							<Animated.Text
								style={styles.cardHeader}
								entering={FadeIn.delay(100)}
							>
								When's your trip?
							</Animated.Text>

							<Animated.View
								style={styles.cardBody}
								entering={FadeIn.delay(100)}
							>
								<DatePicker
									options={{
										defaultFont: "mon",
										headerFont: "mon-sb",
										borderColor: "transparent",
										mainColor: Colors.primary,
									}}
									current={today}
									selected={today}
									mode={"calendar"}
								/>
							</Animated.View>
						</>
					)}
				</View>

				{/* Who */}
				<View style={styles.card}>
					{openCard != 2 ? (
						<AnimatedTouchableOpacity
							style={styles.cardPreview}
							onPress={() => setOpenCard(2)}
							entering={FadeIn.duration(200)}
							exiting={FadeOut.duration(200)}
						>
							<Text style={styles.previewText}>Who</Text>
							<Text style={styles.previewDate}>Add guests</Text>
						</AnimatedTouchableOpacity>
					) : (
						<>
							<Animated.Text
								style={styles.cardHeader}
								entering={FadeIn.delay(100)}
							>
								Who's coming?
							</Animated.Text>

							<Animated.View
								style={[styles.cardBody, { paddingHorizontal: 20 }]}
								entering={FadeIn.delay(100)}
							>
								{groups.map((item, index) => (
									<View
										key={index}
										style={[
											styles.guestItem,
											index + 1 < groups.length && styles.guestItemBorder,
										]}
									>
										<View>
											<Text style={{ fontSize: 14, fontFamily: "mon-sb" }}>
												{item.name}
											</Text>

											<Text
												style={{
													fontSize: 14,
													fontFamily: "mon",
													color: Colors.grey,
												}}
											>
												{item.text}
											</Text>
										</View>

										<View
											style={{
												flexDirection: "row",
												gap: 10,
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<TouchableOpacity
												onPress={() => {
													const newGroups = [...groups];
													const prevCount = newGroups[index].count;
													newGroups[index].count =
														prevCount > 0 ? prevCount - 1 : 0;
													if (prevCount > 0)
														Haptics.impactAsync(
															Haptics.ImpactFeedbackStyle.Light
														);
													setGroups(newGroups);
												}}
											>
												<Ionicons
													name="remove-circle-outline"
													size={26}
													color={
														groups[index].count > 0 ? Colors.grey : "#dedede"
													}
												/>
											</TouchableOpacity>

											<Text
												style={{
													minWidth: 18,
													fontSize: 17,
													fontFamily: "mon",
													textAlign: "center",
												}}
											>
												{item.count}
											</Text>

											<TouchableOpacity
												onPress={() => {
													const newGroups = [...groups];
													newGroups[index].count++;
													setGroups(newGroups);
													Haptics.impactAsync(
														Haptics.ImpactFeedbackStyle.Light
													);
												}}
											>
												<Ionicons
													name="add-circle-outline"
													size={26}
													color={Colors.grey}
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</Animated.View>
						</>
					)}
				</View>
			</ScrollView>
			{/* Footer */}
			<Animated.View
				style={defaultStyles.footer}
				entering={SlideInDown.delay(200)}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<TouchableOpacity onPress={onClearAll}>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "mon-sb",
								textDecorationLine: "underline",
							}}
						>
							Clear all
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[defaultStyles.btn, { paddingLeft: 50, paddingRight: 20 }]}
						onPress={() => router.back()}
					>
						<Ionicons
							name="search-outline"
							size={24}
							color={"#fff"}
							style={defaultStyles.bntIcon}
						/>
						<Text style={defaultStyles.btnText}>Search</Text>
					</TouchableOpacity>
				</View>
			</Animated.View>
		</BlurView>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100,
		alignItems: "center",
	},
	card: {
		margin: 10,
		gap: 20,
		backgroundColor: "#fff",
		borderRadius: 14,
		elevation: 4,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowRadius: 4,
		shadowOffset: {
			width: 2,
			height: 2,
		},
	},
	cardHeader: {
		padding: 20,
		fontSize: 24,
		fontFamily: "mon-b",
	},
	cardBody: {
		paddingBottom: 20,
		alignItems: "center",
	},
	cardPreview: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchSection: {
		height: 50,
		marginHorizontal: 20,
		marginBottom: 25,
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#ababab",
		borderRadius: 8,
	},
	inputField: {
		flex: 1,
		padding: 10,
		backgroundColor: "#fff",
	},
	searchIcon: {
		padding: 10,
	},
	place: {
		width: 120,
		height: 120,
		borderRadius: 10,
	},
	placeSelected: {
		width: 120,
		height: 120,
		borderWidth: 2,
		borderColor: Colors.grey,
		borderRadius: 10,
	},
	guestItem: {
		width: "100%",
		paddingVertical: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	guestItemBorder: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.grey,
	},
	previewText: {
		color: Colors.grey,
		fontSize: 14,
		fontFamily: "mon-sb",
	},
	previewDate: {
		color: Colors.dark,
		fontSize: 14,
		fontFamily: "mon-sb",
	},
});
