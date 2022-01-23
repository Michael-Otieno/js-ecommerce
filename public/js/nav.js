const createNav = () =>{
    let nav = document.querySelector('.navbar')

    nav.innerHTML =`
    <div class="nav">
        <img src="img/logo.png" class="brand-logo" alt="">
        <div class="spacer"></div>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a>
                <img src="img/user.png" alt="" id="user-img">
                <div class="login-logout-popup hide">
                    <p class="account-info">logged in as, <span class='user-name'>name</span></p>
                    <button class="logout-btn" id="user-btn">log out</button>
                </div>
            </a>
            <a href="#"><img src="img/cart.png" alt=""></a>

        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#">Home</a></li>
        <li class="link-item"><a href="#">Suits</a></li>
        <li class="link-item"><a href="#">Shoes</a></li>
        <li class="link-item"><a href="#">Sports</a></li>
        <li class="link-item"><a href="#">Accessories</a></li>


     </ul>
    
    `
}
createNav()

const userImageBtn = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popupText = document.querySelector('.account-info')
const actionBtn = document.querySelector('#user-btn')

userImageBtn.addEventListener('click', () =>{
    userPop.classList.toggle('hide')
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // if user logged in
        popupText.innerHTML = `logged in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click',() => {
            sessionStorage.clear();
            location.reload()
        })
    }else{
        // user is logged out
        popupText.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', ()=>{
            location.href = '/login';
        })
    }
}