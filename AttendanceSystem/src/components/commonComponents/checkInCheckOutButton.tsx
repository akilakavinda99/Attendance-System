import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import {isCheckedInType} from '../../types/commonTypes';
import {useSelector} from 'react-redux';

const CheckInCheckOutButton = ({
  isCheckedIn,
  checkInFunction,
  checkOutFunction,
  isLoading,
}: isCheckedInType) => {
  const loading = useSelector(state => state.userDataReducer.loading);

  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.container}
      onPress={isCheckedIn ? checkOutFunction : checkInFunction}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <Text style={styles.buttonText}>
          {isCheckedIn ? 'Check Out' : 'Check In'}
        </Text>
      )}
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
