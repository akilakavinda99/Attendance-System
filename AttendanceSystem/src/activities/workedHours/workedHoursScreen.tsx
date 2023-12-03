import {Text, View} from 'react-native';
import React from 'react';
import {workkedHoursStyles} from './styles';
import DetailsCard from '../../components/screenBasedComponents/workedHoursScreenComp/detailsCard';

const WorkedHoursScreen = () => {
  return (
    <View style={workkedHoursStyles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <DetailsCard />
      </View>
    </View>
  );
};

export default WorkedHoursScreen;
