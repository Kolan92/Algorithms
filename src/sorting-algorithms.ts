export function insertionSort(array: number[]): void {
    for (let index = 1; index < array.length; index++) {
        insert(array, index, array[index]);
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

export function quickSort(array: number[]): void{
    quickSortImplementation(array, 0, array.length - 1);
}

function quickSortImplementation(array: number[], lowerIndex: number, higherIndex: number): void{
    if(lowerIndex > higherIndex)
        return;

    let pivotIndex: number = partition(array, lowerIndex, higherIndex);
    
    quickSortImplementation(array, lowerIndex, pivotIndex - 1);
    quickSortImplementation(array, pivotIndex + 1, higherIndex)
}

function partition(array: number[], lowerIndex: number, higherIndex: number): number{

    let pivotValue = array[lowerIndex]
    
    let leftMark = lowerIndex + 1;
    let rightMark = higherIndex;

    let done = false;
    while (!done){
        while (leftMark <= rightMark && array[leftMark] <= pivotValue)
            leftMark = leftMark + 1
    
        while (array[rightMark] >= pivotValue && rightMark >= leftMark)
            rightMark = rightMark -1

        if (rightMark < leftMark)
            done = true;
        else
            swap(array, leftMark, rightMark);
    }
    swap(array, lowerIndex, rightMark);
    return rightMark
}

function swap(array: number[], lowerIndex: number, higherIndex: number): void{
    let temp: number = array[lowerIndex];
    array[lowerIndex] = array[higherIndex];
    array[higherIndex] = temp;
}