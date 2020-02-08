import { IStudent } from 'app/shared/model/student.model';

export interface IInterest {
  id?: number;
  description?: string;
  students?: IStudent[];
}

export class Interest implements IInterest {
  constructor(public id?: number, public description?: string, public students?: IStudent[]) {}
}
