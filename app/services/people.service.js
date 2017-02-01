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
        if (name === "" || mark === undefined)
            console.log("fsda");
        else
            this.data.push(new People_1.People(name, mark));
    };
    PeopleService.prototype.delPeople = function (guid) {
        this.data.splice(this.find(guid), 1);
    };
    PeopleService.prototype.find = function (guid) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].guid == guid)
                return i;
        }
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map