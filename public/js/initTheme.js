const currentTheme = localStorage.getItem("theme");
if(currentTheme === "dark-theme")
    document.body.classList.add("dark-theme");