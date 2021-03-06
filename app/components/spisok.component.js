"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_service_1 = require('./../services/people.service');
var SpisokComponent = (function () {
    function SpisokComponent(peopleService) {
        this.peopleService = peopleService;
        this.items = [];
    }
    SpisokComponent.prototype.ngOnInit = function () {
        this.items = this.peopleService.getPeoples();
        console.log(this.items);
    };
    SpisokComponent.prototype.addItem = function (name, mark) {
        this.peopleService.addPeople(name, mark);
        this.name = "";
        this.mark = null;
    };
    SpisokComponent.prototype.delItem = function (guid) {
        this.peopleService.delPeople(guid);
    };
    SpisokComponent = __decorate([
        core_1.Component({
            selector: 'spisok-comp',
            templateUrl: 'app/templates/spisok.template.html',
            styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/css/spisok.css'],
            providers: [people_service_1.PeopleService]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], SpisokComponent);
    return SpisokComponent;
}());
exports.SpisokComponent = SpisokComponent;
//# sourceMappingURL=spisok.component.js.map