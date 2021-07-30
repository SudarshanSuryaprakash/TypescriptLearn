"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbers = new NumbersCollection_1.NumbersColelction([1, -3, 5, 4]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(sorter.collection);
