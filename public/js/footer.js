const createFooter = () =>{
    let footer = document.querySelector('footer')

    footer.innerHTML = `
    <div class="footer">
        <div class="footer-logo">
            <img src="img/logo.png" alt="" width="370">
        </div>
        <div class="contacts">
            <ul class="contact-list">
                <li class="contact-header">Contacts and support</li>
                <li><a href="">Address</a></li>
                <li><a href="">Phone</a></li>
                <li><a href="">Gmail</a></li>
                <li><a href="">Support</a></li>
            </ul>
            <ul class="icon-list">
                <li class="icon-header">Social links</li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Linkedin</a></li>
            </ul>
        </div>
    </div>

    <div class="about-us">
        <h3>About Us</h3>
        <p class="about-para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam commodi. Vel distinctio id cum minima. Esse impedit eaque a maxime? Iste provident aspernatur totam modi ratione, magnam veritatis, magni nisi itaque voluptatum reiciendis id necessitatibus. Quos similique amet sunt, vel incidunt officiis nam soluta temporibus. Odit placeat eligendi facilis accusamus unde, eaque blanditiis laborum dolor similique maxime. Illum doloribus, laudantium sit quibusdam vel facilis nulla ea voluptas pariatur quia aspernatur quo eveniet maiores rem minus dicta sint! Voluptas ex nobis suscipit voluptates? Delectus cupiditate quidem quia aliquid ipsam possimus repudiandae consequatur totam voluptate distinctio, odio quis consectetur est mollitia?
        </p>
    </div>
    
    `

}

createFooter();