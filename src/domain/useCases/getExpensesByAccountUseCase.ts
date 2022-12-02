import {CustomerRepositoryImpl} from 'data/repositories/customerRepository';
import {Expense} from 'domain/entities/Expense';

export class GetExpensesByAccountUseCase {
  private repository: CustomerRepositoryImpl;

  constructor() {
    this.repository = new CustomerRepositoryImpl();
  }

  async run(accountId: number, currencyCode: string): Promise<Expense[]> {
    const expenses = await this.repository.getExpensesByAccountId(
      accountId,
      currencyCode,
    );

    return expenses;
  }
}
