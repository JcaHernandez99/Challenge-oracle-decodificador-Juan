const inputText = document.getElementById('input-text');
const encryptedText = document.getElementById('encrypted-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const historyList = document.getElementById('history-list');

encryptBtn.addEventListener('click', () => {
    const input = inputText.value.toLowerCase();
    const encrypted = encryptText(input);
    encryptedText.value = encrypted;
    addToHistory(input, encrypted);
});

decryptBtn.addEventListener('click', () => {
    const encrypted = encryptedText.value.toLowerCase();
    const decrypted = decryptText(encrypted);
    inputText.value = decrypted;
    addToHistory(encrypted, decrypted);
});

copyBtn.addEventListener('click', () => {
    encryptedText.select();
    document.execCommand('copy');
});

function encryptText(input) {
    let encrypted = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        switch (char) {
            case 'e':
                encrypted += 'enter';
                break;
            case 'i':
                encrypted += 'imes';
                break;
            case 'a':
                encrypted += 'ai';
                break;
            case 'o':
                encrypted += 'ober';
                break;
            case 'u':
                encrypted += 'ufat';
                break;
            default:
                encrypted += char;
                break;
        }
    }
    return encrypted;
}

function decryptText(encrypted) {
    let decrypted = '';
    let i = 0;
    while (i < encrypted.length) {
        const char = encrypted.substr(i, 1);
        if (char === 'e' && encrypted.substr(i, 5) === 'enter') {
            decrypted += 'e';
            i += 4;
        } else if (char === 'i' && encrypted.substr(i, 4) === 'imes') {
            decrypted += 'i';
            i += 3;
        } else if (char === 'a' && encrypted.substr(i, 2) === 'ai') {
            decrypted += 'a';
            i += 1;
        } else if (char === 'o' && encrypted.substr(i, 4) === 'ober') {
            decrypted += 'o';
            i += 3;
        } else if (char === 'u' && encrypted.substr(i, 4) === 'ufat') {
            decrypted += 'u';
            i += 3;
        } else {
            decrypted += char;
        }
        i++;
    }
    return decrypted;
}

function addToHistory(input, output) {
    const listItem = document.createElement('li');
    listItem.textContent = `${input} => ${output}`;
    historyList.appendChild(listItem);
}
