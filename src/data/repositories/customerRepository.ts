import {CustomerService} from 'data/services/customerService';
import {AccountSummary} from 'domain/entities/AccountSummary';
import {Customer} from 'domain/entities/Customer';
import {Expense} from 'domain/entities/Expense';
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

  async getAccountSummaryByCurrency(
    customerId: number,
    currencyCode: string,
  ): Promise<AccountSummary> {
    return await this.service.getAccountSummaryByCurrency(
      customerId,
      currencyCode,
    );
  }

  async getExpensesByAccountId(
    accountId: number,
    currencyCode: string,
  ): Promise<Expense[]> {
    return await this.service.getExpensesByAccount(accountId, currencyCode);
  }
}
