var currentIndex = 0;
function getChildsBaseOnParent(childTag, parentId) {
    var ElementsByChildTag = document.getElementsByTagName(childTag);
    var childs = [];
    var index = 0;
    for (var i = 0; i < ElementsByChildTag.length; i++) {
        if (ElementsByChildTag[i].parentNode.id === parentId) {
            childs[index] = ElementsByChildTag[i];
            index++;
        }
    }
    return childs;
}
function setDefaultColor(childs) {
    for (var i = 0; i < childs.length; i++) {
        childs[i].setAttribute("style", "color: cyan");
    }
}
function setStatus(statusId, urlSrc) {
    document.getElementById(statusId).innerHTML = ("Video playing: " + urlSrc).replace("Public/mp4/", "");
}
function setMediaSrc(media, urlSrc, statusId) {
    document.getElementById(media).setAttribute("src", urlSrc);
    document.getElementById(media).setAttribute("autoplay", "true");
    setStatus(statusId, urlSrc)
}
function loadFirstMedia(media, playlistId, statusId) {
    currentIndex = 0;
    var childs = getChildsBaseOnParent("li", playlistId);
    setDefaultColor(childs);
    var urlSrc = childs[currentIndex].getAttribute("urlSrc");
    childs[currentIndex].setAttribute("style", "color: red");
    setMediaSrc(media, urlSrc, statusId);
    currentIndex++;
    var md = document.getElementById(media);
    md.addEventListener("ended", function () {
        if (currentIndex < childs.length) {
            setDefaultColor(childs);
            childs[currentIndex].setAttribute("style", "color: red");
            setMediaSrc(media, childs[currentIndex].getAttribute("urlSrc"), statusId);
            currentIndex++;
        }
        else {
            currentIndex = 0;
        }
    });
}
function loadOnclick(media, playlistId, statusId) {
    var childIsClicked = window.event.target;
    var childs = getChildsBaseOnParent("li", playlistId);
    setDefaultColor(childs);
    for (var i = 0; i < childs.length; i++) {
        if (childs[i] === childIsClicked) {
            currentIndex = i;
        }
    }
    childs[currentIndex].setAttribute("style", "color: red");
    setMediaSrc(media, childs[currentIndex].getAttribute("urlSrc"), statusId);
    currentIndex++;
}
function loadNextMedia(media, playlistId, statusId) {
    var childs = getChildsBaseOnParent("li", playlistId);
    if (currentIndex < childs.length) {
        setDefaultColor(childs);
        childs[currentIndex].setAttribute("style", "color: red");
        setMediaSrc(media, childs[currentIndex].getAttribute("urlSrc"), statusId);
        currentIndex++;
    }
    else {
        setDefaultColor(childs);
        loadFirstMedia(media, playlistId, statusId);
    }
}
function loadPrevousMedia(media, playlistId, statusId) {
    console.log(currentIndex);
    var childs = getChildsBaseOnParent("li", playlistId);
    if (currentIndex - 1 > 0) {
        console.log(currentIndex);
        setDefaultColor(childs);
        currentIndex -= 2;
        childs[currentIndex].setAttribute("style", "color: red");
        setMediaSrc(media, childs[currentIndex].getAttribute("urlSrc"), statusId);
        currentIndex++;
    }
    else {
        currentIndex = childs.length - 1;
        console.log(currentIndex);
        setDefaultColor(childs);
        loadNextMedia(media, playlistId, statusId);
    }
}