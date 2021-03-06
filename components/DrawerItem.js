import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Sesiones":
        return (
          <Icon
            name="schedule"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Estaciones":
        return (
          <Icon
            name="toll"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.ERROR}
          />
        );
      case "Logout":
        return (
          <Icon
            name="toll"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.ERROR}
          />
        );
      case "Ejercicios":
        return (
          <Icon
            name="fitness-center"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
      case "Usuarios":
        return (
          <Icon
            name="directions-run"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Perfil":
        return (
          <Icon
            name="person"
            family="MaterialIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Getting Started":
        return <Icon />;
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ORANGE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
