"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersColelction = void 0;
var NumbersColelction = /** @class */ (function () {
    function NumbersColelction(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersColelction.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersColelction.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumbersColelction.prototype.swap = function (left, right) {
        var temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    };
    return NumbersColelction;
}());
exports.NumbersColelction = NumbersColelction;
