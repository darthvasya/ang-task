"use strict";
var People_1 = require("./../models/People");
var PeopleService = (function () {
    function PeopleService() {
        this.data = [
            new People_1.People("Petya", 12),
            new People_1.People("Natasha", -12)
        ];
    }
    PeopleService.prototype.getPeoples = function () {
        return this.data;
    };
    PeopleService.prototype.addPeople = function (name, mark) {
        this.data.push(new People_1.People(name, mark));
    };
    PeopleService.prototype.delPeople = function (guid) {
        console.log(guid);
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map