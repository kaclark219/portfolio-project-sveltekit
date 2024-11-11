<script>
    import '../../style/style.css';
    import name_logo from '$lib/assets/name-logo.png'
    import star_logo from '$lib/assets/star-logo.png'
    import github from '$lib/assets/github.svg'
    import linkedin from '$lib/assets/linkedin.svg'
    import instagram from '$lib/assets/instagram.svg'
    import email from '$lib/assets/email.svg'
    import pharaohs_gambit from '$lib/assets/pharaohs-gambit.png'
    import pos_webapp from '$lib/assets/pos-webapp.png'
    import marketplace from '$lib/assets/marketplace.png'
    import tea_brand from '$lib/assets/tea-brand.jpg'
    import font_brochure from '$lib/assets/font-brochure.jpg'
    import pos_system from '$lib/assets/pos-system.png'
    import adventure_game from '$lib/assets/adventure-game.png'
    import connect4 from '$lib/assets/connect4.png'
    import ray_tracer from '$lib/assets/ray-tracer.png'
    import punk_mag from '$lib/assets/punk-mag.png'
    import todo from '$lib/assets/todo.png'
    import sizesort from '$lib/assets/sizesort.png'
    import fallback from '$lib/assets/fallback.png'
    import mimc from '$lib/assets/mimc.png'

    let currentImage = fallback;
    const showImage = (imgSrc) => {
        console.log("showing image: ", imgSrc);
        currentImage = imgSrc;
    };
    const hideImage = () => {
        currentImage = fallback;
    };
</script>

<div class="nav-bar">
    <nav>
        <img class="name-logo" src={name_logo} alt="Katelyn Clark">
        <img class="star-logo" src={star_logo} alt="Two stars.">
        <ul id="nav-links">
            <li>
                <a data-sveltekit-preload-data="tap" href="./">Home + About Me</a>
            </li>
            <li>
                <a data-sveltekit-preload-data="tap" href="./projects" style="color: black;">Projects</a>
            </li>
            <li>
                <a data-sveltekit-preload-data="tap" href="./resume">Resume</a>
            </li>
        </ul>
    </nav>
