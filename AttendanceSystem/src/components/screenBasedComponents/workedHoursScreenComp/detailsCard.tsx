import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {theme} from '../../../theme/theme';
import CheckInCheckOutButton from '../../commonComponents/checkInCheckOutButton';
import {DaySvg} from '../../../assets/svgs';
import {useSelector} from 'react-redux';
import {checkInHandler} from '../../../utils/checkInHandler';
import {checkOutHandler} from '../../../utils/checkOutHandler';
import {calculateTotalWorkedHours} from '../../../utils/calculateWorkedHours';

const DetailsCard = () => {
  const isCheckedIn = useSelector(state => state.userDataReducer.isCheckedIn);
  const isLoading = useSelector(state => state.userDataReducer.loading);
  const attendances = useSelector(state => state.userDataReducer.attendances);

  const [totalHours, setTotalHours] = useState('');
  const [remainingMinutes, setRemainingMinutes] = useState('');

  useEffect(() => {
    const {formattedHours, formattedMinutes} =
      calculateTotalWorkedHours(attendances);
    setTotalHours(formattedHours);
    setRemainingMinutes(formattedMinutes);
  }, [attendances]);

  return (
    <LinearGradient
      colors={theme.gradientColors.dayGradient}
      style={styles.gradientStyle}>
      <Text style={styles.checkedStatusText}>Checked - In</Text>
      <DaySvg />
      <View style={styles.rowView}>
        <Text style={styles.hoursText}>{totalHours} :</Text>
        <Text style={styles.minutesText}> {remainingMinutes}</Text>
        <Text style={styles.hrsText}> Hrs</Text>
      </View>
      <CheckInCheckOutButton
        isCheckedIn={isCheckedIn}
        isLoading={isLoading}
        checkInFunction={() => checkInHandler()}
        checkOutFunction={() => checkOutHandler()}
      />
    </LinearGradient>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  gradientStyle: {
    width: scale(310),
    height: scale(410),
    borderRadius: scale(30),
    alignItems: 'center',
  },
  checkedStatusText: {
    fontSize: scale(theme.fontSizes.large),
    fontWeight: 'bold',
    color: theme.colors.black,
    marginTop: scale(20),
  },
  rowView: {
    flexDirection: 'row',
    marginLeft: scale(20),
    alignItems: 'center',
  },
  hoursText: {
    fontSize: scale(50),
    fontWeight: '600',
    color: theme.colors.black,
  },
  minutesText: {
    fontSize: scale(50),
    fontWeight: '300',
    color: theme.colors.black,
  },
  hrsText: {
    fontSize: scale(18),
    fontWeight: '600',
    color: theme.colors.black,
    marginTop: scale(20),
  },
});
