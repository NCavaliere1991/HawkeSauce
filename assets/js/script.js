function sauceDropdown() {
    document.getElementById('sauceDropdown').classList.toggle("show")
}

function seasonDropdown() {
    document.getElementById('seasonDropdown').classList.toggle("show")
}

function merchDropdown() {
    document.getElementById('merchDropdown').classList.toggle("show")
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}