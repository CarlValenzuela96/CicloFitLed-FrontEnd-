import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    View
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");


class Estacion extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Block flex>
                <StatusBar show />
                <ImageBackground source={Images.RegisterBackground} style={{ width, height, zIndex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Block middle style={styles.registerContainer}>
                        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <Block middle >
                                <Image source={Images.Logo} />
                            </Block>
                            <Block middle >
                                <Block>
                                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                        <Input borderless placeholder="Rut"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={argonTheme.COLORS.ICON}
                                                    name="md-person"
                                                    family="Ionicon"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                        />
                                    </Block>
                                    <Block width={width * 0.8}>
                                        <Input
                                            password
                                            borderless
                                            placeholder="Contraseñaaaaa"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={argonTheme.COLORS.ICON}
                                                    name="padlock-unlocked"
                                                    family="ArgonExtra"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                        />

                                    </Block>
                                    <Block middle>
                                        <Button
                                            style={styles.createButton}
                                            onPress={() => navigation.goBack()}>
                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>Iniciar Sesión</Text>
                                        </Button>
                                    </Block>

                                </Block>
                            </Block>
                            <Block middle>
                                {/* boton github */}
                                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                                    <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                                        <Block row>
                                            <Icon
                                                name="logo-facebook"
                                                family="Ionicon"
                                                size={14}
                                                color={"black"}
                                                style={{ marginTop: 2, marginRight: 5 }}
                                            />
                                            <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                                        </Block>
                                    </Button>
                                    {/* boton google */}
                                    <Button style={styles.socialButtons}>
                                        <Block row>
                                            <Icon
                                                name="logo-google"
                                                family="Ionicon"
                                                size={14}
                                                color={"black"}
                                                style={{ marginTop: 2, marginRight: 5 }}
                                            />
                                            <Text style={styles.socialTextButtons}>GOOGLE</Text>
                                        </Block>
                                    </Button>
                                </Block>
                            </Block>
                            <Block middle style={{ marginTop: 20 }}>
                                <Text onPress={() => navigation.navigate("Register")}>Registrate aquí!</Text>
                            </Block>
                        </KeyboardAvoidingView>
                    </Block>
                </ImageBackground>

            </Block>
        );
    }
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.78,
        backgroundColor: "#F4F5F7",
        // backgroundColor: "red",
        borderRadius: 4,
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: argonTheme.COLORS.ORANGE,
        fontWeight: "800",
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 30
    },
    createButton: {
        backgroundColor: argonTheme.COLORS.ORANGE,
        width: width * 0.5,
        marginTop: 25
    }
});

export default Estacion;
