<script>
    import { onMount } from 'svelte';
    import { initSkills, projectScrolling } from '$lib/index.js';
    import '../style/style.css';
    import name_logo from '$lib/assets/name-logo.png'
    import star_logo from '$lib/assets/star-logo.png'
    import headshot from '$lib/assets/headshot.jpg'
    import c from '$lib/assets/c.svg'
    import java from '$lib/assets/java.svg'
    import python from '$lib/assets/python.svg'
    import html from '$lib/assets/html.svg'
    import svelte from '$lib/assets/svelte.svg'
    import d3 from '$lib/assets/d3.svg'
    import sass from '$lib/assets/sass.svg'
    import figma from '$lib/assets/figma.svg'
    import illustrator from '$lib/assets/illustrator.svg'
    import github from '$lib/assets/github.svg'
    import linkedin from '$lib/assets/linkedin.svg'
    import instagram from '$lib/assets/instagram.svg'
    import email from '$lib/assets/email.svg'
    import pharaohs_gambit from '$lib/assets/pharaohs-gambit.png'
    import pos_webapp from '$lib/assets/pos-webapp.png'
    import ray_tracer from '$lib/assets/ray-tracer.png'
    onMount(() => {
        initSkills();
        projectScrolling();
    });
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
                <a data-sveltekit-preload-data="tap" href="./resume">Resume</a>
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
            <p id="intro-paragraph">Hi! I'm Katelyn, a senior computer science student at Texas A&M with a concentration in HCI/d for games + the web, & a minor in graphic design. Following graduation, I will be a student in the RIT M.S. in Computer Science program. Currently, I am looking for summer internships in the game industry! My research interest is in the field of Human-Computer Design & Visualization. I enjoy full-stack software development, game design theory, and digital illustration. It's nice to meet you!</p>
        </div>
    </div>
    <div class="skills">
        <div class="skills-left">
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
                    <ul id="languages-text">
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>LaTeX</li>
                        <li>Scheme</li>
                    </ul>
                </div>
                <div class="technologies">
                    <ul id="technologies-text">
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
                    <ul id="tools-text">
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
        <div class="skills-right">
            <div class="skills-images">
                <img src={c} alt="C++ Programming Language Logo" class="greyscale language-icon">
                <img src={java} alt="Java Programming Language Logo" class="greyscale language-icon">
                <img src={python} alt="Python Programming Language Logo" class="greyscale language-icon">
                <img src={html} alt="HTML Programming Language Logo" class="greyscale language-icon">
                <img src={svelte} alt="Svelte Logo" class="greyscale technology-icon">
                <img src={d3} alt="D3 Logo" class="greyscale technology-icon">
                <img src={sass} alt="Sass Logo" class="greyscale technology-icon">
                <img src={figma} alt="Figma Logo" class="greyscale tool-icon">
                <img src={illustrator} alt="Adobe Illustrator Logo" class="greyscale tool-icon">
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
                <div class="project-image">
                    <img src={pharaohs_gambit} alt="Pharaoh's Gambit Game Screenshot">
                    <div class="overlay"></div>
                    <p class="description">A strategy tabletop game combining elements of chess, Stratego, and the ancient game Senet with scripted game logic, interactive features, and multiplayer gameplay. I engineered the game mechanics, player interactions, and starting configurations to prioritize strategic complexity and engaging dynamics.</p>
                </div>
                <div class="project-tags">
                    <p class="tag language">JavaScript</p>
                    <p class="tag tool">Tabletop Playground</p>
                    <p class="tag tool">Adobe Illustrator</p>
                </div>
            </div>
            <div class="project">
                <h3 class="project-name">Fast Food POS Web Application</h3>
                <div class="project-image">
                    <img src={pos_webapp} alt="Point of Sales System Screenshot">
                    <div class="overlay"></div>
                    <p class="description">A web application that allows for different types of users (administrators, managers, cashiers, cooks, and customers) to track supplies and sales, order food, and view the menu. The system is integrated with weather and translation services, and meets high accessibility standards. I worked in an Agile team to complete this project.</p>
                </div>
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
            <div class="project">
                <h3 class="project-name">Ray Tracer</h3>
                <div class="project-image">
                    <img src={ray_tracer} alt="Spheres Produced by Ray Tracer">
                    <div class="overlay"></div>
                    <p class="description">For a course project, I wrote a recursive ray tracer in OpenGL using C++ & tinyobjloader that can handle spheres, planes, imported .obj geometry, as well as mirrored surfaces and multiple light sources/shadows. The entire scene can render in about 3 seconds in release mode.</p>
                </div>
                <div class="project-tags">
                    <p class="tag language">C++</p>
                    <p class="tag technology">OpenGL</p>
                    <p class="tag technology">tinyobjloader</p>
                </div>
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