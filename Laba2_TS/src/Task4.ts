function addNumbers(a: number, b: number, c: number): number {
  return a + b + c;
}

function addStrings(a: string, b: string): string{
      return a + " " + b
}

const wrap = <T>(oldFunction: (...args: T[]) => T) => {
  let cash: Record<string, T> = {};
  let result: T;

  return(...args: T[]) => {
    if (cash[args.toString()]) {
      console.log("From Cashe");
      return cash[args.toString()];
    }

    result = oldFunction(...args);
    cash[args.toString()] = result;
    console.log("From Function");
    return result;
  };
};

let newAdd = wrap(addNumbers);

let res: number = newAdd(2, 4, 4);
console.log(res);

res = newAdd(3, 5, 5);
console.log(res);

res = newAdd(2, 4, 4);
console.log(res);

let newsAdd = wrap(addStrings);

let ress: string = newsAdd("Hi", "Amigo");
console.log(ress);

ress = newsAdd("Hi", "World");
console.log(ress);

ress = newsAdd("Hi", "Hypixel");
console.log(ress);