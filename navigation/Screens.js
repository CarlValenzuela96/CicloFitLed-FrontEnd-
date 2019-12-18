import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Login from "../screens/Login"
import Sesiones from "../screens/Sesiones";
import Estaciones from "../screens/Estaciones";
import Ejercicios from "../screens/Ejercicios";
import Usuarios from "../screens/Usuarios"

// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Elements,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
}, {
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ArticlesStack = createStackNavigator({
  Articles: {
    screen: Articles,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Articles" navigation={navigation} />
    })
  }
}, {
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const PerfilStack = createStackNavigator(
  {
    Perfil: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Perfil" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

//ciclo fit
const SesionesStack = createStackNavigator(
  {
    Sesiones: {
      screen: Sesiones,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Sesiones" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const EstacionesStack = createStackNavigator(
  {
    Estaciones: {
      screen: Estaciones,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Estaciones" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const EjerciciosStack = createStackNavigator(
  {
    Ejercicios: {
      screen: Ejercicios,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Ejercicios" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const UsuariosStack = createStackNavigator(
  {
    Usuarios: {
      screen: Usuarios,
      navigationOptions: ({ navigation }) => ({
        header: <Header search title="Usuarios" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);


// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    // Onboarding: {
    //   screen: Onboarding,
    //   navigationOptions: {
    //     drawerLabel: () => { }
    //   }
    // },
    Sesiones: {
      screen: SesionesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Sesiones" title="Sesiones" />
        )
      })
    },
    Estaciones: {
      screen: EstacionesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Estaciones" title="Estaciones" />
        )
      })
    },
    Ejercicios: {
      screen: EjerciciosStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Ejercicios" title="Ejercicios" />
        )
      })
    },
    Usuarios: {
      screen: UsuariosStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Usuarios" title="Usuarios" />
        )
      })
    },
    Perfil: {
      screen: PerfilStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Perfil" />
        )
      })
    },
    Logout: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Logout" />
        )
      })
    },
    Account: {
      screen: Register,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Register" />
        )
      })
    },
    Elements: {
      screen: ElementsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Elements" title="Elements" />
        )
      })
    },
    Articles: {
      screen: ArticlesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Articles" title="Articles" />
        )
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
