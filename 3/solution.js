const stack = [];


function matchPair(s)
{
    if (s[0] === '(') { return s[1] === ')'; }
    else if (s[0] === '[') { return s[1] === ']'; }
    else if (s[0] === '{') { return s[1] === '}'; }
}
function solve(s)
{
    for (let i = 0; i < s.length; ++i)
    {
        if (s[i] === ']' || s[i] === ')' || s[i] === '}')
        {
            let elem = stack.pop();
            if (!matchPair(elem + s[i]))
            {
                return false;
            }
        }
        else
        {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}


console.log(solve('()'));
console.log(solve('([])'));
console.log(solve('()[]{}'));
console.log(solve('(]'));