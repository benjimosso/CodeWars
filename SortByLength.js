function sortByLength (array) {
    const sorted = array.sort(function(a,b){
        return a.length - b.length;
    })
    console.log(sorted);
  };

  sortByLength([ 'I',  'Beg' ,  'Life', 'To' ])

  // shortest way to do it

  function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

  let sortByLength = arr => arr.sort((a,b) => a.length - b.length);
