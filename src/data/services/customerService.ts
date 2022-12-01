import {AxiosHttpManager, HttpManager} from 'data/network/http';
import {CustomerModel} from 'data/models/customerModel';
import {AccountModel} from 'data/models/accountModel';

export class CustomerService {
  private http: HttpManager;
  constructor() {
    this.http = new AxiosHttpManager();
  }

  async getCustomer(): Promise<CustomerModel> {
    const data = await this.http.get('/customers/1');

    return CustomerModel.fromJson(data);
  }

  async getAccountsByCurrencyCode(
    currencyCode: string = 'MXN',
  ): Promise<AccountModel[]> {
    const data = await this.http.get('/customers/1/accounts', {currencyCode});

    return data.map((account: any) => AccountModel.fromJson(account));
  }
}
