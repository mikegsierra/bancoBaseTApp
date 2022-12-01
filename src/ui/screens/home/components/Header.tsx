import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BellIcon from 'ui/assets/icons/bell.svg';

type HeaderProps = {
  name: string | undefined;
  onBellPress(): void;
};

const Header = ({name, onBellPress}: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex bg-primary-main rounded-b-xl"
      style={{paddingTop: insets.top}}>
      <View className="flex-row justify-between items-center px-6 py-5">
        <Text className="text-white font-semibold text-2xl">Hola {name}</Text>

        <TouchableOpacity onPress={onBellPress}>
          <BellIcon width={32} height={32} fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
