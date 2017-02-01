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
    if(name === "" || mark === undefined)
      console.log("fsda");
    else
      this.data.push(new People(name, mark));

  }

  delPeople(guid: string) {
    this.data.splice(this.find(guid), 1);
  }

  private find(guid: string): number {
      for (let i: number = 0; i < this.data.length; i++) {
        if (this.data[i].guid == guid) return i;
      }
  }

}
