function loadNext(mediaId, playlistId, statusId, countChilds, childs, currentChilds) {
    var video = document.getElementById(mediaId);
    video.addEventListener('ended', function () {
        if (currentChilds < countChilds) {
            for (var i = currentChilds; i < countChilds; i++) {
                if (childs[i].parentNode.id === playlistId) {
                    var childurlSrc = childs[i].getAttribute("urlSrc");
                    document.getElementById(mediaId).setAttribute("src", childurlSrc);
                    document.getElementById(mediaId).setAttribute("autoplay", "true");
                    document.getElementById(statusId).innerHTML = ("Video playing: " + childurlSrc).replace("Public/mp4/", "");
                    currentChilds++;
                    break;
                }
            }
        }
    })
}
function loadFirst(mediaId, playlistId, statusId) {
    var childs = document.getElementsByTagName("li");
    var countChilds = childs.length;
    var currentChilds = 0;
    for (var i = 0; i < countChilds; i++) {
        if (childs[i].parentNode.id === playlistId) {
            var childurlSrc = childs[i].getAttribute("urlSrc");
            document.getElementById(mediaId).setAttribute("src", childurlSrc);
            document.getElementById(mediaId).setAttribute("autoplay", "true");
            document.getElementById(statusId).innerHTML = ("Video playing: " + childurlSrc).replace("Public/mp4/", "");
            currentChilds = i;
            currentChilds++;
            break;
        }
    }
    loadNext(mediaId, playlistId, statusId, countChilds, childs, currentChilds);
}
function loadOnclick(mediaId, playlistId, statusId) {
    var childs = document.getElementsByTagName("li");
    var countChilds = childs.length;
    var currentChilds = 0;
    var urlSrc = window.event.target.getAttribute("urlSrc");
    document.getElementById(mediaId).setAttribute("src", urlSrc);
    document.getElementById(mediaId).setAttribute("autoplay", "true");
    document.getElementById(statusId).innerHTML = ("Video playing: " + urlSrc).replace("Public/mp4/", "");
    for (var i = 0; i < countChilds; i++) {
        if(window.event.target === childs[i]){
            currentChilds = i;
            currentChilds++;
            break;
        }
        else{
            currentChilds++;
        }
    }
    loadNext(mediaId, playlistId, statusId, countChilds, childs, currentChilds);
}