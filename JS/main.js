function open_nav() {
    document.getElementById("nav-bar").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(12, 14, 19, 1)";
}

function close_nav() {
    document.getElementById("nav-bar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(12, 14, 19, 1)";
}
function load_about() {
    document.getElementById("main-content").innerHTML =
        '<center><img src="./public/image/about.jpg" width="1200px" height="710px"><br><br>'+
        '<p style="color: cyan">This website designed by Nhan, Qui</p><br>'+
        '<p style="color: cyan">Contact us via email: acc.reg.goog@gmail.com</p><br>'+
        '<p style="color: cyan">Copyright 2017 &copy; Version 1.0</p><br>'+
        '</center>'
}