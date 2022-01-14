function descendingOrder(n){

    //    const sort = n.sort((a, b) => a - b);
        const digits = n.toString().split('');
        const sortNumber = digits.slice().sort(function(a, b){
            const c = b - a;
            return c
        })
        final = parseInt(sortNumber.join(''))
        return final
      }
    
      descendingOrder(11593325)
    
      // more clever ways to do it with
      function descendingOrder(n){
        return parseInt(String(n).split('').sort().reverse().join(''))
      }
    
      function descendingOrder(n){
        return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
      }
    
      function descendingOrder(n){
        return parseInt(n.toString().split('').sort().reverse().join(''), 10);
      }