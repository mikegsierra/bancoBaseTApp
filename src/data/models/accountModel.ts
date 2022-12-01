import {Account} from 'domain/entities/Account';

type ConstructorParams = {
  id: number;
  name: string;
  cardNumber: string;
  balance: number;
  balanceText: string;
  createdAt: Date;
};

export class AccountModel {
  public id: number;
  public name: string;
  public cardNumber: string;
  public balance: number;
  public balanceText: string;
  public createdAt: Date;

  constructor({
    id,
    name,
    cardNumber,
    balance,
    balanceText,
    createdAt,
  }: ConstructorParams) {
    this.id = id;
    this.name = name;
    this.cardNumber = cardNumber;
    this.balance = balance;
    this.balanceText = balanceText;
    this.createdAt = createdAt;
  }

  static fromJson(data: any): AccountModel {
    const {id, name, cardNumber, balance, balanceText, createdAt} = data;

    return new AccountModel({
      id,
      name,
      cardNumber,
      balance,
      balanceText,
      createdAt,
    });
  }

  static toDomain(data: any): Account {
    const {id, name, cardNumber, balance, balanceText, createdAt} = data;

    return new Account({
      id,
      name,
      cardNumber,
      balance,
      balanceText,
      createdAt,
    });
  }
}

declare module './accountModel' {
  interface AccountModel {
    toDomain(): Account;
  }
}

AccountModel.prototype.toDomain = function () {
  const {id, name, cardNumber, balance, balanceText, createdAt} = this;

  return new Account({id, name, cardNumber, balance, balanceText, createdAt});
};
