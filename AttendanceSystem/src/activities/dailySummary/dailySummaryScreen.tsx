import {Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {dailySummaryStyles} from './styles';
import {useSelector} from 'react-redux';
import {getTodaysAttendance} from '../../utils/getTodaysAttendance';
import {formatTime} from '../../utils/formatTIme';

const DailySummaryScreen = () => {
  const attendances = useSelector(state => state.userDataReducer.attendances);

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const todayAttendance = getTodaysAttendance(attendances);
    setListData(todayAttendance);
  }, [attendances]);
  return (
    <View style={dailySummaryStyles.container}>
      <FlatList
        data={listData}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#DADADA',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                Check-In
              </Text>
              <Text>Check - Out</Text>
            </View>
          </>
        )}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text>{formatTime(item.checkIn)}</Text>
              <Text>
                {item.checkOut == null ? 'Now' : formatTime(item.checkOut)}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#000000',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DailySummaryScreen;
