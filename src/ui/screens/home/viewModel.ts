import {GetAccountsBycurrencyUseCase} from './../../../domain/useCases/getAccountsByCurrencyUseCase';
import {Account} from 'domain/entities/Account';
import {Customer} from 'domain/entities/Customer';
import {GetCustomerUseCase} from 'domain/useCases/getCustomerUseCase';
import {action, makeAutoObservable, observable} from 'mobx';

export enum CurrencyCode {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}

class HomeViewModel {
  private static instance: HomeViewModel;
  @observable isLoading: boolean = false;
  @observable currencyCode: CurrencyCode = CurrencyCode.EUR;
  @observable customer: Customer | undefined = undefined;
  @observable accounts: Account[] = [];
  private getCustomerUseCase: GetCustomerUseCase;
  private getAccountsUseCase: GetAccountsBycurrencyUseCase;

  constructor() {
    makeAutoObservable(this);
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
    this.setLoading(true);
    try {
      const data = await this.getAccountsUseCase.run(this.currencyCode);
      this.setAccounts(data);
    } catch (error) {
      console.log('Error', error);
    } finally {
      this.setLoading(false);
    }
  }

  @action
  selectAccountById(accountId: number) {
    console.log('AccountId', accountId);
  }

  @action
  openNotificationsScreen() {
    // TODO: Navegar a screen notificaciones
    console.log('Navegar a notificaciones');
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  setAccounts(accounts: Account[]) {
    this.accounts = accounts;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export default HomeViewModel;
