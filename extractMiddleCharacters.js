function getMiddle(s){
    var position;
    var length;

    if(s.length % 2 == 1) {
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1;
        length = 2;
    }

    return s.substring(position, position + length)
}

// More elegant solutions. 
// 1
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// 2
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

// 3 
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

// 4
function getMiddle(s)
{
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}

console.log(getMiddle("lascosasquepasan"))