// const createNav = () =>{
//     let nav = document.querySelector('.nav')

//     nav.innerHTML = `
//          <div class="container">
//                 <img src="./img/logo.png" alt="logo" width="100" height="40">
//               <div class="topnav">
//                 <a href="#home">Home</a>
//                 <a href="#men">Men</a>
//                 <a href="#women">Women</a>
//                 <a href="#children">Children</a>
//                 <a href="#children">Accessories</a>

//               </div>
//             </div>
//             <div class="search mt-4">
//                 <input type="text" class="search-box" placeholder="Search for product...">
//                 <button class="search-btn">Search</button>

//                 <!-- User link and shoppng basket -->
//                 <a href="#" class="ps-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                     width="35" height=""
//                     viewBox="0 0 172 172"
//                     style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#dddddd"></path><g fill="#666666"><path d="M86,7.16667c-43.53845,0 -78.83333,35.29489 -78.83333,78.83333c0,43.53845 35.29489,78.83333 78.83333,78.83333c43.53845,0 78.83333,-35.29489 78.83333,-78.83333c-0.05134,-43.51716 -35.31617,-78.78199 -78.83333,-78.83333zM86,150.5c-13.34117,-0.31002 -26.3071,-4.47684 -37.33117,-11.997c9.51513,-10.5994 23.0874,-16.6543 37.33117,-16.6543c14.24376,0 27.81604,6.05491 37.33117,16.6543c-10.93236,7.7059 -23.95633,11.89137 -37.33117,11.997zM133.97367,128.957c-12.20914,-13.65346 -29.65755,-21.45786 -47.97367,-21.45786c-18.31612,0 -35.76452,7.80439 -47.97367,21.45786c-23.21479,-25.83176 -21.80778,-65.40716 3.18284,-89.52509c24.99062,-24.11793 64.59103,-24.11793 89.58165,0c24.99062,24.11793 26.39763,63.69333 3.18284,89.52509z"></path><path d="M86,43c-15.83216,0 -28.66667,12.8345 -28.66667,28.66667c0,15.83216 12.8345,28.66667 28.66667,28.66667c15.83216,0 28.66667,-12.8345 28.66667,-28.66667c0,-15.83216 -12.8345,-28.66667 -28.66667,-28.66667zM86,86c-7.91608,0 -14.33333,-6.41725 -14.33333,-14.33333c0,-7.91608 6.41725,-14.33333 14.33333,-14.33333c7.91608,0 14.33333,6.41725 14.33333,14.33333c0,7.91608 -6.41725,14.33333 -14.33333,14.33333z"></path></g></g>
//                     </svg>
//                 </a>
                
//                 <a href="#" class="ps-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                     width="35" height=""viewBox="0 0 172 172"style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><path d="M6.235,6.88c-0.1075,0.02688 -0.215,0.06719 -0.3225,0.1075c-3.34594,0.47031 -5.9125,3.30563 -5.9125,6.7725c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88h16.0175c4.28656,0 6.51719,0.88688 8.17,2.365c1.62594,1.46469 2.94281,3.91031 4.085,7.74v0.1075l27.52,110.94c1.03469,3.93719 1.96188,7.98188 4.8375,11.2875c1.1825,1.37063 2.70094,2.48594 4.515,3.3325c-1.98875,2.39188 -3.225,5.38844 -3.225,8.7075c0,7.56531 6.19469,13.76 13.76,13.76c7.56531,0 13.76,-6.19469 13.76,-13.76c0,-2.52625 -0.73906,-4.8375 -1.935,-6.88h21.07c-1.19594,2.0425 -1.935,4.35375 -1.935,6.88c0,7.56531 6.19469,13.76 13.76,13.76c7.56531,0 13.76,-6.19469 13.76,-13.76c0,-3.53406 -1.43781,-6.69187 -3.655,-9.1375c0.38969,-1.04812 0.22844,-2.23062 -0.40312,-3.14437c-0.645,-0.92719 -1.69313,-1.47813 -2.82188,-1.47813h-52.5675c-5.29437,0 -7.36375,-1.12875 -8.815,-2.795c-1.43781,-1.63937 -2.41875,-4.54187 -3.44,-8.385v-0.1075l-2.365,-9.3525h63.1025c1.42438,0 2.71438,-0.91375 3.225,-2.2575l24.725,-65.36c0.40313,-1.06156 0.215,-2.19031 -0.43,-3.1175c-0.645,-0.92719 -1.66625,-1.505 -2.795,-1.505h-105.6725l-7.31,-29.3475c0,-0.06719 0,-0.14781 0,-0.215c-1.31687,-4.43437 -3.01,-8.2775 -6.1275,-11.0725c-3.1175,-2.795 -7.45781,-4.085 -12.7925,-4.085h-22.8975c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM106.64,65.36c1.90813,0 3.44,1.54531 3.44,3.44v13.76h13.76c1.90813,0 3.44,1.54531 3.44,3.44c0,1.89469 -1.53187,3.44 -3.44,3.44h-13.76v13.76c0,1.90813 -1.53187,3.44 -3.44,3.44c-1.90812,0 -3.44,-1.53187 -3.44,-3.44v-13.76h-13.76c-1.89469,0 -3.44,-1.54531 -3.44,-3.44c0,-1.89469 1.54531,-3.44 3.44,-3.44h13.76v-13.76c0,-1.89469 1.53188,-3.44 3.44,-3.44zM89.44,151.36c3.84313,0 6.88,3.03688 6.88,6.88c0,3.84313 -3.03687,6.88 -6.88,6.88c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88zM134.16,151.36c3.84313,0 6.88,3.03688 6.88,6.88c0,3.84313 -3.03687,6.88 -6.88,6.88c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88z"></path></g></g>
//                     </svg>
//                 </a>

//             </div>
    
//     `
// }
// createNav()


