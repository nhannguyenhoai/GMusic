function loadPlaylistVideo() {
    var urlVS = window.event.target.getAttribute("urlVideoSource");
    document.getElementById("video_area").setAttribute("src",urlVS);
    document.getElementById("video_area").setAttribute("autoplay", "true");
    window.event.target.setAttribute("style", "color: purple;");
}