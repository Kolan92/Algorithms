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

export function selectionSort(array: number[]): void{
    selectionSortImplementation(array, 0, array.length - 1);
}

function selectionSortImplementation(array: number[], lowerIndex: number, higherIndex: number): void{
    for(let index: number = array.length - 1; index >= 1; index--){
        let maxElementIndex: number = selectMax(array, 0, index);
        if(maxElementIndex != index){
            swap(array, index, maxElementIndex);
        }
    }
}

function selectMax(array: number[], lowerIndex: number, higherIndex: number): number{
    let maxElementIndex: number = lowerIndex;
    let index: number = lowerIndex;

    while(++index <= higherIndex){
        if(array[index] > array[maxElementIndex]){
            maxElementIndex = index;
        }
    }

    return maxElementIndex;
}

export function heapSort(array: number[]):void{
    buildHeap(array);
    for(let index: number = array.length - 1; index >= 1; index--){
        swap(array, 0, index);
        heapify(array, 0, index);
    }
}

function buildHeap(array: number[]): void{
    for(let index = array.length - 1; index >= 0; index--){
        heapify(array, index, array.length);
    }
}

function heapify(array: number[], startIndex: number, endIndex:number): void{
    let lowerIndex: number = 2 * startIndex + 1;
    let higherIndex: number = 2 * startIndex + 2;

    let indexOfLargestElement: number;
    if(lowerIndex < endIndex && array[lowerIndex] > array[startIndex]){
        indexOfLargestElement = lowerIndex;
    } else{
        indexOfLargestElement = startIndex;
    }
    if(higherIndex < endIndex && array[higherIndex] > array[indexOfLargestElement]){
        indexOfLargestElement = higherIndex;
    }

    if(startIndex != indexOfLargestElement){
        swap(array, startIndex, indexOfLargestElement);

        heapify(array, indexOfLargestElement, endIndex);
    }
}
    