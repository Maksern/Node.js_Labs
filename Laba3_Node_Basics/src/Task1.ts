let array: Array<String> = ["hi", "hello", "alloha"];

const runSequent = async <T, R>( 
      arr: T[], cb: (item: T, index?: number) => Promise<R>
  ): Promise<R[]> => {
      const res: R[] = [];
      for (const [index, element] of arr.entries()) {
          const callbackElement: R = await cb(element, index);
          res.push(callbackElement);
      }
      return res;
};

(async () => {
      const results = await runSequent(array, (item, index) => {
          return Promise.resolve({
              item,
              index
          });
      });
      console.log(results);
})();