</div>
<div class="web-body">
    <div class="project-nav">
        <h2 id="project-nav-header">My Projects</h2>
        <div class="project-nav-list">
            <ul id="project-nav-list">
                <li><a href="#make-it-make-cents" on:mouseenter={() => showImage(mimc)} on:mouseleave={hideImage}>Make it Make Cents</a></li>
                <li><a href="#pharaohs-gambit" on:mouseenter={() => showImage(pharaohs_gambit)} on:mouseleave={hideImage}>Pharaoh's Gambit</a></li>
                <li><a href="#pos-web-app" on:mouseenter={() => showImage(pos_webapp)} on:mouseleave={hideImage}>Fast Food POS Web Application</a></li>
                <li><a href="#marketplace" on:mouseenter={() => showImage(marketplace)} on:mouseleave={hideImage}>Marketplace Sales System</a></li>
                <li><a href="#tea-brand" on:mouseenter={() => showImage(tea_brand)} on:mouseleave={hideImage}>Tea Brand Creation</a></li>
                <li><a href="#font-brochure" on:mouseenter={() => showImage(font_brochure)} on:mouseleave={hideImage}>Times New Roman Brochure</a></li>
                <li><a href="#pos-system" on:mouseenter={() => showImage(pos_system)} on:mouseleave={hideImage}>Rev's Point-of-Sale System</a></li>
                <li><a href="#adventure-game" on:mouseenter={() => showImage(adventure_game)} on:mouseleave={hideImage}>Text-Based Adventure Game</a></li>
                <li><a href="#connect4" on:mouseenter={() => showImage(connect4)} on:mouseleave={hideImage}>Connect 4 Game</a></li>
                <li><a href="#ray-tracer" on:mouseenter={() => showImage(ray_tracer)} on:mouseleave={hideImage}>Ray Tracer</a></li>
                <li><a href="#todo-extension" on:mouseenter={() => showImage(todo)} on:mouseleave={hideImage}>To-Do Extension</a></li>
                <li><a href="#sizesort" on:mouseenter={() => showImage(sizesort)} on:mouseleave={hideImage}>SizeSort Game</a></li>
            </ul>
        </div>
        <img class="project-image" src={currentImage} alt=""/>
    </div>
    <div class="all-projects">
        <div class="project first" id="make-it-make-cents">
            <div class="project-title">
                <h2>Make It Make Cents (November 2024)</h2>
                <a href="https://devpost.com/software/make-it-make-cents" target="_blank">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/></svg>
                </a>
            </div>
            <div class="project-content">
                <img src={mimc} alt="Web Application Screenshot">
                <div class="project-text">
                    <p class="project-description">Created for Capital One's Challenge at TAMU Datathon 2024, this project was developed as a solution to low financial literacy skills in children and young teens. I designed and programmed this project alone, and won "Best Domain Name from GoDaddy Registry" from Major League Hacking for my submission. This web application features a change saving feature, redeemable rewards for completing goals, and two learning mini-games.</p>
                    <div class="project-tags">
                        <p class="tag language">HTML</p>
                        <p class="tag language">JavaScript</p>
                        <p class="tag technology">Sass</p>
                        <p class="tag technology">Sveltekit</p>
                        <p class="tag technology">Node.js</p>
                        <p class="tag tool">Figma</p>
                        <p class="tag tool">Vercel</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project" id="pharaohs-gambit">
            <div class="project-title">
                <h2>Pharaoh's Gambit (September 2024)</h2>
                <a href="https://mod.io/g/tabletopplayground/m/pharaohs-gambit" target="_blank">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.97 230.70987654320987" style="max-height: 500px" width="217.97" height="230.70987654320987">
                        <g>
                            <path d="M 649.424988 158.076996 C 638.223022 158.076996 628.742981 154.197998 620.982971 146.438995 C 613.223999 138.679993 609.344971 129.302002 609.344971 118.306 C 609.344971 107.309006 613.223999 97.932007 620.982971 90.173004 C 628.742981 82.414001 638.223022 78.533997 649.424988 78.533997 C 660.523987 78.533997 669.978027 82.438995 677.789001 90.25 C 685.598999 98.059998 689.505005 107.412003 689.505005 118.306 C 689.505005 129.199005 685.598999 138.550995 677.789001 146.362 C 669.978027 154.171997 660.523987 158.076996 649.424988 158.076996 Z M 649.424988 138.345993 C 654.768982 138.345993 659.213989 136.444 662.758972 132.641998 C 666.304993 128.839005 668.077026 124.061005 668.077026 118.306 C 668.077026 112.550995 666.304993 107.772003 662.758972 103.968994 C 659.213989 100.167007 654.768982 98.266006 649.424988 98.266006 C 643.875 98.266006 639.353027 100.141006 635.859009 103.891998 C 632.36499 107.643005 630.617981 112.447998 630.617981 118.306 C 630.617981 124.164001 632.36499 128.968002 635.859009 132.718994 C 639.353027 136.470001 643.875 138.345993 649.424988 138.345993 Z M 592.080017 70.658997 C 600.25 70.658997 606.723999 64.184998 606.723999 56.169006 C 606.723999 48.153 600.25 41.678009 592.080017 41.678009 C 584.218018 41.678009 577.588989 48.153 577.588989 56.169006 C 577.588989 64.184998 584.218018 70.658997 592.080017 70.658997 Z M 580.518005 156.843994 L 603.794983 156.843994 L 603.794983 79.766998 L 580.518005 79.766998 Z M 563.10199 157.705002 C 569.453979 157.705002 574.620972 152.537994 574.620972 146.186005 C 574.620972 139.835007 569.453979 134.667007 563.10199 134.667007 C 556.75 134.667007 551.583008 139.835007 551.583008 146.186005 C 551.583008 152.537994 556.75 157.705002 563.10199 157.705002 Z M 501.78302 158.539993 C 512.111023 158.539993 519.664001 153.298004 522.747009 149.136002 L 522.747009 156.843994 L 546.025024 156.843994 L 546.025024 41.229004 L 522.747009 52.222992 L 522.747009 87.475006 C 519.664001 83.313004 512.111023 78.071991 501.78302 78.071991 C 481.588989 78.071991 466.019012 96.416 466.019012 118.306 C 466.019012 140.195007 481.588989 158.539993 501.78302 158.539993 Z M 507.023987 137.421005 C 496.541016 137.421005 489.450012 129.404999 489.450012 118.306 C 489.450012 107.207001 496.541016 99.190994 507.023987 99.190994 C 517.505981 99.190994 524.596985 107.207001 524.596985 118.306 C 524.596985 129.404999 517.505981 137.421005 507.023987 137.421005 Z M 420.390015 158.076996 C 409.187988 158.076996 399.707001 154.197998 391.947998 146.438995 C 384.188995 138.679993 380.309998 129.302002 380.309998 118.306 C 380.309998 107.309006 384.188995 97.932007 391.947998 90.173004 C 399.707001 82.414001 409.187988 78.533997 420.390015 78.533997 C 431.489014 78.533997 440.942993 82.438995 448.753998 90.25 C 456.563995 98.059998 460.470001 107.412003 460.470001 118.306 C 460.470001 129.199005 456.563995 138.550995 448.753998 146.362 C 440.942993 154.171997 431.489014 158.076996 420.390015 158.076996 Z M 420.390015 138.345993 C 425.734009 138.345993 430.178009 136.444 433.723999 132.641998 C 437.269012 128.839005 439.041992 124.061005 439.041992 118.306 C 439.041992 112.550995 437.269012 107.772003 433.723999 103.968994 C 430.178009 100.167007 425.734009 98.266006 420.390015 98.266006 C 414.839996 98.266006 410.317993 100.141006 406.824005 103.891998 C 403.329987 107.643005 401.583008 112.447998 401.583008 118.306 C 401.583008 124.164001 403.329987 128.968002 406.824005 132.718994 C 410.317993 136.470001 414.839996 138.345993 420.390015 138.345993 Z M 302.770996 156.843994 L 302.770996 116.455994 C 302.770996 104.123993 298.299988 97.957001 289.359009 97.957001 C 283.29599 97.957001 278.619995 100.628998 275.330994 105.973007 L 275.330994 156.843994 L 254.212006 156.843994 L 254.212006 79.766998 L 275.330994 79.766998 L 275.330994 85.162994 C 280.264008 80.744003 286.429993 78.533997 293.829987 78.533997 C 302.770996 78.533997 310.170013 81.873993 316.028015 88.554001 C 322.091003 81.873993 330.364014 78.533997 340.846985 78.533997 C 351.32901 78.533997 359.216003 81.720001 364.509003 88.09201 C 369.802002 94.462997 372.447998 102.735992 372.447998 112.910004 L 372.447998 156.843994 L 351.32901 156.843994 L 351.32901 116.455994 C 351.32901 104.123993 346.859009 97.957001 337.917999 97.957001 C 331.648987 97.957001 326.819 100.783997 323.427002 106.436005 C 323.735992 108.388 323.890015 110.546997 323.890015 112.910004 L 323.890015 156.843994 Z" stroke="none"/>
                            <g>
                                <path d="M 173.75415 106.646263 C 166.165329 106.646263 158.779343 105.632446 151.769791 103.778717 C 151.132645 108.007607 150.785034 112.352295 150.785034 116.754951 C 150.785034 124.141006 151.711899 131.266281 153.478745 138.10199 C 133.753693 140.969528 116.230042 150.556854 103.253815 164.45993 C 95.462257 156.349823 86.106613 149.803802 75.679306 145.256317 C 70.436668 160.752472 60.907257 174.279053 48.481377 184.35881 C 66.671257 188.529739 80.226807 204.807922 80.226807 224.272308 L 80.226807 224.388184 L 80.25573 224.388184 C 89.032043 226.589447 98.184944 227.748047 107.62748 227.748047 C 114.289421 227.748047 120.80645 227.139801 127.178703 226.010178 C 127.265648 225.981201 127.352531 225.981201 127.439415 225.981201 C 128.30838 204.199677 146.26651 186.820801 168.308762 186.820801 C 175.95546 186.820801 183.109726 188.935242 189.250305 192.584793 C 190.119202 191.68692 190.930267 190.731064 191.770248 189.775223 C 201.444443 178.826553 209.062241 166.024094 213.928284 151.889282 C 213.899307 151.860291 213.870392 151.831299 213.8414 151.831299 C 202.545135 144.532196 195.043228 131.845612 195.043228 117.392174 C 195.043228 112.410255 195.941162 107.660011 197.563156 103.257355 C 189.974411 105.458679 182.009094 106.646263 173.75415 106.646263 Z" stroke="none"/>
                                <path d="M 194.087433 43.531937 C 192.320587 44.429886 190.466797 45.182907 188.584091 45.820129 C 184.471085 47.210464 180.06842 47.992554 175.463013 47.992554 C 152.841507 47.992554 134.50679 29.657822 134.50679 7.036316 C 134.50679 6.746628 134.535767 6.456985 134.535767 6.167358 C 134.50679 6.167358 134.477875 6.167358 134.448883 6.138367 C 125.846336 4.023926 116.838287 2.894318 107.56958 2.894318 C 100.907639 2.894318 94.390541 3.502563 88.047279 4.632172 C 87.989372 4.632172 87.902428 4.661163 87.844528 4.661163 C 86.917671 26.471664 68.959465 43.850555 46.917286 43.850555 C 39.241596 43.850555 32.058353 41.736099 25.917774 38.057556 C 25.888792 38.086548 25.859875 38.115524 25.830894 38.144501 C 14.96911 49.614532 6.540324 63.372849 1.268711 78.637268 C 1.239792 78.695236 1.239792 78.724167 1.210808 78.782135 C 12.507071 86.081238 20.008993 98.767822 20.008993 113.22126 C 20.008993 128.167068 12.014688 141.230179 0.052213 148.384521 L 0.052213 148.413498 C 0.081195 148.500381 0.110176 148.616241 0.139097 148.703125 C 4.599712 163.04068 11.84092 176.161758 21.254471 187.400055 C 39.994694 177.523102 54.621895 160.955231 61.949989 140.853668 C 61.97897 140.795761 62.00795 140.737793 62.00795 140.679901 C 65.309906 131.584961 67.105736 121.765854 67.105736 111.512321 C 67.105736 104.618713 66.265755 97.898865 64.730637 91.468704 C 82.920509 88.021912 99.053909 78.840027 111.219131 65.892792 C 122.718147 78.144897 137.779831 87.008102 154.753204 90.831467 C 155.042831 90.889374 155.332535 90.947342 155.622162 91.005249 C 161.444077 92.250732 167.497696 92.945877 173.696182 92.945877 C 188.178589 92.945877 201.792038 89.354279 213.754517 83.010941 C 214.160019 82.75029 214.565521 82.460663 215 82.199951 C 210.626328 67.891357 203.443024 54.770294 194.087433 43.531937 Z" stroke="none"/>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="project-content">
                <img src={pharaohs_gambit} alt="Pharaoh's Gambit Game Screenshot">
                <div class="project-text">
                    <p class="project-description">Conceived and created Pharaoh's Gambit, a strategy tabletop game combining elements of chess, Stratego, and the ancient game Senet using JavaScript for game logic and creating interactive features and gameplay automation within Tabletop Playground. Produced all graphic assets, establishing a visually immersive experience rooted in ancient Egyptian aesthetics. Engineered game mechanics, player interactions, and starting configurations, prioritizing strategic complexity and engaging gameplay dynamics.</p>
                    <div class="project-tags">
                        <p class="tag language">JavaScript</p>
                        <p class="tag tool">Tabletop Playground</p>
                        <p class="tag tool">Adobe Illustrator</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project" id="pos-web-app">
            <div class="project-title">
                <h2>Fast Food POS Web Application (March-May 2024)</h2>
                <a href="https://github.com/csce-315-331-2024a/project-3-full-stack-agile-web-project-3-team-11" target="_blank">
                    <svg width="50" height="50" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
                </a>
            </div>
            <div class="project-content">
                <img src={pos_webapp} alt="Point of Sales System Screenshot">
                <div class="project-text">
                    <p class="project-description">Implemented a web application with JavaScript, TypeScript, and stylized HTML in an Agile team to allow authenticated users to view the menu board, place food orders, view/complete kitchen tickets, edit menu items and ingredients, view monetary reports, and edit employee information; focused on front-end with the integration of multiple APIs for user accessibility, such as multilingual translation, high-contrast, built-in zoom features, and an increase in button hit boxes.</p>
                    <div class="project-tags">
                        <p class="tag language">JavaScript</p>
                        <p class="tag language">TypeScript</p>
                        <p class="tag technology">PostgreSQL</p>
                        <p class="tag tool">Agile</p>
                        <p class="tag language">HTML</p>
                        <p class="tag technology">React</p>
                        <p class="tag technology">Node.js</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-container">
        <h2>Have a question for me?</h2>
        <div class="user-fill">
            <input type="text"><br>
            <input type="text"><br>
            <input type="text"><br>
        </div>
        <button class="contact-submission">Submit</button>
    </div>

    <div class="footer">
        <h2 id="footer-title">Find me elsewhere online!</h2>
        <div class="footer-socials">
            <div class="linkedin"><a href="https://www.linkedin.com/in/katelyn-a-clark/" target="_blank"><img src={linkedin} alt="LinkedIn Icon"></a></div>
            <div class="github"><a href="https://github.com/kaclark219" target="_blank"><img src={github} alt="Github Icon"></a></div>
            <div class="instagram"><a href="https://www.instagram.com/k8lyncre8s/" target="_blank"><img src={instagram} alt="Instagram Icon"></a></div>
            <div class="email"><a href="mailto:kaclark219@gmail.com" target="_blank"><img src={email} alt="Email Icon"></a></div>
        </div>
        <p id="footer-copyright">© 2024 Katelyn Clark<br>All Rights Reserved</p>
    </div>
</div>