import {GetAccountsBycurrencyUseCase} from './../../../domain/useCases/getAccountsByCurrencyUseCase';
import {Account} from 'domain/entities/Account';
import {Customer} from 'domain/entities/Customer';
import {GetCustomerUseCase} from 'domain/useCases/getCustomerUseCase';
import {action, makeAutoObservable, observable} from 'mobx';

enum CurrencyCode {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}

class HomeViewModel {
  private static instance: HomeViewModel;

  private currenciesMap: Map<number, CurrencyCode> = new Map([
    [0, CurrencyCode.MXN],
    [1, CurrencyCode.USD],
    [2, CurrencyCode.EUR],
  ]);

  @observable isLoadingAccounts: boolean = false;
  @observable isLoadingExpenses: boolean = false;
  @observable CurrencyCodes = CurrencyCode;
  @observable tabSelected: number = 0;
  @observable currency: CurrencyCode | undefined = undefined;
  @observable customer: Customer | undefined = undefined;
  @observable accounts: Account[] = [];
  @observable totalText: string = 'MX$ 559,069.63';
  private getCustomerUseCase: GetCustomerUseCase;
  private getAccountsUseCase: GetAccountsBycurrencyUseCase;

  constructor() {
    makeAutoObservable(this);

    this.currency = this.currenciesMap.get(this.tabSelected);
    this.getCustomerUseCase = new GetCustomerUseCase();
    this.getAccountsUseCase = new GetAccountsBycurrencyUseCase();
  }

  public static getInstance(): HomeViewModel {
    if (!HomeViewModel.instance) {
      HomeViewModel.instance = new HomeViewModel();
    }

    return HomeViewModel.instance;
  }

  async getCustomerData() {
    const data = await this.getCustomerUseCase.run();
    this.setCustomer(data);
  }

  async getAccountsByCurrencyCode() {
    if (!this.currency) {
      return;
    }

    this.setLoadingAccounts(true);
    try {
      const data = await this.getAccountsUseCase.run(this.currency);
      this.setAccounts(data);
    } catch (error) {
      console.log('Error', error);
    } finally {
      this.setLoadingAccounts(false);
    }
  }

  @action
  selectAccountById(accountId: number) {
    console.log('AccountId', accountId);
  }

  @action
  selectCurrencyByIndex(index: number) {
    this.currency = this.currenciesMap.get(index)! || 0;
    this.tabSelected = index;
    this.getAccountsByCurrencyCode();
  }

  @action
  openNotificationsScreen() {
    // TODO: Navegar a screen notificaciones
    console.log('Navegar a notificaciones');
  }

  @action
  openMovementsScreen() {
    // TODO: Navegar a screen notificaciones
    console.log('Navegar a movimientos');
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  setAccounts(accounts: Account[]) {
    this.accounts = accounts;
  }

  setLoadingAccounts(isLoadingAccounts: boolean) {
    this.isLoadingAccounts = isLoadingAccounts;
  }

  setLoadingExpenses(isLoadingExpenses: boolean) {
    this.isLoadingExpenses = isLoadingExpenses;
  }
}

export default HomeViewModel;
