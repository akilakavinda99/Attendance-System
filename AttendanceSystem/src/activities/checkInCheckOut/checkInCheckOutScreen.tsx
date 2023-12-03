import {Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {checkInCheckOutStyles} from './styles';
import CheckInCheckOutButton from '../../components/commonComponents/checkInCheckOutButton';
import CurrentText from '../../components/screenBasedComponents/checkInCheckOutScreenComp/currentText';
import AnimationRenderer from '../../components/screenBasedComponents/checkInCheckOutScreenComp/animationRenderer';

const CheckInCheckOutScreen = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  if (isCheckedIn) {
    return <ActivityIndicator />;
  }
  return (
    <View style={checkInCheckOutStyles.container}>
      <Text style={checkInCheckOutStyles.title}>Hi, John Doe</Text>
      <AnimationRenderer isCheckedIn={true} />
      <View style={checkInCheckOutStyles.secondaryView}>
        <CurrentText />
        <CheckInCheckOutButton />
      </View>
    </View>
  );
};

export default CheckInCheckOutScreen;
