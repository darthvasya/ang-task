"use strict";
var People_1 = require('./../models/People');
var PeopleService = (function () {
    function PeopleService() {
        this.data = [
            new People_1.People("Petya", 12),
            new People_1.People("Natasha", -12)
        ];
    }
    PeopleService.prototype.getData = function () {
        return this.data;
    };
    PeopleService.prototype.addData = function (name, mark) {
        this.data.push(new People_1.People(name, mark));
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map