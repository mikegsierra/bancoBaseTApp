import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Pattern from 'ui/assets/images/pattern.png';

type CardProps = {
  name: string;
  balance: string;
  cardNumber: string;
};

const {width} = Dimensions.get('window');

const Card = ({name, balance, cardNumber}: CardProps) => {
  return (
    <View className="px-4">
      <View
        className="rounded-lg px-4 py-4 bg-card-active h-44"
        style={{width: width - 32}}>
        <Text className="text-gray-800 text-xl mb-4">{name}</Text>
        <Text className="text-white font-bold text-2xl">{balance}</Text>
        <Text className="text-white text-base mt-8">{cardNumber}</Text>

        <View className="absolute bottom-0 right-0 mr-2 mb-2">
          <Image
            source={Pattern}
            className="w-16 h-16 opacity-95"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
