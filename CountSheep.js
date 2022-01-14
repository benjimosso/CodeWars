function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    // console.log(arrayOfSheep)
    let count = 0

    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count ++
        }
        
    }
        console.log(count)
    }

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
// Other solutions. 

// 1)

function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }

// 2) 

function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }

// 3) 

let countSheeps = x => x.filter( s => s ).length;


countSheeps(array1)


