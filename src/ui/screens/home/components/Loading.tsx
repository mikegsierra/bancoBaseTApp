import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

type LoadingProps = {
  visible: boolean;
  title?: string | undefined;
};

const Loading = ({visible, title}: LoadingProps) => {
  return visible ? (
    <View className="absolute top-0 bottom-0 right-0 left-0 bg-black flex-1 justify-center items-center opacity-70">
      <ActivityIndicator size="large" color="white" />
      <Text className="text-white text-xl py-4">{title}</Text>
    </View>
  ) : (
    <></>
  );
};

export default Loading;
