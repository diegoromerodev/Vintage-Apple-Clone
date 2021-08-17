const searchBar = document.querySelector("#search-bar input")
const magnifyingGlass = document.querySelector("#search-bar img")

searchBar.addEventListener("focus", () => {
    searchBar.parentElement.style.flex = 1.7;
    searchBar.parentElement.style.background = "rgba(240,240,240,1)";
    magnifyingGlass.style.filter = "invert(20%)";
})

searchBar.addEventListener("blur", () => {
    searchBar.parentElement.style.flex = 1;
    searchBar.value = "";
    searchBar.parentElement.style.background = "rgba(240,240,240,0.4)";
    magnifyingGlass.style.filter = "invert(100%)";
})
