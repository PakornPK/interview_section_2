function myFunction(value) {
    if (isNumeric(value)){
        let nums = Number(value)
        if (nums < 0) {
            document.getElementById('inputTxt').value = "1"
            nums = 1
        }else if (isFloat(nums)) {
            document.getElementById('inputTxt').value = String(Math.round(nums))
            nums = Math.round(nums)
        }
        const selector = document.getElementById('selector').value
        const output = document.getElementById('right-col')
        if (selector === "isPrime") {
            output.textContent = isPrime(nums)   
        }else if (selector === "isFibanacci") {
            output.textContent = isFibonacci(nums) 
        }
    }else{ 
        const output = document.getElementById('right-col')
        output.textContent = "Output"
    }
}

function execuet_selector() {
    document.getElementById("inputTxt").onchange()
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}

function isFibonacci( n)
{
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

function isNumeric(value) {
    return /^[+-]?\d+(\.\d+)?$/.test(value);
}

function isPositiveInt(str) {
    var result = true, chr;
    for (var i = 0, n = str.length; i < n; i++) {
        chr = str.charAt(i);
        if ((chr < "0" || chr > "9") && chr != ",") { //not digit or thousands separator
            result = false;
            break;
        };
        if (i == 0 && (chr == "0" || chr == ",")) {  //should not start with 0 or ,
            result = false;
            break;
        };
    };
    return result;
}