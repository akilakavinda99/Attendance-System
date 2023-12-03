import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {formatTime} from '../../../utils/formatTIme';

interface Props {
  item: any;
}

const ListItem = ({item}: Props) => {
  return (
    <View>
      <View style={styles.rowView}>
        <Text>{formatTime(item.checkIn)}</Text>
        <Text>{item.checkOut == null ? 'Now' : formatTime(item.checkOut)}</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#000000',
        }}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
