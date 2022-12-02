import React from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native';
import Pattern from 'ui/assets/images/pattern.png';
import BackPattern from 'ui/assets/images/back-pattern.png';

type CardProps = {
  name: string;
  balance: string;
  cardNumber: string;
};

const {width} = Dimensions.get('window');

const Card = ({name, balance, cardNumber}: CardProps) => {
  return (
    <View
      className="rounded-lg bg-card-active h-44"
      style={{width: width - 32}}>
      <ImageBackground
        source={BackPattern}
        className="w-full h-full"
        resizeMode="repeat">
        <View className="flex-1 px-4 py-4">
          <Text className="text-gray-800 text-xl mb-4">{name}</Text>
          <Text className="text-white font-bold text-2xl">{balance}</Text>
          <Text className="text-white text-base mt-8">{cardNumber}</Text>

          <View className="absolute bottom-0 right-0 mr-4 mb-4">
            <Image
              source={Pattern}
              className="w-16 h-16"
              resizeMode="contain"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
