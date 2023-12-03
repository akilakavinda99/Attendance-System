import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {dailySummaryStyles} from './styles';
import {useSelector} from 'react-redux';
import {getTodaysAttendance} from '../../utils/getTodaysAttendance';
import ListHeader from '../../components/screenBasedComponents/dailySummaryScreenComp/listHeader';
import ListItem from '../../components/screenBasedComponents/dailySummaryScreenComp/listItem';

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
        ListHeaderComponent={<ListHeader />}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

export default DailySummaryScreen;
