// add js here
let submit = document.getElementById('submit');
let error = document.querySelector('.error');
let wrapper = document.querySelector('.wrapper');
let pass = document.getElementById('password');
let confPass = document.getElementById('confirm');


function submitting() {
    let check = document.getElementById("terms").checked;
    if (check === false) {
        window.alert("You must agree to the terms of service before continuing.");
    } else if (pass.value.length <10) {
        clearErrors();
        randowmPass();
        wrapper.style.height = "600px";
        error.style.display = "inline";
        error.innerText = `Your password is too short! How about ${passSug}.`;
        pass.style.border = "2px solid hsl(333deg, 100%, 44%)"
    } else if (pass.value.length !== confPass.value.length && pass.value.length >=10) {
        clearErrors()
        error.style.display = "inline";
        error.innerText = "Your passwords didn't match! Please provide the same password in each field";
        wrapper.style.height = "600px";
        confPass.style.border = "2px solid hsl(333deg, 100%, 44%)"
    } else {
        window.alert('Success!')
        clearErrors()
    }
}

function clearErrors() {
    
    error.style.display = "none";
    pass.style.border = "1px solid black";
    confPass.style.border = "1px solid black";
    wrapper.style.height = "540px";
}

function randowmPass () {
    let length = 25;
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    passSug = "";
    for (let i = 0, n = char.length; i < length; ++i) {
        passSug += char.charAt(Math.floor(Math.random() * n));
    }
    return passSug;
}
