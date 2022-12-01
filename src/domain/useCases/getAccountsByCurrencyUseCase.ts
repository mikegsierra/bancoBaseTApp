import {CustomerRepositoryImpl} from 'data/repositories/customerRepository';
import {Account} from 'domain/entities/Account';

export class GetAccountsBycurrencyUseCase {
  private repository: CustomerRepositoryImpl;

  constructor() {
    this.repository = new CustomerRepositoryImpl();
  }

  async run(currencyCode: string): Promise<Account[]> {
    const accounts = await this.repository.getAccountsByCurrencyCode(
      currencyCode,
    );

    return accounts;
  }
}
