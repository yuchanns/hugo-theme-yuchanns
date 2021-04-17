MathJax = {
    tex: {
        inlineMath: [['$', '$']]
    },
    svg: {
        fontCache: 'global'
    }
};

var prefer_dark = window.matchMedia("(prefers-color-scheme: dark)").matches

window.onload = function () {
    if (prefer_dark) {
        window.document.body.classList.replace("light", "dark")
    } else {
        window.document.body.classList.replace("dark", "light")
    }
}

function toggle_theme() {
    if (window.document.body.classList.contains("light")) {
        window.document.body.classList.replace("light", "dark")
    } else {
        window.document.body.classList.replace("dark", "light")
    }
}