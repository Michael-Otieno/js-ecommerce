const createNav = () =>{
    let nav = document.querySelector('.topbar')

    nav.innerHTML =`
    <div class="nav-items">
        <img src="./img/logo.png" alt="logo" width="100" height="40">
        <div class="topnav">
            <a href="#home">Home</a>
            <a href="#men">Suits</a>
            <a href="#women">Shoes</a>
            <a href="#children">Casual</a>
            <a href="#children">Accessories</a>

        </div>
    </div>

   
    
    `
}
createNav()


