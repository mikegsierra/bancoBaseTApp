import {observer} from 'mobx-react';
import React, {useCallback, useMemo} from 'react';
import {ScrollView, Text, View} from 'react-native';
import AccountSelectorList from './components/AccountSelectorList';
import Header from './components/Header';
import HomeViewModel from './viewModel';
import MEXIcon from 'ui/assets/icons/mex.svg';
import USAIcon from 'ui/assets/icons/usa.svg';
import EUIcon from 'ui/assets/icons/eu.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonBase from 'ui/components/ButtonBase';
import Tabs from 'ui/components/Tabs/Tabs';
import ExpensesReport from './components/ExpensesReport';
import Section from 'ui/components/Section/Section';

const Home = () => {
  const viewModel = useMemo(() => HomeViewModel.getInstance(), []);

  const onBellPress = () => viewModel.openNotificationsScreen();
  const onMovsPress = () => viewModel.openMovementsScreen();

  const onAccountSelected = useCallback(
    (accountId: number) => {
      if (viewModel.selectAccountById) {
        viewModel.selectAccountById(accountId);
      }
    },
    [viewModel],
  );

  const onCurrencyTabSelected = useCallback(
    (index: number) => {
      if (viewModel.selectCurrencyByIndex) {
        viewModel.selectCurrencyByIndex(index);
      }
    },
    [viewModel],
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['left', 'right']}>
      <Header name={viewModel.customer?.name} onBellPress={onBellPress} />

      <ScrollView
        className="flex-grow"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 30}}>
        <Section
          title="Mis cuentas"
          loading={viewModel.isLoadingAccounts}
          action={<Section.Action title="Ocultar saldos" onPress={() => {}} />}>
          <>
            <Tabs
              value={viewModel.tabSelected}
              onChange={onCurrencyTabSelected}>
              <Tabs.Item
                title={viewModel.CurrencyCodes.MXN}
                icon={<MEXIcon />}
              />
              <Tabs.Item
                title={viewModel.CurrencyCodes.USD}
                icon={<USAIcon />}
              />
              <Tabs.Item
                title={viewModel.CurrencyCodes.EUR}
                icon={<EUIcon />}
              />
            </Tabs>

            <View className="flex-col px-2 pt-4">
              <Text className="text-3xl font-semibold text-gray-800">
                {viewModel.accountSummary?.totalText}
              </Text>
              <Text className="text-base text-gray-600">
                <Text>
                  Balance actual de {viewModel.accountSummary?.size} cuentas en{' '}
                </Text>
                <Text className="font-semibold">{viewModel.currency}</Text>
              </Text>
            </View>

            <AccountSelectorList
              accounts={viewModel.accountSummary?.accounts || []}
              onAccountSelected={onAccountSelected}
            />
          </>
        </Section>

        <Section title="Gastos por categoría">
          <View className="flex-col px-4 pb-2">
            <ExpensesReport />

            <ButtonBase title="Ver movimientos" onPress={onMovsPress} />
          </View>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Home);
