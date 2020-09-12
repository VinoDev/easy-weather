const btnToggleDark = document.querySelector(".btn-toggle-dark");

btnToggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.className);
})