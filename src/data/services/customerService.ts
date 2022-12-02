import {AxiosHttpManager, HttpManager} from 'data/network/http';
import {CustomerModel} from 'data/models/customerModel';
import {AccountSummaryModel} from 'data/models/accountSummaryModel';
import {ExpenseModel} from 'data/models/expenseModel';

export class CustomerService {
  private http: HttpManager;
  constructor() {
    this.http = new AxiosHttpManager();
  }

  async getCustomer(): Promise<CustomerModel> {
    const data = await this.http.get('/customers/1');

    return CustomerModel.fromJson(data);
  }

  async getAccountSummaryByCurrency(
    customerId: number,
    currencyCode: string = 'MXN',
  ): Promise<AccountSummaryModel> {
    const data = await this.http.get(
      `/customers/${customerId}/account/summary`,
      {
        currencyCode,
      },
    );

    return AccountSummaryModel.fromJson(data);
  }

  async getExpensesByAccount(
    accountId: number,
    currencyCode: string = 'MXN',
  ): Promise<ExpenseModel[]> {
    const data = await this.http.get(`/accounts/${accountId}/expenses`, {
      currencyCode,
    });

    return data.map((expense: any) => ExpenseModel.fromJson(expense));
  }
}
