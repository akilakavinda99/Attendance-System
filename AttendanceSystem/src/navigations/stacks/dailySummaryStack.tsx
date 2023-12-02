import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DailySummaryScreen from '../../activities/dailySummary/dailySummaryScreen';
import {SCREEN_NAMES} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfigs';

const DailySummaryNav = createNativeStackNavigator();

export const DailySummaryStack = () => {
  return (
    <DailySummaryNav.Navigator>
      <DailySummaryNav.Screen
        name={SCREEN_NAMES.DAILY_SUMMARY_SCREEN}
        component={DailySummaryScreen}
        options={navConfig}
      />
    </DailySummaryNav.Navigator>
  );
};
