import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import EjercicioCard from '../components/EjercicioCard'
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Ejercicios extends React.Component {
    renderArticles = () => {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
            <EjercicioCard item={articles[0]} horizontal></EjercicioCard>
            <EjercicioCard item={articles[1]} horizontal></EjercicioCard>
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
  
  export default Ejercicios;