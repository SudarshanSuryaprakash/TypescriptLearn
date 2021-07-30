"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumbersCollection.prototype.swap = function (left, right) {
        var temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
