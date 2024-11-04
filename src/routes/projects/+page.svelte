<script>
    import '../../style/style.css';
    import name_logo from '$lib/assets/name-logo.png'
    import star_logo from '$lib/assets/star-logo.png'
    import github from '$lib/assets/github.svg'
    import linkedin from '$lib/assets/linkedin.svg'
    import instagram from '$lib/assets/instagram.svg'
    import email from '$lib/assets/email.svg'
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