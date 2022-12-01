import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type SectionActionProps = {
  title: string;
  onPress(): void;
};

const SectionAction = ({title, onPress}: SectionActionProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="text-primary-main text-sm">{title}</Text>
    </TouchableOpacity>
  );
};

export default SectionAction;
