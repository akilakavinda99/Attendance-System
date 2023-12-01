import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK_NAMES} from '../constants/navigationConstants/stackNames';
import {CheckInCheckOutStack} from './stacks/checkInCheckOutStack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DailySummaryStack} from './stacks/dailySummaryStack';
import {WorkedHoursStack} from './stacks/workedHoursStack';

const Tab = createBottomTabNavigator();

export const AppNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={STACK_NAMES.CheckInCheckOutStack}
        component={CheckInCheckOutStack}
      />
      <Tab.Screen
        name={STACK_NAMES.DailySummaryStack}
        component={DailySummaryStack}
      />
      <Tab.Screen
        name={STACK_NAMES.WorkedHoursStack}
        component={WorkedHoursStack}
      />
    </Tab.Navigator>
  );
};
