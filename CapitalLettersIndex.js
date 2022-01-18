var capitals = function (word) {
	
    // This is you want to return the capital letters of the string.
    // var i = 0
    // character = '';
    // while (i < word.length) {
    //     character = word.charAt(i)
    //     if (character === character.toUpperCase()) {
    //         console.log(character)
    //     }
    //     i ++
    // }        


    var position = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/[A-Z]/) != null) {
            position.push(i)
        }
        
    }
    console.log(position)
};

capitals('TeSt')