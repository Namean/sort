"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersColelction = new NumbersCollection_1.NumbersCollection([10000, 10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersColelction);
sorter.sort();
console.log(numbersColelction.data);
