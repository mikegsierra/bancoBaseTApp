type ConstructorParams = {
  id: number;
  name: string;
  code: string;
  total: number;
  totalText: string;
};

export class Expense {
  public id: number;
  public name: string;
  public code: string;
  public total: number;
  public totalText: string;

  constructor({id, name, code, total, totalText}: ConstructorParams) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.total = total;
    this.totalText = totalText;
  }
}
