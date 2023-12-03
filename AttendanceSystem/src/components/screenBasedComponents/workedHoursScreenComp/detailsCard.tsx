import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {theme} from '../../../theme/theme';
import CheckInCheckOutButton from '../../commonComponents/checkInCheckOutButton';
import {DaySvg} from '../../../assets/svgs';
const DetailsCard = () => {
  return (
    <LinearGradient
      colors={theme.gradientColors.dayGradient}
      style={styles.gradientStyle}>
      <Text style={styles.checkedStatusText}>Checked - In</Text>
      <DaySvg />
      <View style={styles.rowView}>
        <Text style={styles.hoursText}>01 :</Text>
        <Text style={styles.minutesText}> 00</Text>
        <Text style={styles.hrsText}> Hrs</Text>
      </View>
      <CheckInCheckOutButton />
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
