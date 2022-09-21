function solution(str){
    var split = str.split("")
    console.log(split)

    var reverse = split.reverse()
    console.log(reverse)

    var join = reverse.join("")
    console.log(join)

    console.log(str.split('').reverse().join(''))
}

solution("hello")