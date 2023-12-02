import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const checkInCheckOutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: theme.colors.black,
  },
});
