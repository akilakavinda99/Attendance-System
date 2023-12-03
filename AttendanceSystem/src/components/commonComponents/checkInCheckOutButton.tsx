import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import {FIREBASE_CONSTANTS} from '../../firebase/firebaseConstants';

const CheckInCheckOutButton = () => {
  const checkIn = () => {
    firestore()
      .collection('Users')
      .doc(FIREBASE_CONSTANTS.USER_ID)
      .set({
        name: 'John Doe',
        isCheckedIn: false,
        attendances: [
          {
            date: new Date(),
            attendanceList: [
              {
                checkIn: new Date(),
                checkOut: null,
              },
            ],
          },
        ],
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={checkIn}>
      <Text style={styles.buttonText}>Check In</Text>
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
