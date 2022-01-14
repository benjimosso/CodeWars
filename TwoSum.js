

 const twoSum = (array, goal) => {

    let numberMap = new Map();
    
    for (let i = 0; i < array.length; i++) {
      element = array[i]
      
      if (numberMap.has(goal - element)) {
        return[i, numberMap.get(goal - element)]
      } else numberMap.set(element, i)
    }
  
    return []
  
   }
  
  
  const twoSum = (array, goal) => {
    let mapOfNumbers = {};
        let twoIndexes = [];
  
        for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i;
    }
  
    for (let i = 0; i < array.length; i++) {
          let target = goal - array[i];
      if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
        twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
      }
        }
  
      return twoIndexes;
  }
  
   twoSum([1,2,3,4,5], 9)