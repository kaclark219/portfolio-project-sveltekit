console.log('test');

// skills functionality
export function showLanguages() {
    const languages = document.getElementById("languages-text");
    const technologies = document.getElementById("technologies-text");
    const tools = document.getElementById("tools-text");
    if (languages) {
        languages.style.display = "block";
    }
    if (technologies) {
        technologies.style.display = "none";
    }
    if (tools) {
        tools.style.display = "none";
    }
    const languages_button = document.getElementById('languages');
    if (languages_button) {
        languages_button.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
    }
    const technologies_button = document.getElementById('technologies');
    if (technologies_button) {
        technologies_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    const tools_button = document.getElementById('tools');
    if (tools_button) {
        tools_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    let languages_icons = document.getElementsByClassName("language-icon");
    for (let i = 0; i < languages_icons.length; i++) {
        const icon = languages_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.transition = "filter 0.3s ease";
            icon.style.filter = "grayscale(100%) drop-shadow(5px 5px 5px #E2C99F)";
        }
    }
    let technologies_icons = document.getElementsByClassName("technology-icon");
    for (let i = 0; i < technologies_icons.length; i++) {
        const icon = technologies_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
    let tools_icons = document.getElementsByClassName("tool-icon");
    for (let i = 0; i < tools_icons.length; i++) {
        const icon = tools_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
}
export function showTechnologies() {
    const languages = document.getElementById("languages-text");
    const technologies = document.getElementById("technologies-text");
    const tools = document.getElementById("tools-text");
    if (languages) {
        languages.style.display = "none";
    }
    if (technologies) {
        technologies.style.display = "block";
    }
    if (tools) {
        tools.style.display = "none";
    }
    const languages_button = document.getElementById('languages');
    if (languages_button) {
        languages_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    const technologies_button = document.getElementById('technologies');
    if (technologies_button) {
        technologies_button.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
    }
    const tools_button = document.getElementById('tools');
    if (tools_button) {
        tools_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    let languages_icons = document.getElementsByClassName("language-icon");
    for (let i = 0; i < languages_icons.length; i++) {
        const icon = languages_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
    let technologies_icons = document.getElementsByClassName("technology-icon");
    for (let i = 0; i < technologies_icons.length; i++) {
        const icon = technologies_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.transition = "filter 0.3s ease";
            icon.style.filter = "grayscale(100%) drop-shadow(5px 5px 5px #A484B9)";
        }
    }
    let tools_icons = document.getElementsByClassName("tool-icon");
    for (let i = 0; i < tools_icons.length; i++) {
        const icon = tools_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
}
export function showTools() {
    const languages = document.getElementById("languages-text");
    const technologies = document.getElementById("technologies-text");
    const tools = document.getElementById("tools-text");
    if (languages) {
        languages.style.display = "none";
        languages.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25);"
    }
    if (technologies) {
        technologies.style.display = "none";
        technologies.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25);"
    }
    if (tools) {
        tools.style.display = "block";
        tools.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
    }
    const languages_button = document.getElementById('languages');
    if (languages_button) {
        languages_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    const technologies_button = document.getElementById('technologies');
    if (technologies_button) {
        technologies_button.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.25)";
    }
    const tools_button = document.getElementById('tools');
    if (tools_button) {
        tools_button.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
    }
    let languages_icons = document.getElementsByClassName("language-icon");
    for (let i = 0; i < languages_icons.length; i++) {
        const icon = languages_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
    let technologies_icons = document.getElementsByClassName("technology-icon");
    for (let i = 0; i < technologies_icons.length; i++) {
        const icon = technologies_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.filter = "grayscale(100%)";
        }
    }
    let tools_icons = document.getElementsByClassName("tool-icon");
    for (let i = 0; i < tools_icons.length; i++) {
        const icon = tools_icons[i];
        if (icon instanceof HTMLElement) {
            icon.style.transition = "filter 0.3s ease";
            icon.style.filter = "grayscale(100%) drop-shadow(5px 5px 5px #8B9FCB)";
        }
    }
}

export function initSkills() {
    const languages_button = document.getElementById('languages');
    if (languages_button) {
        languages_button.onclick = showLanguages;
    }
    const technologies_button = document.getElementById('technologies');
    if (technologies_button) {
        technologies_button.onclick = showTechnologies;
    }
    const tools_button = document.getElementById('tools');
    if (tools_button) {
        console.log("tools button found");
        tools_button.onclick = showTools;
    }
    showLanguages();
}

export function projectScrolling() {
    const project_list = document.querySelector('.project-list');
        const handleWheel = (event) => {
            event.preventDefault();
            project_list.scrollBy({
                left: event.deltaY,
                behavior: 'smooth'
            });
        };
        project_list.addEventListener('wheel', handleWheel);
        return () => {
            project_list.removeEventListener('wheel', handleWheel);
        };
}