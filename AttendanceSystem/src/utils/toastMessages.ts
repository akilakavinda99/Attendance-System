import {ToastAndroid} from 'react-native';

export const errorToast = (message: string) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER);
};
