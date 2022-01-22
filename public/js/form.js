// redirect to homepage if user logged in

window.onload = () => {
    if(sessionStorage.user){
        // check if user already exists in storage
        // user existing wont access website from signup section

        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken,user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');
// select inputs

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click',() =>{
    if(name.value.length < 3){
        alert('name must be 3 letters long');
    }
    // to check
    else if(!email.value.length){
        alert('enter your email a valid email address');
    }else if(password.value.length < 8){
        alert('password should be 8 letters long');
    }else if(!number.value.length){
        alert('enter your correct phone number');
    }else if(!Number(number.value) || number.value.length < 10){
        alert('invalidnumber, please enter valid one');
    }else if(!tac.checked){
        alert('you must agree to our terms and conditions');
    }else{
    // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller:false

        })
    
    }
})


// send data function
const sendData = (path, data) =>{
    fetch(path, {
        method:'post',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response =>{
        // console.log(response)
        processData(response);
    });
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        alert(data.alert)
    }else if(data.name){
        // create auth token
        // console.log(data)
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}




// const showAlert = (msg) => {
//     let alertBox = document.querySelector('.alert-box');
//     let alertMsg = document.querySelector('.alert-msg');
//     alertMsg.innerHTML = msg;
//     alertBox.classList.add('show');
//     setTimeout(() => {
//         alertBox.classList.remove('show');
//     }, 3000);
// }