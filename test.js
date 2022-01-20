function checkExam (correct, answer) {
    let score = 0;

    for (let i = 0; i < correct.length && answer[i]; i++) {
        console.log(answer[3]);
        if (correct[i] !== answer[i]) {
            // console.log(correct[i], answer[i])
            score = score - 1
        }
        else if (correct[i] === answer[i]) {
            // console.log(correct[i], answer[i])
            score = score + 4
        } 
        // console.log(score)
    }
    // console.log(score)
}

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  "D"])
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])
// checkExam(["a","c","a","a","a","a","c","b","b","c"], 
//         ["a","a","c","","","c","a","b","","c"])


