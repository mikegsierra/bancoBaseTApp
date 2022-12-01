import {CustomerRepositoryImpl} from 'data/repositories/customerRepository';
import {AccountSummary} from 'domain/entities/AccountSummary';

export class GetAccountSummaryByCurrencyUseCase {
  private repository: CustomerRepositoryImpl;

  constructor() {
    this.repository = new CustomerRepositoryImpl();
  }

  async run(customerId: number, currencyCode: string): Promise<AccountSummary> {
    const accountSummary = await this.repository.getAccountSummaryByCurrency(
      customerId,
      currencyCode,
    );

    return accountSummary;
  }
}
