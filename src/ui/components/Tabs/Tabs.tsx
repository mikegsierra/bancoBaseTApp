import React, {Children, cloneElement, useMemo} from 'react';
import {View} from 'react-native';
import TabItem, {TabItemProps} from './TabItem';

type TabsProps = {
  value?: number;
  onChange?: (value: number) => void;
  children?: React.ReactNode;
};

const Tabs = ({value, onChange, children}: TabsProps) => {
  const validChildren = useMemo(() => Children.toArray(children), [children]);

  return (
    <View className="flex-row justify-around items-center mt-2 mb-4">
      {validChildren.map((child, index) => {
        return cloneElement(child as React.ReactElement<TabItemProps>, {
          onPress: () => {
            if (index !== value) {
              onChange?.(index);
            }
          },
          active: index === value,
        });
      })}
    </View>
  );
};

Tabs.Item = TabItem;

export default Tabs;
