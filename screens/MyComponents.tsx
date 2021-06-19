import React from "react";
import { StyleSheet, Text, View } from "react-native";


const MyComponents = () => {
    return(
        <View style={styles.header}>
            <Text>My Component Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default MyComponents