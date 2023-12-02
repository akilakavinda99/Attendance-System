import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';

const CheckInCheckOutButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>checkInCheckOutButton</Text>
    </TouchableOpacity>
  );
};

export default CheckInCheckOutButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 44,
  },
});
