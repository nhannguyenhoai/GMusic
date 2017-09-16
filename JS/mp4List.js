function loadFirst(elementId) {
    var childs = document.getElementsByTagName("li");
    var countChilds = childs.length;
    var currentChilds = 0;
    for (var i = 0; i < countChilds; i++) {
        if (childs[i].parentNode.id === elementId) {
            var childurlSrc = childs[i].getAttribute("urlSrc");
            document.getElementById("video-area").setAttribute("src", childurlSrc);
            document.getElementById("video-area").setAttribute("autoplay", "true");
            document.getElementById("status").innerHTML = "Video playing: " + childurlSrc;
            currentChilds = i;
            currentChilds++;
            break;
        }
    }
    var video = document.getElementById("video-area");
    video.addEventListener('ended', function () {
        //if (currentChilds < countChilds) {
        for (var i = currentChilds; i < countChilds; i++) {
            if (childs[i].parentNode.id === elementId) {
                var childurlSrc = childs[i].getAttribute("urlSrc");
                document.getElementById("video-area").setAttribute("src", childurlSrc);
                document.getElementById("video-area").setAttribute("autoplay", "true");
                currentChilds++;
                break;
            }
        }
        //}
    })
}
function loadOnclick(elementId) {
    var urlSrc = window.event.target.getAttribute("urlSrc");
    document.getElementById("video-area").setAttribute("src", urlSrc);
    document.getElementById("video-area").setAttribute("autoplay", "true");
    document.getElementById("status").innerHTML = "Video playing: " + urlSrc;
}