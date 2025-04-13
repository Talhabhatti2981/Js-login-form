function validateInputs() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');

    if (username && password) {
        loginBtn.disabled = false;  
    } else {
        loginBtn.disabled = true;   
    }
}


function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 
    console.log("Username:", username);
    console.log("Password:", password);
}