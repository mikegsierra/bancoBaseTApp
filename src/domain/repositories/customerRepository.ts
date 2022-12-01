import {AccountSummary} from 'domain/entities/AccountSummary';
import {Customer} from 'domain/entities/Customer';

export interface CustomerRepository {
  getCustomerById(): Promise<Customer>;
  getAccountSummaryByCurrency(
    customerId: number,
    currencyCode: string,
  ): Promise<AccountSummary>;
}
