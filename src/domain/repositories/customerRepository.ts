import {Account} from 'domain/entities/Account';
import {Customer} from 'domain/entities/Customer';

export interface CustomerRepository {
  getCustomerById(): Promise<Customer>;
  getAccountsByCurrencyCode(currencyCode: string): Promise<Account[]>;
}
