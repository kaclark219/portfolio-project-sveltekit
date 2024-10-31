<script>
    import '../../style/style.css';
    import name_logo from '$lib/assets/name-logo.png'
    import star_logo from '$lib/assets/star-logo.png'
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