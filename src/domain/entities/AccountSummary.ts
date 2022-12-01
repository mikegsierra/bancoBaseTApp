import {Account} from './Account';

type ConstructorParams = {
  total: number;
  totalText: string;
  accounts: Account[];
  size: number;
};

export class AccountSummary {
  public total: number;
  public totalText: string;
  public accounts: Account[];
  public size: number;

  constructor({total, totalText, accounts, size}: ConstructorParams) {
    this.total = total;
    this.totalText = totalText;
    this.accounts = accounts;
    this.size = size;
  }
}
