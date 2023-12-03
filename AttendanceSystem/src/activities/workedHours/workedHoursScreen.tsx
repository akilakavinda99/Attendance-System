import {View, Text} from 'react-native';
import React from 'react';
import {workkedHoursStyles} from './styles';
import DetailsCard from '../../components/screenBasedComponents/workedHoursScreenComp/detailsCard';
import {getTimeOfDay} from '../../utils/getTimeOfDay';

const WorkedHoursScreen = () => {
  return (
    <View style={workkedHoursStyles.container}>
      <Text
        style={
          workkedHoursStyles.greetingText
        }>{`Good ${getTimeOfDay()} John`}</Text>
      <View style={workkedHoursStyles.detailCardWrapper}>
        <DetailsCard />
      </View>
    </View>
  );
};

export default WorkedHoursScreen;
