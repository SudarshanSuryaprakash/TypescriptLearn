import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import {CharactersCollection} from './CharacterCollection';
import {LinkedList} from "./LinkedList";

const numbers = new NumbersCollection([1,-3,5,4])
const sorter = new Sorter(numbers)
sorter.sort();
console.log(sorter.collection)

const stringInput = new CharactersCollection('Sudarshan')
const charSorter = new Sorter(stringInput)
charSorter.sort();
console.log(charSorter.collection)

const linkedList = new LinkedList()
linkedList.add(200)
linkedList.add(-20)
linkedList.add(20)
linkedList.add(50)
const linkedSorter = new Sorter(linkedList)
linkedSorter.sort()
console.log(linkedSorter.collection)
