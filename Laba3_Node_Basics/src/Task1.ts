let array: Array<String> = ["hi", "hello", "alloha"];

const getString = <T>(arr:Array<T>) => {
      const res:Array<String> = arr.map( el => el + "");
      return res;
}

console.log(array);
let answer:Array<String> = getString(array);
console.log(answer);
