const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const specialChar = "@#$%^&*";

const allChars = upperCase + lowerCase + digits + specialChar;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (length != password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

const generateBtn = document.getElementById('generateButton');
generateBtn.addEventListener('click', createPassword);


//Copy password

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}

const copybtn = document.getElementById('copybtn');

copybtn.addEventListener('click', copyPassword);


//copied popup

const copied = document.getElementById('copied');

function copiedPass() {
    const warnText = document.getElementById('warning-text');
    if (passwordBox.value == "") {
        warnText.innerText = "Please Generate the password !!!";
    }else{
        warnText.innerText = "Password Copied Successfully!"
    }
    copied.style.display = 'block'
}
copybtn.addEventListener('click', copiedPass);

function clearWarnText(){
    
}
