import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../theme/theme';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Check - In</Text>
      <Text style={styles.textStyles}>Check - Out</Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#DADADA',
    justifyContent: 'space-between',
    padding: 10,
  },

  textStyles: {
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
