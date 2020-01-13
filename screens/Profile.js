import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  View
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { ProgressCircle } from "react-native-svg-charts";

import { CircularProgress } from 'react-native-svg-circular-progress'

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <ImageBackground
          source={Images.ProfileBackground}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            // showsVerticalScrollIndicator={false}
            style={{ width, marginTop: '25%' }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={{ uri: Images.ProfilePicture }}
                  style={styles.avatar}
                />
              </Block>

              <Block flex>
                {/* bloque del nombre */}
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    Jessica Jones
                    </Text>
                </Block>
                {/* bloque datos cuenta */}
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Edad</Text>
                      <Text size={12}>21</Text>
                    </Block>
                    <Block >
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >Rut</Text>
                      <Text size={12}>11.111.111-1</Text>
                    </Block>
                  </Block>
                </Block>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Fecha Nacimiento</Text>
                      <Text size={12}>12/05/1995</Text>
                    </Block>
                    <Block >
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >Teléfono</Text>
                      <Text size={12}>+56 9 84964147</Text>
                    </Block>
                  </Block>
                </Block>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Email</Text>
                      <Text size={12}>correo123@gmail.com</Text>
                    </Block>

                  </Block>
                </Block>

                {/* graficos de estadisticas */}
                <Block flex row space="between" middle style={{ marginVertical: 30 }}>

                  <Block middle style={{ marginStart: 30 }}>
                    <CircularProgress
                      percentage={40}
                      donutColor='red'
                    >
                      <View>
                        <Text>40%</Text>
                      </View>
                    </CircularProgress>
                    <Text>Estadistica 1</Text>
                  </Block>
                  <Block middle style={{ marginEnd: 30 }}>
                    <CircularProgress percentage={60}>
                      <View>
                        <Text>60%</Text>
                      </View>
                    </CircularProgress>
                    <Text>Estadistica 2</Text>
                  </Block>
                </Block>

                {/* bloque datos fisicos usuario */}
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Peso</Text>
                      <Text size={12}>80 Kg</Text>
                    </Block>
                    <Block >
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >Altura</Text>
                      <Text size={12}>1.89 Mts</Text>
                    </Block>
                  </Block>
                </Block>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Imc</Text>
                      <Text size={12}>30</Text>
                    </Block>
                    {/* <Block >
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >Altura</Text>
                      <Text size={12}>1.89 Mts</Text>
                    </Block> */}
                  </Block>
                </Block>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Enfermedades</Text>
                      <Text size={12}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </Block>

                  </Block>
                </Block>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block >
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >Lesiones</Text>
                      <Text size={12}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </Block>

                  </Block>
                </Block>

                {/* Historial atenciones */}
                <Block
                  row
                  style={{ paddingVertical: 14, alignItems: "baseline" }}
                >
                  <Text bold size={16} color="#525F7F">Historial Sesiones</Text>
                </Block>
              </Block>
            </Block>


          </ScrollView>
        </ImageBackground>
      </Block >
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    // padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    marginBottom: 65,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    marginTop: 15,
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
