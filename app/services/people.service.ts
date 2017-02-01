import { People } from './../models/People';

export class PeopleService {
  private data: People[] = [
    new People("Petya", 12),
    new People("Natasha", -12)
  ];

  getData(): People[] {
    return this.data;
  }

  addData(name: string, mark: number) {
    this.data.push(new People(name, mark));
  }


}
