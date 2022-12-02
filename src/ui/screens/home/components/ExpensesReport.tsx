import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {VictoryPie} from 'victory-native';
import ExpensePieData, {ExpensePieColors} from 'ui/model/ExpensePieData';

const {width} = Dimensions.get('screen');
const height = 200;

type ExpensesReportProps = {
  data: ExpensePieData[];
};

const ExpensesReport = ({data}: ExpensesReportProps) => {
  if (data.length === 0) {
    return <></>;
  }

  return (
    <View className="flex-row justify-between items-center">
      <View>
        {data.map(item => (
          <View className="flex-row justify-start items-center" key={item.key}>
            <View
              className="w-4 h-4 rounded-full "
              style={{backgroundColor: item.color}}
            />
            <Text className="text-base font-normal px-2">{item.x}</Text>
          </View>
        ))}
      </View>
      <View>
        <VictoryPie
          data={data}
          animate={{
            duration: 1000,
          }}
          colorScale={ExpensePieColors}
          innerRadius={45}
          width={width / 3}
          height={height}
          labels={() => ''}
          padding={{left: 0, right: 0}}
        />
      </View>
    </View>
  );
};

export default ExpensesReport;
