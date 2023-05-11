interface Adder {
  (b: number): Adder;
  (): number;
}

const add = ((a: number) => {
  return function(b?: number){
      if(typeof(b) != "number"){
        return a
      } else {
        return add(a+b)
      }
  }
}) as Adder

let res = add(2)(5)(7)(1)(6)(5)(11)();
console.log("Result - " + res);