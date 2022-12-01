import {CustomerRepositoryImpl} from 'data/repositories/customerRepository';
import {Customer} from 'domain/entities/Customer';

export class GetCustomerUseCase {
  private repository: CustomerRepositoryImpl;

  constructor() {
    this.repository = new CustomerRepositoryImpl();
  }

  async run(): Promise<Customer> {
    const customer = await this.repository.getCustomerById();

    return customer;
  }
}
