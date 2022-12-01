import {AccountModel} from 'data/models/accountModel';
import {CustomerService} from 'data/services/customerService';
import {Account} from 'domain/entities/Account';
import {Customer} from 'domain/entities/Customer';
import {CustomerRepository} from 'domain/repositories/customerRepository';

export class CustomerRepositoryImpl implements CustomerRepository {
  private service: CustomerService;

  constructor() {
    this.service = new CustomerService();
  }

  async getCustomerById(): Promise<Customer> {
    const customer = await this.service.getCustomer();

    return customer.toDomain();
  }
  async getAccountsByCurrencyCode(currencyCode: string): Promise<Account[]> {
    const accounts = await this.service.getAccountsByCurrencyCode(currencyCode);

    return accounts.map((account: AccountModel) => account.toDomain());
  }
}
