import React from 'react';
import {View} from 'react-native';
import SectionAction from './SectionAction';
import SectionTitle from './SectionTitle';
import Loading from '../Loading';

type SectionProps = {
  title: string;
  loading?: boolean;
  action?: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({title, loading, children, action}: SectionProps) => {
  return (
    <View className="px-4 py-4 mt-6 bg-white">
      <View className="flex-row justify-between items-center mb-2">
        <SectionTitle title={title} />

        {action}
      </View>

      {children}

      <Loading visible={loading!} title="Cargando…" />
    </View>
  );
};

Section.Action = SectionAction;

export default Section;
