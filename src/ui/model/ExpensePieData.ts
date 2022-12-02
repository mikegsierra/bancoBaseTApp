import {Expense} from 'domain/entities/Expense';

export const ExpensePieColors = [
  '#ee9700',
  '#5c5e5e',
  '#fcd86c',
  '#305a8e',
  '#F2E8CF',
];

type ConstructorParams = {
  key: string;
  x: string;
  y: number;
  color: string;
};

class ExpensePieData {
  key: string;
  x: string;
  y: number;
  color: string;

  constructor({key, x, y, color}: ConstructorParams) {
    this.key = key;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  static fromExpense({id, code, name, total}: Expense): ExpensePieData {
    const color = ExpensePieColors[id - 1];

    return new ExpensePieData({
      key: code,
      x: name,
      y: total,
      color,
    });
  }
}
export default ExpensePieData;
