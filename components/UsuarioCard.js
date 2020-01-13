import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import paleta from '../constants/Theme';
import { Block, Text, theme } from 'galio-framework';
import Icon from './Icon';
import { Images, argonTheme } from "../constants";


class UsuarioCard extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

        const imageStyles = [
            full ? styles.fullImage : styles.horizontalImage,
            imageStyle
        ];
        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
        horizontal ? styles.horizontalStyles : styles.verticalStyles
            // ,styles.shadow
        ];

        return (
            <Block row={horizontal} card flex style={cardContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                    <Block flex style={imgContainer, { alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={{ uri: Images.ProfilePicture }}
                            style={styles.avatar}
                        />
                    </Block>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                    <Block flex space="between" style={styles.cardDescription}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text size={20} style={{ fontWeight: 'bold', paddingTop: 30 }}>María Perez</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ color: paleta.COLORS.ORANGE,  paddingBottom: 20 }}>11.111.111-1</Text>
                        </View>
                    </Block>
                </TouchableWithoutFeedback>

            </Block>
        );
    }
}

UsuarioCard.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    iconstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 20,
        paddingTop: 20
    },
    texticonstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 20,
    },
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: 5,
        borderWidth: 0,
        minHeight: 125,
        // marginBottom: 16,
    },
    cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6,
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 2,
        fontWeight: 'bold',
    },
    imageContainer: {
        overflow: 'hidden',
    },
    image: {
        // borderRadius: 3,
    },
    horizontalImage: {
        height: 122,
        width: 'auto',
    },
    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    fullImage: {
        height: 215
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 62,
        borderWidth: 0
    },
});

export default withNavigation(UsuarioCard);