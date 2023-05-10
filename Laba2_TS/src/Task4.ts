// function addThreeNumbers(a: number, b: number, c: number):number{
//       return a + b + c
//   }
  
//   function wrap(oldFunction){
//       let cash = new Map;
//       let res;
  
//       return ( (...args) => {
//           console.log(args);
//           if(cash.get(args.toString())){
//               res = cash.get(args.toString());
//           } else {
//               res = oldFunction(...args);
//               cash.set(args.toString(), res + " - from Cash");
//               res = res + " - from Function"
//           }
//           return res
//       })
//   }
  
//   let newAdd = wrap(addThreeNumbers)
//   res = newAdd(2, 4);
//   console.log(res);
  
//   res = newAdd(3, 5)
//   console.log(res);
  
//   res = newAdd(2, 4);
//   console.log(res);