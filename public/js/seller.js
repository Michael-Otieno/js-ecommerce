let loader = document.querySelector('.loader');

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
            becomeSellerElement.classList.remove('hide');
            }else{
            productListingElement.classList.remove('hide');                
            }
        }else{
            location.replace('/login');
        }
    }else{
        location.replace('/login');
    }
}

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

// form submit

const applyFormBtn = document.querySelector('#apply-form-btn');
const businessName = document.querySelector('#business-name');
const address = document.querySelector('#business-add')
const about = document.querySelector('#about');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const legitInfo = document.querySelector('#legitInfo');

applyFormBtn.addEventListener('click',()=>{
    if(!businessName.value.length || !address.value.length || !about.value.length || !number.value.length){
            alert('fill in all the inputs')
        }else if(!tac.checked || !legitInfo.checked){
            alert('you must agree to our terms and conditions');
        }else{
            // make server request
            loader.style.display = 'block';
            sendData('/seller',{
                name:businessName.value,
                address:address.value,
                about:about.value,
                number:number.value,
                tac:tac.checked,
                legitInfo:legitInfo.checked,
                email:JSON.parse(sessionStorage.user).email
            })
        }

})