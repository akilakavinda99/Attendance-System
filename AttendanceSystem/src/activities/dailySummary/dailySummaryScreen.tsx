import {Text, View, FlatList} from 'react-native';
import React from 'react';
import {dailySummaryStyles} from './styles';

const DailySummaryScreen = () => {
  return (
    <View style={dailySummaryStyles.container}>
      <Text>DailySummaryScreen</Text>
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
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
                Header
              </Text>
              <Text>Header</Text>
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
              <Text>Header</Text>
              <Text>Header</Text>
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
