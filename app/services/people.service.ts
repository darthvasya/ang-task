import { People } from './../models/People';

export class PeopleService {
  private data: People[] = [
    new People("Petya", 12),
    new People("Natasha", -12)
  ];

  getPeoples(): People[] {
    return this.data;
  }

  addPeople(name: string, mark: number) {
    this.data.push(new People(name, mark));
  }

  delPeople(guid: string) {
    console.log(guid);
  }


}
