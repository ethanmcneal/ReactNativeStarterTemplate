import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import MyComponents from "../screens/MyComponents";
import SquareCardInfo from "../components/myComponents/componentInfo/SquareCardInfo";
import CenterViewInfo from "../components/myComponents/componentInfo/CenterViewInfo";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'




const ComponentNavigator = createStackNavigator({
    MyComponents: MyComponents,
    SquareCard: SquareCardInfo,
    CenterView: CenterViewInfo
})

const HomeNavigator = createStackNavigator({
    Home: Home,
})

const MainNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Components: ComponentNavigator
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName :any;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (routeName === 'Components') {
          iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline'; 
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  })

export default createAppContainer(MainNavigator)