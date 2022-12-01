import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {VictoryPie} from 'victory-native';

const {width} = Dimensions.get('screen');

const colors = ['#ee9700', '#5c5e5e', '#fcd86c', '#305a8e'];

const ExpensesReport = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <View className="flex-row justify-start items-center">
          <View className="w-4 h-4 rounded-full bg-primary-main" />
          <Text className="text-base font-normal px-2">Educación - 5%</Text>
        </View>
        <View className="flex-row justify-start items-center">
          <View className="w-4 h-4 rounded-full bg-dark-gray" />
          <Text className="text-base font-normal px-2">Viajes - 15%</Text>
        </View>
        <View className="flex-row justify-start items-center">
          <View className="w-4 h-4 rounded-full bg-primary-ligth" />
          <Text className="text-base font-normal px-2">Comida - 30%</Text>
        </View>
        <View className="flex-row justify-start items-center">
          <View className="w-4 h-4 rounded-full bg-dark-blue" />
          <Text className="text-base font-normal px-2">Gasolina - 50%</Text>
        </View>
      </View>
      <View>
        <VictoryPie
          data={[
            {x: 'Educación - 5%', y: 12344.1},
            {x: 'Viajes - 15%', y: 25300.23},
            {x: 'Comida - 30%', y: 43900.5},
            {x: 'Gasolina - 50%', y: 109876.98},
          ]}
          animate={{
            duration: 2000,
          }}
          colorScale={colors}
          innerRadius={50}
          width={width / 3}
          height={200}
          labels={() => ''}
          padding={{left: 0, right: 0}}
        />
      </View>
    </View>
  );
};

export default ExpensesReport;
