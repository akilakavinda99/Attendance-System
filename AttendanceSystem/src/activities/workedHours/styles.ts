import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {scale} from 'react-native-size-matters';

export const workkedHoursStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: scale(theme.fontSizes.large),
    fontWeight: 'bold',
    marginTop: scale(20),
    color: theme.colors.black,
  },
  secondaryView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
