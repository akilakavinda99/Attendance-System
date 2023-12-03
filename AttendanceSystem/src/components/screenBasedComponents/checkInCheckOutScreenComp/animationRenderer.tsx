import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {isCheckedInType} from '../../../types/commonTypes';

const AnimationRenderer = ({isCheckedIn}: isCheckedInType) => {
  return (
    <LottieView
      style={styles.lottieStyle}
      source={
        isCheckedIn
          ? require('../../../assets/animations/checkedInAnimation.json')
          : require('../../../assets/animations/checkedOutAnimation.json')
      }
      autoPlay
      loop
    />
    // </View>
  );
};

export default AnimationRenderer;

const styles = StyleSheet.create({
  lottieStyle: {
    flex: 0.8,
    //   backgroundColor: 'red',
    height: 100,
  },
});
