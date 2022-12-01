import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export type TabItemProps = {
  title: string;
  icon?: React.ReactNode;
  active?: boolean;
  onPress?: () => void;
};

const TabItem = ({title, icon, active, onPress}: TabItemProps) => {
  return (
    <TouchableOpacity
      className={`flex-row justify-center items-center px-6 py-2 border-b-2 ${
        active ? 'border-b-primary-main' : 'border-b-gray-200'
      }`}
      onPress={onPress}>
      {icon}
      <Text className="ml-2 text-base">{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
