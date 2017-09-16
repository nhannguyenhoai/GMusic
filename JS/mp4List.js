function loadPlaylistVideo() {
    /**
     * Set default color for all element <li>
     */
    var listElementLI = document.getElementsByTagName("li");
    for (var i = 0; i < listElementLI.length; i++) {
        if (listElementLI[i].parentNode.id === "playlist-video") {
            listElementLI[i].setAttribute("style", "backgroud-color: white;");
        }
    }
    /**
     * Get attribute of element <li> clicked, then change element <video> source
     */
    var urlVS = window.event.target.getAttribute("urlVideoSource");
    document.getElementById("video-area").setAttribute("src", urlVS);
    document.getElementById("video-area").setAttribute("autoplay", "true");
    /**
     * Return set attribute style color of element <li> clicked
     */
    window.event.target.setAttribute("style", "color: cyan;");
}