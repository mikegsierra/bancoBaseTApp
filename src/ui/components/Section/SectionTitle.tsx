import React from 'react';
import {Text} from 'react-native';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({title}: SectionTitleProps) => {
  return <Text className="text-gray-800 font-medium text-lg">{title}</Text>;
};

export default SectionTitle;
