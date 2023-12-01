import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckInCheckOutScreen from '../../activities/checkInCheckOut/checkInCheckOutScreen';
import {SCREEN_NAMES} from '../../constants/navigationConstants/screenNames';

const CheckInCheckOutNav = createNativeStackNavigator();

export const CheckInCheckOutStack = () => {
  return (
    <CheckInCheckOutNav.Navigator>
      <CheckInCheckOutNav.Screen
        name={SCREEN_NAMES.CHECK_IN_CHECK_OUT_SCREEN}
        component={CheckInCheckOutScreen}
      />
    </CheckInCheckOutNav.Navigator>
  );
};
