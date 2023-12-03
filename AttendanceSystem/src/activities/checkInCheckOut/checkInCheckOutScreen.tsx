import {Text, View} from 'react-native';
import React from 'react';
import {checkInCheckOutStyles} from './styles';
import CheckInCheckOutButton from '../../components/commonComponents/checkInCheckOutButton';
import CurrentText from '../../components/screenBasedComponents/checkInCheckOutScreenComp/currentText';
import AnimationRenderer from '../../components/screenBasedComponents/checkInCheckOutScreenComp/animationRenderer';
import {useSelector} from 'react-redux';
import {checkInHandler} from '../../utils/checkInHandler';
import {checkOutHandler} from '../../utils/checkOutHandler';

const CheckInCheckOutScreen = () => {
  const isCheckedIn = useSelector(state => state.userDataReducer.isCheckedIn);

  return (
    <View style={checkInCheckOutStyles.container}>
      <Text style={checkInCheckOutStyles.title}>Hi, John Doe</Text>
      <AnimationRenderer isCheckedIn={isCheckedIn} />
      <View style={checkInCheckOutStyles.secondaryView}>
        <CurrentText isCheckedIn={isCheckedIn} />
        <CheckInCheckOutButton
          isCheckedIn={isCheckedIn}
          checkInFunction={() => checkInHandler()}
          checkOutFunction={() => checkOutHandler()}
        />
      </View>
    </View>
  );
};

export default CheckInCheckOutScreen;
