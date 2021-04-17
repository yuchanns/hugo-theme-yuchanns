MathJax = {
    tex: {
        inlineMath: [['$', '$']]
    },
    svg: {
        fontCache: 'global'
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const prefer_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = localStorage.getItem('mode');
    if (!mode && prefer_dark) {
        window.document.body.classList.replace("light", "dark")
    } else if (mode) {
        const old = mode === "dark" ? "light" : "dark"
        window.document.body.classList.replace(old, mode)
    }
})

function toggle_theme() {
    let prefer, old;
    if (window.document.body.classList.contains("light")) {
        prefer = "dark"
        old = "light"

    } else {
        prefer = "light"
        old = "dark"
    }
    window.document.body.classList.replace(old, prefer)
    localStorage.setItem("mode", prefer)
}