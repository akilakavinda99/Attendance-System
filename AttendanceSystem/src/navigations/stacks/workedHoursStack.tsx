import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../../constants/navigationConstants/screenNames';
import WorkedHoursScreen from '../../activities/workedHours/workedHoursScreen';

const WorkedHoursNav = createNativeStackNavigator();

export const WorkedHoursStack = () => {
  return (
    <WorkedHoursNav.Navigator>
      <WorkedHoursNav.Screen
        name={SCREEN_NAMES.WORKED_HOURS_SCREEN}
        component={WorkedHoursScreen}
      />
    </WorkedHoursNav.Navigator>
  );
};
