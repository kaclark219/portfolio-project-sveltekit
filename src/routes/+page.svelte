<script>
    import '../style/style.css';
    import name_logo from '$lib/assets/name-logo.png'
    import star_logo from '$lib/assets/star-logo.png'
    import resume from '$lib/Resume.pdf'
    import headshot from '$lib/assets/headshot.jpg'
</script>
<div class="nav-bar">
    <nav>
        <img class="name-logo" src={name_logo} alt="Katelyn Clark">
        <img class="star-logo" src={star_logo} alt="Two stars.">
        <ul id="nav-links">
            <li>
                <a data-sveltekit-preload-data="tap" href="./" style="color: black;">Home + About Me</a>
            </li>
            <li>
                <a data-sveltekit-preload-data="tap" href="./projects">Projects</a>
            </li>
            <li>
                <a data-sveltekit-preload-data="tap" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
        </ul>
    </nav>
</div>
<div class="web-body">
    <div class="intro">
        <div class="intro-right">
            <img src={headshot} alt="Headshot of Katelyn with a lake in the background.">
        </div>
        <div class="intro-left">
            <h1 id="intro-title">Software Developer & Game Designer</h1>
            <p id="intro-paragraph">Hi! I'm Katelyn, a senior computer science student at Texas A&M with a concentration in HCI/d for games + the web, & a minor in graphic design. Currently, I'm applying to graduate programs in computer science & am looking for summer internships in the game industry! My research interest is in the field of Human-Computer Design & Visualization. I enjoy full-stack software development, game design theory, and digital illustration. It's nice to meet you!</p>
        </div>
    </div>
    <div class="skills">
        <div class="skills-header">
            <h2 id="skills-title">My Skills</h2>
            <div class="skills-categories">
                <h4 id="languages">Languages</h4>
                <h4 id="technologies">Technologies</h4>
                <h4 id="tools">Tools</h4>
            </div>
        </div>
        <div class="skills-details">
            <div class="languages">
                <ul id="languages">
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div class="technologies">
                <ul id="technologies">
                    <li>Java Swing</li>
                    <li>JavaFX</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Matplotlib</li>
                    <li>Altair</li>
                    <li>Seaborn</li>
                    <li>D3</li>
                    <li>CSS</li>
                    <li>Sass (SCSS syntax)</li>
                    <li>Flask</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Sveltekit</li>
                    <li>OpenGL</li>
                </ul>
            </div>
            <div class="tools">
                <ul id="tools">
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Unix</li>
                    <li>GDB</li>
                    <li>Render</li>
                    <li>Vercel</li>
                    <li>Google Cloud Platform</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                    <li>Tabletop Playground</li>
                    <li>Waterfall Methodology</li>
                    <li>Agile Methodology</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>IntelliJ</li>
                    <li>Anaconda</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="project-spotlight">
        <div class="project-header">
            <h2 id="project-header">Project Spotlight</h2>
        </div>
        <div class="project-list">
            <div class="project">
                <h3 class="project-name">Pharaoh's Gambit</h3>
                <img class="project-image" src="" alt="Pharaoh's Gambit Game Screenshot">
                <p>A strategy tabletop game combining elements of chess, Stratego, and the ancient game Senet with scripted game logic, interactive features, and multiplayer gameplay. I engineered the game mechanics, player interactions, and starting configurations to prioritize strategic complexity and engaging dynamics.</p>
                <div class="project-tags">
                    <p class="tag language">JavaScript</p>
                    <p class="tag tool">Tabletop Playground</p>
                    <p class="tag tool">Adobe Illustrator</p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <h2 id="footer-title">Find me elsewhere online!</h2>
        <div class="footer-socials">
            <a href="https://www.linkedin.com/in/katelyn-a-clark/"><img src="" alt="LinkedIn Icon"></a>
            <a href="https://github.com/kaclark219"><img src="" alt="Github Icon"></a>
            <a href="https://www.instagram.com/k8lyncre8s/"><img src="" alt="Instagram Icon"></a>
            <a href="mailto:kaclark219@gmail.com"><img src="" alt="Email Icon"></a>
        </div>
        <p id="footer-copyright">© 2024 Katelyn Clark</p>
    </div>
</div>