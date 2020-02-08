import { IInterest } from 'app/shared/model/interest.model';

export interface IStudent {
  id?: number;
  name?: string;
  lastName?: string;
  interests?: IInterest[];
}

export class Student implements IStudent {
  constructor(public id?: number, public name?: string, public lastName?: string, public interests?: IInterest[]) {}
}
