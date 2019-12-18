import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import Screens from './Screens';

const AppSwitchNavigator = createSwitchNavigator({
    AuthStack: {
        screen: AuthStackNavigator,
    },
    App: {
        screen: Screens,
    },
}, {
    initialRouteName: 'AuthStack'
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default AppContainer