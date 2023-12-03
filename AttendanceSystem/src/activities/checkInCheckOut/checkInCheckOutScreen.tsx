import {Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {checkInCheckOutStyles} from './styles';
import CheckInCheckOutButton from '../../components/commonComponents/checkInCheckOutButton';
import CurrentText from '../../components/screenBasedComponents/checkInCheckOutScreenComp/currentText';
import AnimationRenderer from '../../components/screenBasedComponents/checkInCheckOutScreenComp/animationRenderer';
import {connect, useDispatch, useSelector} from 'react-redux';
import {userCheckIn, userCheckOut} from '../../firebase/firebaseOperations';
import {FIREBASE_CONSTANTS} from '../../firebase/firebaseConstants';
import {checkInHandler} from '../../utils/checkInHandler';
import {checkOutHandler} from '../../utils/checkOutHandler';

const CheckInCheckOutScreen = () => {
  // const [isCheckedIn, setIsCheckedIn] = useState(false);
  const isExtended = useSelector(state => state.userDataReducer.isCheckedIn);
  console.log(isExtended);

  return (
    <View style={checkInCheckOutStyles.container}>
      <Text style={checkInCheckOutStyles.title}>Hi, John Doe</Text>
      <AnimationRenderer isCheckedIn={isExtended} />
      <View style={checkInCheckOutStyles.secondaryView}>
        <CurrentText isCheckedIn={isExtended} />
        <CheckInCheckOutButton
          isCheckedIn={isExtended}
          checkInFunction={() => checkInHandler()}
          checkOutFunction={() => checkOutHandler()}
        />
      </View>
    </View>
  );
};

export default CheckInCheckOutScreen;
