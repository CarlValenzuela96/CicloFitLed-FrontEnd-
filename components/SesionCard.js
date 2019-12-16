import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import paleta from '../constants/Theme';
import { Block, Text, theme } from 'galio-framework';
import Icon from './Icon';
import { argonTheme } from '../constants';


class SesionCard extends React.Component {
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
                    <Block flex space="between" style={styles.cardDescription}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text size={20} style={{ fontWeight: 'bold', marginVertical: 10 }}>Nombre estación</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.iconstyle} >
                                <Icon
                                    family="MaterialIcons"
                                    size={20}
                                    name="person"
                                    color={paleta.COLORS.ORANGE}
                                />
                            </View>
                            <View style={styles.iconstyle} >
                                <Icon
                                    name="timer"
                                    family="MaterialIcons"
                                    size={20}
                                    color={paleta.COLORS.ORANGE}
                                />
                            </View>
                            <View style={styles.iconstyle} >
                                <Icon
                                    name="cached"
                                    family="MaterialIcons"
                                    size={20}
                                    color={paleta.COLORS.ORANGE}
                                />
                            </View>
                            <View style={styles.iconstyle} >
                                <Icon
                                    name="pause-circle-outline"
                                    family="MaterialIcons"
                                    size={20}
                                    color={paleta.COLORS.ORANGE}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.texticonstyle}>
                                <Text size={12}>2</Text>
                            </View>
                            <View style={styles.texticonstyle}>
                                <Text size={12}>20 Min</Text>
                            </View>
                            <View style={styles.texticonstyle} >
                                <Text size={12}>3</Text>
                            </View>
                            <View style={styles.texticonstyle} >
                                <Text size={12}>20 seg</Text>
                            </View>
                        </View>

                    </Block>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                    <Block flex style={imgContainer}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <View  >
                                <Icon
                                    name="play-circle-outline"
                                    family="MaterialIcons"
                                    size={80}
                                    color='black'
                                />
                            </View>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.texticonstyle}>
                                <Text>00:00</Text>
                            </View>

                        </View>
                    </Block>
                </TouchableWithoutFeedback>
            </Block>
        );
    }
}

SesionCard.propTypes = {
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
        minHeight: 140,
        // marginBottom: 16,
    },
    cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6,
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 2,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        minWidth: '30%'
    },
    imageContainer: {
        // borderRadius: 6,
        // elevation: 1,
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
});

export default withNavigation(SesionCard);