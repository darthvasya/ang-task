import { Component, OnInit } from '@angular/core';
import { People } from './../models/People';
import { PeopleService } from './../services/people.service';

@Component({
    selector: 'spisok-comp',
    templateUrl: 'app/templates/spisok.template.html',
    styleUrls: ['app/css/app.css'],
    providers: [PeopleService]
})

export class SpisokComponent implements OnInit{
  items: People[] = [];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.items = this.peopleService.getData();
    console.log(this.items);
  }
}
