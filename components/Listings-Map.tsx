import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";

// CONSTANTS
import { defaultStyles } from "@/constants/Styles";

// INTERFACES
import { Listing } from "@/interfaces/listing";

interface Props {
	listings: any;
}

const INITIAL_REGIION = {
	latitude: 36.9741,
	longitude: -122.0308,
	latitudeDelta: 0.02,
	longitudeDelta: 0.02,
};

const ListingsMap = memo(({ listings }: Props) => {
	const router = useRouter();

	const onMarketSeleced = (item: Listing) => {
		router.push(`/listing/${item.id}`);
	};

	const renderCluster = (cluster: any) => {
		const { id, geometry, onPress, properties } = cluster;
		const points = properties.point_count;

		return (
			<Marker
				key={`cluster-${id}`}
				onPress={onPress}
				coordinate={{
					longitude: geometry.coordinates[0],
					latitude: geometry.coordinates[1],
				}}
			>
				<View style={[styles.marker, { paddingHorizontal: 10 }]}>
					<Text style={styles.markerText}>{points}</Text>
				</View>
			</Marker>
		);
	};

	return (
		<View style={defaultStyles.container}>
			<MapView
				style={StyleSheet.absoluteFill}
				provider={PROVIDER_GOOGLE}
				showsUserLocation
				showsMyLocationButton
				initialRegion={INITIAL_REGIION}
				animationEnabled={false}
				clusterColor="#fff"
				clusterTextColor="#000"
				clusterFontFamily="mon-sb"
				renderCluster={renderCluster}
			>
				{listings.map((item: Listing) => (
					<Marker
						key={item.id}
						coordinate={{
							latitude: item.geolocation.lat,
							longitude: item.geolocation.lon,
						}}
						onPress={() => onMarketSeleced(item)}
					>
						<View style={styles.marker}>
							<Text style={styles.markerText}>${item.price}</Text>
						</View>
					</Marker>
				))}
			</MapView>
		</View>
	);
});

export default ListingsMap;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	marker: {
		padding: 6,
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#fff",
		borderColor: "#aaa",
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 30,
		elevation: 5,
		shadowColor: "#000",
		shadowOpacity: 0.5,
		shadowRadius: 100,
		shadowOffset: {
			width: 3,
			height: 3,
		},
	},
	markerText: {
		textAlign: "center",
		color: "#000",
		fontSize: 14,
		fontFamily: "mon-sb",
	},
});
