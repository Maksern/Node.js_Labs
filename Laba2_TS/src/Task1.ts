// function addNumbers(a: number){
//       return function(b?: number){
//           if(!b){
//               return a;
//           } else{
//               return addNumbers(a + b);
//           }
//       }
//   }

  function addNumbersss(a: number, b: number): number{
        return a + b
  }
 
//   var res = addNumbers(2)(5)(7)();
let result: number = addNumbersss(2, 4)
console.log("Result - " + result);