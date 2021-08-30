function sauceDropdown() {
    document.getElementById('sauceDropdown').classList.toggle("show")
    if (document.getElementById('seasonDropdown').classList.contains('show') || document.getElementById('merchDropdown').classList.contains('show')) {
        document.getElementById('seasonDropdown').classList.remove('show');
        document.getElementById('merchDropdown').classList.remove('show');
    }
}

function seasonDropdown() {
    document.getElementById('seasonDropdown').classList.toggle("show")
    if (document.getElementById('sauceDropdown').classList.contains('show') || document.getElementById('merchDropdown').classList.contains('show')) {
        document.getElementById('sauceDropdown').classList.remove('show');
        document.getElementById('merchDropdown').classList.remove('show');
    }
}

function merchDropdown() {
    document.getElementById('merchDropdown').classList.toggle("show")
    if (document.getElementById('sauceDropdown').classList.contains('show') || document.getElementById('seasonDropdown').classList.contains('show')) {
        document.getElementById('sauceDropdown').classList.remove('show');
        document.getElementById('seasonDropdown').classList.remove('show');
    }
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