import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";

export default function EditScreenInfo() {
	return (
		<View>
			<View style={styles.getStartedContainer}>
				<View>
					<Text style={styles.getStartedText}>
						Welcome to my React Native Starting template!
					</Text>
					<Text style={styles.subText}>
						First off, configure Navigation Options in{" "}
					</Text>
					<View style={styles.codeHighlightContainer}>
						<Text style={styles.homeScreenFilename}>
							./navigation/BottomTabNavigator.tsx
						</Text>
					</View>
					<Text style={styles.getStartedText}>&&</Text>
					<View style={styles.codeHighlightContainer}>
						<Text style={styles.homeScreenFilename}>
							./navigation/index.tsx
						</Text>
					</View>
					<Text style={styles.subText}>
						Both files have comments to official React Navigation
						docs
					</Text>
					<Text style={styles.subText}>
						The "My Components" tab has examples for some custom
						components living in this directory, Feel free to check
						them out, or if you want to start from scratch you can
						delete
					</Text>
					<View style={styles.codeHighlightContainer}>
						<Text style={styles.homeScreenFilename}>
							./components/myComponents
						</Text>
					</View>
					<Text style={styles.subText}>
						Ready to start? This file lives in
					</Text>
					<View style={styles.codeHighlightContainer}>
						<Text style={styles.homeScreenFilename}>
							./screens/Home.tsx
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		"https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet",
	);
}

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
		textAlign: "center",
		fontSize: 16,
	},
	codeHighlightContainer: {
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: "#bbb",
		marginVertical: 10,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
		marginVertical: 3,
	},
	subText: {
		textAlign: "center",
		fontSize: 14,
		marginVertical: 5,
	},
});
