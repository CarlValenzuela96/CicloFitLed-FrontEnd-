import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Estacion from '../screens/EstacionTab/Estacion';
import Register from '../screens/Login/Register';
import AppDrawerNavigator from '../navigation/AppDrawerNavigator';
import { fromLeft, fromRight } from 'react-navigation-transitions';

import Header from "../components/Header";

const AppStackNavigator = createStackNavigator({
    Dashboard: {
        screen: AppDrawerNavigator,
        navigationOptions: {
            header: null
        }
    },
    Sesion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    AddSesion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    EditSesion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    DeleteSesion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    Estacion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    }, 
    AddEstacion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    EditEstacion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    DeleteEstacion: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    Ejercicio: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    AddEjercicio: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    EditEjercicio: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
    DeleteEjercicio: {
        screen: Estacion,
        navigationOptions: ({ navigation }) => ({
            header: <Header back title="Estacion" navigation={navigation} />
        })
    },
}, {
    transitionConfig: () => Platform.OS === 'android' ? fromRight(150) : null,

});

export default AppStackNavigator;