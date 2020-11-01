// we have string S contains ["{", "}", "[", "]", "(", ")"] and you have to check if and opening bracket has it's
// own closing bracket for Example: (){} => Success, ()]{} => 2 (second index which does not have closing bracket),

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(brackets_code(line));
    process.exit();
}


function brackets_code(S) { // {[} => 3,  foo(bar[i); => 10,
    S = S.split("");
    let stack = [];

    for (let i = 0; i < S.length; i++) {
        let pair;
        if (S[i] == "(" || S[i] == "{" || S[i] == "[") stack.push({v: S[i], c: i});
        else if (S[i] == ")" || S[i] == "}" || S[i] == "]") {
            if (!stack[stack.length-1]) return i +1;
            pair = stack[stack.length-1].v + S[i];
            if (pair == "()" || pair == "{}" || pair == "[]") stack.pop();
            else return i+1;
        }
    }

    if (stack.length >= 1) return stack[stack.length-1].c +1;
    return "Success";
}
