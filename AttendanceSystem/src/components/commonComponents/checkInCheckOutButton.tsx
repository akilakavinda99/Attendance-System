import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import {FIREBASE_CONSTANTS} from '../../firebase/firebaseConstants';
import {isCheckedInType} from '../../types/commonTypes';

const CheckInCheckOutButton = ({
  isCheckedIn,
  checkInFunction,
  checkOutFunction,
  isLoading,
}: isCheckedInType) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={styles.container}
      onPress={isCheckedIn ? checkOutFunction : checkInFunction}>
      <Text style={styles.buttonText}>
        {isCheckedIn ? 'Check Out' : 'Check In'}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckInCheckOutButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(20),
    height: scale(44),
    width: scale(100),
  },
  textStyles: {
    color: theme.colors.white,
    fontSize: scale(theme.fontSizes.medium),
    fontWeight: 'bold',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: scale(theme.fontSizes.medium),
    fontWeight: 'bold',
  },
});
