"use strict";
class Sorter2 {
    //   collection: number[];
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    // methods
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - (i - 1); j++) {
                // All of this only works if collection is number[]
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~~~logic to compare and swap characters in
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter2 = new Sorter2([10, 3, -5, 0]);
sorter2.sort();
console.log(sorter2.collection);
