function add(a){
      return function(b){
          if(!b ){
              return a;
          } else{
              return add(a + b);
          }
      }
  }
  var res = add(2)(5)(7)(1)(6)(5)(11)();
  console.log("Result - " + res);