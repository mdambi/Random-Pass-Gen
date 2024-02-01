var passwordInput = document.querySelector('.pass-gen-input')

function getPassword() {
    const char = `1234567890'!@#$%^&*()_+-=<>?":{}|,./;[],abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const passLength = 12;
    var password = '';


    //This aliterates between each caracter in variable char above.
    for (let i = 0; i <= passLength; i++) {
        const randomNumber = Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber, randomNumber +1);
    }
    
    passwordInput.value = password; 

}

function copy() {
    const copyText = document.querySelector('.pass-gen-input')
    copyText.select();
    document.execCommand('copy');
    alert('Password copied to clipboard')
}