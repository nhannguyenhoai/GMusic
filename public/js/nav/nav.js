function openNav() {
    document.getElementById("nav").style.width = "200px";
    window.setTimeout(function () {
        document.getElementById("nav__close-icon").innerHTML = "&#8672;";
    }, 500);
}
function closeNav() {
    document.getElementById("nav").style.width = "0";
    window.setTimeout(function () {
        document.getElementById("nav__close-icon").innerHTML = "&#8674;";
    }, 1000);
}