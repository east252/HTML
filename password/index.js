function generateRandomString(characters, length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

const lowers = "abcdefghijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";

let password1 = generateRandomString(lowers, 4);
let password2 = generateRandomString(uppers, 4);
let password3 = generateRandomString(numbers, 4);
let password4 = generateRandomString(symbols, 4);

let password5 = password1 + password2 + password3 + password4;
let points = password5.split('');
points.sort(function() { return 0.5 - Math.random() });
password5 = points.join('');

console.log(password5);

function myFunction() {
    document.getElementById("demo").innerHTML = ("Your random password is: " + password5);
}

function refresh(){
    location.reload()
}