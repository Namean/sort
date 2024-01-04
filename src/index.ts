
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersColelction = new NumbersCollection([50, 10, 3, -5, 0]);
const sorter = new Sorter(numbersColelction);
sorter.sort();
console.log(numbersColelction.data);
