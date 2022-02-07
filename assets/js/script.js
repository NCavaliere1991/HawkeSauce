const cart = []

function dropdown() {
    [].slice.call(document.getElementsByClassName("dropdown-content")).map(function (el) {
        if (this.event.target.nextElementSibling !== el)
            el.classList.remove("show");
    });

    this.event.target.nextElementSibling.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        [].slice.call(document.getElementsByClassName("dropdown-content")).map(function (el) {
            el.classList.remove("show");
        });
    }
}

function handleClick(e) {
    cart.push(e.target.innerHTML)
    console.log(cart);
    alert(`${e.target.innerHTML} added to cart`)
}