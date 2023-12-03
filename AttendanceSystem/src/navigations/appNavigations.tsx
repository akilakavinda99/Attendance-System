import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK_NAMES} from '../constants/navigationConstants/stackNames';
import {CheckInCheckOutStack} from './stacks/checkInCheckOutStack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DailySummaryStack} from './stacks/dailySummaryStack';
import {WorkedHoursStack} from './stacks/workedHoursStack';
import {navConfig} from './navigationConfigs';
import {CalenderSvg, ClockSvg, PersonSvg} from '../assets/svgs';

const Tab = createBottomTabNavigator();

export const AppNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={STACK_NAMES.CheckInCheckOutStack}
        component={CheckInCheckOutStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <PersonSvg focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={STACK_NAMES.WorkedHoursStack}
        component={WorkedHoursStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <ClockSvg focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={STACK_NAMES.DailySummaryStack}
        component={DailySummaryStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <CalenderSvg focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
