
const fieldContainer = document.getElementById('fieldContainer');
const emailField = fieldContainer.children[1];
const passwordField = fieldContainer.children[2];
const loginButton = fieldContainer.children[3];

loginButton.addEventListener('click',function(){
    const email = emailField.value;
    const password =passwordField.value;
    if(email === 'forhad@gmail.com' && password === 'forhad07'){
        window.location.href ='bank-inside.html'
    }
    else{
        alert('Please provide valid email password')
    }

    // console.log(email,password)
})