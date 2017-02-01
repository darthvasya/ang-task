"use strict";
var People_1 = require('./../models/People');
var PeopleService = (function () {
    function PeopleService() {
        this.data = [
            { _name: "Petya", _mark: 9 },
            { _name: "Katya", _mark: 8 }
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