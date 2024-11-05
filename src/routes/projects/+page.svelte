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
    import modio from '$lib/assets/modio.svg'

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
                <li><a href="#pharaohs-gambit" on:mouseenter={() => showImage(pharaohs_gambit)} on:mouseleave={hideImage}>Pharaoh's Gambit</a></li>
                <li><a href="#pos-web-app" on:mouseenter={() => showImage(pos_webapp)} on:mouseleave={hideImage}>Fast Food POS Web Application</a></li>
                <li><a href="#marketplace" on:mouseenter={() => showImage(marketplace)} on:mouseleave={hideImage}>Marketplace Sales System</a></li>
                <li><a href="#tea-brand" on:mouseenter={() => showImage(tea_brand)} on:mouseleave={hideImage}>Tea Brand Creation</a></li>
                <li><a href="#font-brochure" on:mouseenter={() => showImage(font_brochure)} on:mouseleave={hideImage}>Times New Roman Brochure</a></li>
                <li><a href="#pos-system" on:mouseenter={() => showImage(pos_system)} on:mouseleave={hideImage}>Rev's Point-of-Sale System</a></li>
                <li><a href="#adventure-game" on:mouseenter={() => showImage(adventure_game)} on:mouseleave={hideImage}>Text-Based Adventure Game</a></li>
                <li><a href="#connect4" on:mouseenter={() => showImage(connect4)} on:mouseleave={hideImage}>Connect 4 Game</a></li>
                <li><a href="#ray-tracer" on:mouseenter={() => showImage(ray_tracer)} on:mouseleave={hideImage}>Ray Tracer</a></li>
                <li><a href="#punk-mag" on:mouseenter={() => showImage(punk_mag)} on:mouseleave={hideImage}>Punk Magazine Spread</a></li>
                <li><a href="#todo-extension" on:mouseenter={() => showImage(todo)} on:mouseleave={hideImage}>To-Do Extension</a></li>
                <li><a href="#sizesort" on:mouseenter={() => showImage(sizesort)} on:mouseleave={hideImage}>SizeSort Game</a></li>
            </ul>
        </div>
        <img class="project-image" src={currentImage} alt=""/>
    </div>
    <div class="all-projects">
        <div class="project" id="pharaohs-gambit">
            <div class="project-title">
                <h2>Pharaoh's Gambit (September 2024)</h2>
                <a href="https://mod.io/g/tabletopplayground/m/pharaohs-gambit" target="_blank"><img src={modio} alt="Mod.io Icon"></a>
            </div>
            <img src={pharaohs_gambit} alt="Pharaoh's Gambit Game Screenshot">
            <p class="project-description">Conceived and created Pharaoh's Gambit, a strategy tabletop game combining elements of chess, Stratego, and the ancient game Senet using JavaScript for game logic and creating interactive features and gameplay automation within Tabletop Playground. Produced all graphic assets, establishing a visually immersive experience rooted in ancient Egyptian aesthetics. Engineered game mechanics, player interactions, and starting configurations, prioritizing strategic complexity and engaging gameplay dynamics.</p>
            <div class="project-tags">
                <p class="tag language">JavaScript</p>
                <p class="tag tool">Tabletop Playground</p>
                <p class="tag tool">Adobe Illustrator</p>
            </div>
        </div>
        <div class="project" id="pos-web-app">
            <div class="project-title">
                <h2>Fast Food POS Web Application (March-May 2024)</h2>
                <a href="https://github.com/csce-315-331-2024a/project-3-full-stack-agile-web-project-3-team-11" target="_blank"><img src={github} alt="Github Icon"></a>
            </div>
            <img src={pos_webapp} alt="Point of Sales System Screenshot">
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