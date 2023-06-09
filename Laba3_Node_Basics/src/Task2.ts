const arr: number[] = [1, 2, 3, 4, 5, 6,];

const arrayChangeDelete = <T>(
    array: T[], fn: (item: T) => boolean
      ): T[] => {
    const res: T[] = [];
    for (const [i, item] of array.entries()) {
        const isRemove: boolean = fn(item);
        if (isRemove) {
            array.splice(i, 1);
            res.push(item);
        }
    }
    return res;
};


const deletedElements = arrayChangeDelete(
    arr,
    (item) => item % 2 === 0
);

console.log({deletedElements, arr});