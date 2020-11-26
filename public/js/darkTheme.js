const btnToggleDark = document.querySelector(".btn-toggle-dark");

btnToggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    btnToggleDark.classList.toggle("btn-toggle-dark-on")
    localStorage.setItem("theme", document.body.className);
})

if(currentTheme === "dark-theme")
    btnToggleDark.classList.add("btn-toggle-dark-on")