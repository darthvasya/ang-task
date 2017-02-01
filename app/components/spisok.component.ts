import { Component, OnInit } from '@angular/core';
import { People } from './../models/People';
import { PeopleService } from './../services/people.service';

@Component({
    selector: 'spisok-comp',
    templateUrl: 'app/templates/spisok.template.html',
    styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/css/spisok.css'],
    providers: [PeopleService]
})

export class SpisokComponent implements OnInit{
  name: string;
  mark: number;

  items: People[] = [];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.items = this.peopleService.getPeoples();
    console.log(this.items);
  }

  addItem(name: string, mark: number): void {
    this.peopleService.addPeople(name, mark);
    this.name = "";
    this.mark = null;
  }

  delItem(guid) {
    this.peopleService.delPeople(guid);
  }
}
