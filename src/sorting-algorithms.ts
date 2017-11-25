export function insertionSort(array: number[]): void {
    for (let i = 1; i < array.length; i++) {
        insert(array, i, array[i]);
    }
}

function insert(array: number[], position: number, value: number): void {
    let index = position - 1;
    while(index >= 0 && array[index] > value){
        array[index + 1] = array[index];
        index--;
    }
    array[index + 1] = value;
}