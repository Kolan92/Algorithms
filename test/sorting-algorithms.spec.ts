import { insertionSort } from '../src/sorting-algorithms';
import { expect } from 'chai';
import 'mocha';

var unsortedData: number[]; 
const sortedData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];;

beforeEach(() => {
  unsortedData = [15, 9, 8, 1, 4, 11, 7, 12, 13, 6, 5, 3, 16, 2, 10, 14];
});

describe('Sorting algorithms', () => {

  it('Should sort empty collection', () => {
    var empty: number[] = [];
    insertionSort(empty);
    expect(empty).to.be.empty;
  });

  it('Should sort collection', () => {
    insertionSort(unsortedData);
    expect(unsortedData).to.be.deep.equal(sortedData);
  });

});