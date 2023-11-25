let passwordEl = document.getElementById("password");

let characters = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '!@#$%^&*()_+[]{}|;:,.<>?/'
];

let allcharacters = characters.join('').split('');

function generate(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let pass = Math.floor(Math.random() * allcharacters.length);
        password += allcharacters[pass];
    }
    passwordEl.value = password;
}

function copy() {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard: " + copyText.value);
}