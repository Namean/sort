
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


// const numbersColelction = new NumbersCollection([50, 10, 3, -5, 0]);
// const sorter = new Sorter(numbersColelction);
// sorter.sort();
// console.log(numbersColelction.data);


const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);