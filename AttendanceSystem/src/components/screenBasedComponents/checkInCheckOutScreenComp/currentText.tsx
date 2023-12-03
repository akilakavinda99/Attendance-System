import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../../../theme/theme';
import {scale} from 'react-native-size-matters';
import {isCheckedInType} from '../../../types/commonTypes';
const CurrentText = ({isCheckedIn}: isCheckedInType) => {
  return (
    <>
      <Text style={styles.text}>
        {isCheckedIn
          ? 'You are currently checked in'
          : 'You are currently checked out'}
      </Text>
    </>
  );
};

export default CurrentText;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(theme.fontSizes.medium),
    marginBottom: scale(20),
  },
});
