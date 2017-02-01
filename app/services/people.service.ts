import { People } from './../models/People';

export class PeopleService {
  private data: People[] = [
    { _name: "Petya", _mark: 9 },
    { _name: "Katya", _mark: 8 }
  ];

  getData(): People[] {
    return this.data;
  }

  addData(name: string, mark: number) {
    this.data.push(new People(name, mark));
  }


}
