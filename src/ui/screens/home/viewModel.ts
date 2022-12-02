import {GetAccountSummaryByCurrencyUseCase} from 'domain/useCases/getAccountSummaryByCurrencyUseCase';
import {Customer} from 'domain/entities/Customer';
import {AccountSummary} from 'domain/entities/AccountSummary';
import {GetCustomerUseCase} from 'domain/useCases/getCustomerUseCase';
import {action, reaction, makeAutoObservable, observable} from 'mobx';
import {GetExpensesByAccountUseCase} from 'domain/useCases/getExpensesByAccountUseCase';
import {Expense} from 'domain/entities/Expense';
import ExpensePieData from 'ui/model/ExpensePieData';

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
  @observable accountSummary: AccountSummary | undefined;
  @observable expensesPieData: ExpensePieData[] = [];

  private getCustomerUseCase: GetCustomerUseCase;
  private getAccountsUseCase: GetAccountSummaryByCurrencyUseCase;
  private getExpensesUseCase: GetExpensesByAccountUseCase;

  constructor() {
    makeAutoObservable(this);

    this.currency = this.currenciesMap.get(this.tabSelected);
    this.getCustomerUseCase = new GetCustomerUseCase();
    this.getAccountsUseCase = new GetAccountSummaryByCurrencyUseCase();
    this.getExpensesUseCase = new GetExpensesByAccountUseCase();

    this.getCustomerData();

    reaction(
      () => this.customer?.id,
      val => {
        if (val && this.currency) {
          this.getAccountsByCurrencyCode();
        }
      },
    );

    reaction(
      () => this.accountSummary?.accounts,
      val => {
        if (val?.length! > 0 && this.currency) {
          const firstAccount = val![0];
          this.getExpensesByAccountId(firstAccount?.id!);
        }
      },
    );
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
    this.setLoadingAccounts(true);
    try {
      const data = await this.getAccountsUseCase.run(
        this.customer?.id!,
        this.currency!,
      );
      this.setAccountSummary(data);
    } catch (error) {
      console.log('Error', error);
    } finally {
      this.setLoadingAccounts(false);
    }
  }

  async getExpensesByAccountId(accountId: number) {
    this.setLoadingExpenses(true);
    try {
      const data = await this.getExpensesUseCase.run(accountId, this.currency!);
      const expenses = this.mapExpensesToExpensesPieData(data);
      this.setExpenses(expenses);
    } catch (error) {
      console.log('Error', error);
    } finally {
      this.setLoadingExpenses(false);
    }
  }

  mapExpensesToExpensesPieData(expenese: Expense[]): ExpensePieData[] {
    return expenese.map(e => ExpensePieData.fromExpense(e));
  }

  @action
  selectAccountById(accountId: number) {
    this.getExpensesByAccountId(accountId);
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

  setAccountSummary(accountSummary: AccountSummary) {
    this.accountSummary = accountSummary;
  }

  setExpenses(expensesPieData: ExpensePieData[]) {
    this.expensesPieData = expensesPieData;
  }

  setLoadingAccounts(isLoadingAccounts: boolean) {
    this.isLoadingAccounts = isLoadingAccounts;
  }

  setLoadingExpenses(isLoadingExpenses: boolean) {
    this.isLoadingExpenses = isLoadingExpenses;
  }
}

export default HomeViewModel;
