import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../theme/theme';
import {scale} from 'react-native-size-matters';
const CurrentText = () => {
  return <Text style={styles.text}>You are currently checked out</Text>;
};

export default CurrentText;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(theme.fontSizes.medium),
    marginBottom: scale(20),
  },
});
