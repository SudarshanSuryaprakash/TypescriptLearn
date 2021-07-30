import { NumbersColelction } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbers = new NumbersColelction([1,-3,5,4])
const sorter = new Sorter(numbers)
sorter.sort();
console.log(sorter.collection)
