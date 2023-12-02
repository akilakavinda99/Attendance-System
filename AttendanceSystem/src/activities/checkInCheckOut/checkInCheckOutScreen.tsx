import {Text, View} from 'react-native';
import {checkInCheckOutStyles} from './styles';
import LottieView from 'lottie-react-native';
import CheckInCheckOutButton from '../../components/commonComponents/checkInCheckOutButton';

const CheckInCheckOutScreen = () => {
  return (
    <View style={checkInCheckOutStyles.container}>
      <Text style={checkInCheckOutStyles.title}>Hi, John Doe</Text>
      <LottieView
        style={{
          flex: 0.5,

          height: 200,
        }}
        source={require('../../assets/animations/checkedInAnimation.json')}
        autoPlay
        loop
      />
      <CheckInCheckOutButton />
    </View>
  );
};

export default CheckInCheckOutScreen;
