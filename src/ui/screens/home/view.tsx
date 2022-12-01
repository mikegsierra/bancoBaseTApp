import {observer} from 'mobx-react';
import React, {useEffect, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AccountSelectorList from './components/AccountSelectorList';
import Header from './components/Header';
import Loading from './components/Loading';
import HomeViewModel from './viewModel';
import MEXIcon from 'ui/assets/icons/mex.svg';
import USAIcon from 'ui/assets/icons/usa.svg';
import EUIcon from 'ui/assets/icons/eu.svg';

const Home = () => {
  const viewModel = useMemo(() => HomeViewModel.getInstance(), []);

  useEffect(() => {
    viewModel.getCustomerData();
    viewModel.getAccountsByCurrencyCode();
    // const timer = setTimeout(() => viewModel.getAccountsByCurrencyCode(), 1000);
    // return () => clearTimeout(timer);
  }, [viewModel]);

  const onBellPress = () => viewModel.openNotificationsScreen();

  const onAccountSelected = (accountId: number) =>
    viewModel.selectAccountById(accountId);

  return (
    <View className="flex-1">
      <Header name={viewModel.customer?.name} onBellPress={onBellPress} />

      <View className="px-4 mt-10">
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-800 font-medium text-lg">Mis cuentas</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text className="text-primary-main text-sm">Ocultar saldos</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-around items-center mt-2 mb-4">
          <TouchableOpacity className="flex-row justify-center items-center px-6 py-2 border-b-2 border-b-primary-main">
            <MEXIcon />
            <Text className="ml-2 text-base">MXN</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-center items-center px-6 py-2 border-b-2 border-b-primary-main">
            <USAIcon />
            <Text className="ml-2 text-base">USD</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-center items-center px-6 py-2 border-b-2 border-b-primary-main">
            <EUIcon />
            <Text className="ml-2 text-base">EUR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-col px-4 pt-4">
        <Text className="text-3xl font-semibold text-gray-800">
          MX$ 559,069.63
        </Text>
        <Text className="text-base text-gray-600">
          <Text>Balance actual de 3 cuentas en </Text>
          <Text className="font-semibold">{viewModel.currencyCode}</Text>
        </Text>
      </View>

      <AccountSelectorList
        accounts={viewModel.accounts}
        onAccountSelected={onAccountSelected}
      />

      <Loading visible={viewModel.isLoading} title="Cargando…" />
    </View>
  );
};

export default observer(Home);
