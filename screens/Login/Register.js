import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  render() {

    const { navigation } = this.props;

    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>

              <Block left style={styles.socialConnect}>

                <Block row style={{ marginVertical: theme.SIZES.BASE }}>
                  <Block row middle style={{ marginStart: 10 }}>
                    <Icon
                      size={25}
                      onPress={() => navigation.goBack()}
                      color={argonTheme.COLORS.WHITE}
                      name="arrow-back"
                      family="MaterialIcons"
                      style={styles.inputIcons}
                    />
                  </Block>
                  <Block row flex style={styles.titulo}>
                    <Text style={{ color: argonTheme.COLORS.WHITE }}>Únete a CicloFit!</Text>
                  </Block>
                </Block>
              </Block>
              <ScrollView style={{ flex: 1 }}>
                <Block flex>

                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      {/* Rut field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8, marginTop: 15 }}>
                        <Input
                          borderless
                          placeholder="Rut"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="create"
                              family="MaterialIcons"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      {/* Correo Field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                        <Input
                          borderless
                          placeholder="Email"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="ic_mail_24px"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>

                      {/* nombre  field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                        <Input
                          borderless
                          placeholder="Nombre"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="face"
                              family="MaterialIcons"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>

                      {/* apellido field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                        <Input
                          borderless
                          placeholder="Apellido"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="face"
                              family="MaterialIcons"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      {/* telefono field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                        <Input
                          borderless
                          placeholder="Teléfono"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="phone"
                              family="MaterialIcons"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      {/* contraseña field */}
                      <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                        <Input
                          password
                          borderless
                          placeholder="Contraseña"
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
                      {/* repetir contraseña field */}
                      <Block width={width * 0.8}>
                        <Input
                          password
                          borderless
                          placeholder="Repetir Contraseña"
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
                        <Button color="primary" style={styles.createButton}>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CREAR CUENTA
                        </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </ScrollView>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 35
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
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
    // backgroundColor: argonTheme.COLORS.WHITE,
    backgroundColor: argonTheme.COLORS.ORANGE,
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
    color: argonTheme.COLORS.PRIMARY,
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
    marginTop: 25,
    marginBottom: 15
  }
});

export default Register;
