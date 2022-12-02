import React from 'react';
import {ActivityIndicator} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

type LoadingProps = {
  visible: boolean;
  title?: string | undefined;
};

const Loading = ({visible}: LoadingProps) => {
  return visible ? (
    <Animated.View
      className="absolute top-0 bottom-0 right-0 left-0 flex-1 justify-center items-center"
      entering={FadeIn}>
      <ActivityIndicator size="large" color="#ee9700" />
      {/* <Text className="text-white text-xl">{title}</Text> */}
    </Animated.View>
  ) : (
    <></>
  );
};

export default Loading;
