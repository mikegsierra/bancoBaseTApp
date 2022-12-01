import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonBaseProps = {
  title: string;
  onPress(): void;
};

const ButtonBase = ({title, onPress}: ButtonBaseProps) => {
  return (
    <TouchableOpacity
      className="px-4 py-2 border-2 border-primary-main rounded-full justify-center items-center"
      onPress={onPress}>
      <Text className="text-lg font-semibold text-primary-main">{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBase;
