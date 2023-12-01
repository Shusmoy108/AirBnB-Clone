import { useMemo, useState } from "react";
import { Platform, View } from "react-native";
import { Stack } from "expo-router";

// COMPONENTS
import ExploreHeader from "@/components/Explore-Header";
import Listings from "@/components/Listings";

// DATA
import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
	const [category, setCategory] = useState("Tiny homes");
	const items = useMemo(() => listingsData as any, []);

	const onDataChanged = (category: string) => {
		setCategory(category);
	};

	return (
		<View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 150 : 200 }}>
			<Stack.Screen
				options={{
					header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
				}}
			/>

			<Listings listings={items} category={category} />
		</View>
	);
};

export default Page;
