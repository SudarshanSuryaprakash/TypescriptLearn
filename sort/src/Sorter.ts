export interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export abstract class Sorter {
  abstract compare(left: number, right: number): boolean;
  abstract length: number;
  abstract swap(left: number, right: number): void;

  sort() {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
