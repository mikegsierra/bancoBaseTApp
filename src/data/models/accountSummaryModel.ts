import {Account} from 'domain/entities/Account';
import {AccountSummary} from 'domain/entities/AccountSummary';

type ConstructorParams = {
  total: number;
  totalText: string;
  accounts: Account[];
  size: number;
};

export class AccountSummaryModel {
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

  static fromJson(data: any): AccountSummaryModel {
    const {total, totalText, accounts, size} = data;

    return new AccountSummaryModel({
      total,
      totalText,
      accounts,
      size,
    });
  }

  static toDomain(data: any): AccountSummary {
    const {total, totalText, accounts, size} = data;

    return new AccountSummary({
      total,
      totalText,
      accounts,
      size,
    });
  }
}

declare module './accountSummaryModel' {
  interface AccountSummaryModel {
    toDomain(): AccountSummary;
  }
}

AccountSummaryModel.prototype.toDomain = function () {
  const {total, totalText, accounts, size} = this;

  return new AccountSummary({total, totalText, accounts, size});
};
