import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';
import AppStackNavigator from './AppStackNavigator';


const AppSwitchNavigator = createSwitchNavigator({
    AuthStack: {
        screen: AuthStackNavigator,
    },
    App: {
        screen: AppStackNavigator,
    },
}, {
    initialRouteName: 'AuthStack'
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default AppContainer