import React from 'react'
import { Text, View } from 'react-native'
import CenterView from '../CenterView'
import SimpleSquareCard from '../SimpleSquareCard'

const SquareCardInfo = () => {
    return(
        <CenterView>
        <SimpleSquareCard color='#8a5b53' textColor='white' onPress={() => {}}>
            Square Card
        </SimpleSquareCard>
        <Text>Square card</Text>
        <View>
        <Text>Required Props:</Text>
        <Text>Color: Sets card color</Text>
        <Text>textColor: sets text color</Text>
        <Text>onPress: determines what card will do onPress</Text>
        </View>
        </CenterView>

    )
}

export default SquareCardInfo