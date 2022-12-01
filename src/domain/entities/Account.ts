type ConstructorParams = {
  id: number;
  name: string;
  cardNumber: string;
  balance: number;
  balanceText: string;
  createdAt: Date;
};

export class Account {
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
}
