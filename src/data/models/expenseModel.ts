import {Expense} from 'domain/entities/Expense';

type ConstructorParams = {
  id: number;
  name: string;
  code: string;
  total: number;
  totalText: string;
};

export class ExpenseModel {
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

  static fromJson(data: any): ExpenseModel {
    const {id, name, code, total, totalText} = data;

    return new ExpenseModel({
      id,
      name,
      code,
      total,
      totalText,
    });
  }

  static toDomain(data: any): Expense {
    const {id, name, code, total, totalText} = data;

    return new Expense({
      id,
      name,
      code,
      total,
      totalText,
    });
  }
}

declare module './ExpenseModel' {
  interface ExpenseModel {
    toDomain(): Expense;
  }
}

ExpenseModel.prototype.toDomain = function () {
  const {id, name, code, total, totalText} = this;

  return new Expense({id, name, code, total, totalText});
};
