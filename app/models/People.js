"use strict";
var People = (function () {
    function People(userName, userMark) {
        this.name = userName;
        this.mark = userMark;
        this._guid = this.getguid();
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            var lastLetter = n.charAt(n.length - 1).toUpperCase();
            n = n.toLowerCase().substring(0, n.length - 1);
            this._name = n + lastLetter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(People.prototype, "mark", {
        get: function () {
            return this._mark;
        },
        set: function (m) {
            if (m > 10) {
                this._mark = 9;
            }
            else {
                if (m < 0)
                    this._mark = 0;
                else
                    this._mark = m;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(People.prototype, "guid", {
        get: function () {
            return this._guid;
        },
        set: function (g) {
            this._guid = g;
        },
        enumerable: true,
        configurable: true
    });
    // infrastructure
    People.prototype.getguid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    People.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return People;
}());
exports.People = People;
//# sourceMappingURL=People.js.map