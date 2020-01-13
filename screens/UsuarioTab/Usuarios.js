import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../../components';
import articles from '../../constants/articles';
import UsuarioCard from '../../components/UsuarioCard';
const { width } = Dimensions.get('screen');

class Usuarios extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
         
          <UsuarioCard item={articles[0]} horizontal></UsuarioCard>
          <UsuarioCard item={articles[0]} horizontal></UsuarioCard>
         
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Usuarios;