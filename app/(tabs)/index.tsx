import { useMemo, useState } from "react";
import { Platform, View } from "react-native";
import { Stack } from "expo-router";

// COMPONENTS
import ExploreHeader from "@/components/Explore-Header";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/Listings-Map";

// DATA
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsBottomSheet from "@/components/Listings-Bottom-Sheet";
// import listingsGeoData from "@/assets/data/airbnb-listings.geo.json";

const Page = () => {
	const [category, setCategory] = useState("Tiny homes");
	const items = useMemo(() => listingsData as any, []);

	const onDataChanged = (category: string) => {
		setCategory(category);
	};

	return (
		<View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 80 : 150 }}>
			<Stack.Screen
				options={{
					header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
				}}
			/>

			{/* <Listings listings={items} category={category} /> */}
			<ListingsMap listings={listingsData} />
			<ListingsBottomSheet listings={items} category={category} />
		</View>
	);
};

export default Page;
