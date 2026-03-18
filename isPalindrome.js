export default function IsPalindrome(n)
{
    let s = "" + n;
    let len = s.length;

    for(let i = 0; i < len / 2; i++)
    {
        if(s[i]!== s[len - i - 1])
            return false;
    }
    return true;
}

let n = 1234321;
if(IsPalindrome(n) === true)
{
    console.log("True");
}
else
{
    console.log("False");
}    