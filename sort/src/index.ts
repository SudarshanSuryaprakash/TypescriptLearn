import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([1, -3, 5, 4]);
numbers.sort();
console.log(numbers.data);

const stringInput = new CharactersCollection("Sudarshan");
stringInput.sort();
console.log(stringInput.data);

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(-20);
linkedList.add(20);
linkedList.add(50);
linkedList.sort();
linkedList.print();
