import {Customer} from 'domain/entities/Customer';

type ConstructorParams = {
  id: number;
  name: string;
  createdAt: Date;
};

export class CustomerModel {
  public id: number;
  public name: string;
  public createdAt: Date;

  constructor({id, name, createdAt}: ConstructorParams) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }

  static fromJson(data: any): CustomerModel {
    const {id, name, createdAt} = data;

    return new CustomerModel({id, name, createdAt});
  }

  static toDomain(data: any): Customer {
    const {id, name, createdAt} = data;

    return new Customer({id, name, createdAt});
  }
}

declare module './customerModel' {
  interface CustomerModel {
    toDomain(): Customer;
  }
}

CustomerModel.prototype.toDomain = function () {
  const {id, name, createdAt} = this;

  return new Customer({id, name, createdAt});
};
