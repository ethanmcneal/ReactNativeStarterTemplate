import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CenterView from '../CenterView'
import SimpleSquareCard from '../SimpleSquareCard'

const SquareCardInfo = () => {
    return(
        <CenterView>
        <SimpleSquareCard color='blue' textColor='white' onPress={() => {}}>
            Square Card
        </SimpleSquareCard>
        <View style={styles.textContainer}>
        <Text style={styles.text}>Required Props:</Text>
        <Text>Color: Sets card color</Text>
        <Text>textColor: sets text color</Text>
        <Text>onPress: determines what card will do onPress</Text>
        </View>
        <Text style={styles.text}>props.children should be a text component, by default it is aligned and justified at flex end.</Text>

        <View style={styles.textContainer}>
        <Text style={styles.text}>
            Optional Props:
            </Text>
            <Text>style: overwrites default styles</Text>
        </View>
        </CenterView>

    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 10,
        paddingHorizontal: 15,
    }
})

export default SquareCardInfo