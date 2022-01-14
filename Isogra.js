function isIsogram(str){
    //...
    str = str.toLowerCase()
    str = Array.from(str)
    
    const CheckDuplicates = str.some(
        (val, i) => str.indexOf(val) !== i
        )
        if (CheckDuplicates) {
            console.log(false)
        } else console.log(true)
  }


  // Variations. 

  // 1)
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.

// 2)
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }


  // 3)

  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }


  isIsogram('TES')


  