import {AccountSummary} from 'domain/entities/AccountSummary';
import {Customer} from 'domain/entities/Customer';
import {Expense} from 'domain/entities/Expense';

export interface CustomerRepository {
  getCustomerById(): Promise<Customer>;
  getAccountSummaryByCurrency(
    customerId: number,
    currencyCode: string,
  ): Promise<AccountSummary>;
  getExpensesByAccountId(
    accountId: number,
    currencyCode: string,
  ): Promise<Expense[]>;
}
