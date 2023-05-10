function add(a, b, c){
      return a + b + c
  }
  
  function wrap(oldFunction){
      let cash = new Map;
      let res;
  
      return ( (...args) => {
          console.log(args);
          if(cash.get(args.toString())){
              res = cash.get(args.toString());
          } else {
              res = oldFunction(...args);
              cash.set(args.toString(), res + " - from Cash");
              res = res + " - from Function"
          }
          return res
      })
  }
  
  newAdd = wrap(add)
  res = newAdd(2, 4);
  console.log(res);
  
  res = newAdd(3, 5)
  console.log(res);
  
  res = newAdd(2, 4);
  console.log(res);