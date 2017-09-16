function loadPlaylistVideo() {
    /**
     * Set default color for all element <li>
     */
    var listElementLI = document.getElementsByTagName("li");
    for (var i = 0; i < listElementLI.length; i++) {
        if (listElementLI[i].parentNode.id === "playlist_video") {
            listElementLI[i].setAttribute("style", "color:#0BF521;");
        }
    }
    /**
     * Get attribute of element <li> clicked, then change element <video> source
     */
    var urlVS = window.event.target.getAttribute("urlVideoSource");
    document.getElementById("video_area").setAttribute("src", urlVS);
    document.getElementById("video_area").setAttribute("autoplay", "true");
    /**
     * Return set attribute style color of element <li> clicked
     */
    window.event.target.setAttribute("style", "color: blue;");
}