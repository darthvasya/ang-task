"use strict";
var People = (function () {
    function People(userName, userMark) {
        this.name = userName;
        this.mark = userMark;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            n = n.toLowerCase();
            var lastLetter = n.charAt(n.length - 1).toUpperCase();
            n.substr(n.length - 1);
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
    return People;
}());
exports.People = People;
//# sourceMappingURL=People.js.map