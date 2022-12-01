// import {Account} from './Account';
type ConstructorParams = {
  id: number;
  name: string;
  //   accounts: Account[];
  createdAt: Date;
};

export class Customer {
  public id: number;
  public name: string;
  //   public accounts: Account[];
  public createdAt: Date;

  constructor({id, name, createdAt}: ConstructorParams) {
    this.id = id;
    this.name = name;
    // this.accounts = accounts;
    this.createdAt = createdAt;
  }
}
