var currentIndex = 0;


function getChildsBaseOnParent(childTag, parentId) {
    // body...
    var ElementByChildsTag = document.getElementsByTagName(childTag);
    var childs = [];
    var index = 0;
    for (var i = 0; i < ElementByChildsTag.length; i++) {
        if (ElementByChildsTag[i].parentNode.id === parentId) {
            childs[index] = ElementByChildsTag[i];
            index++;
        }
    }
    return childs;
}

function setDefaultColor(childs) {
    // body...
    for (var i = 0; i < childs.length; i++)
        childs[i].setAttribute("style", "color:cyan");
}


function setStatus(mp3url, statusId) {
    // body...
    document.getElementById(statusId).innerHTML = ("Playing " + mp3url).replace("Public/mp3/", "");
}


function setMP3(mp3, mp3url, statusId) {
    // body...
    document.getElementById(mp3).setAttribute("src", mp3url);
    document.getElementById(mp3).setAttribute("autoplay", "true");
    setStatus(mp3url, statusId);
}

function loadFirst(mp3, playlistId, statusId) {
    // body...
    currentIndex = 0;
    var childs = getChildsBaseOnParent("li", playlistId);
    setDefaultColor(childs);
    var mp3url = childs[currentIndex].getAttribute("mp3url");
    childs[currentIndex].setAttribute("style", "color:red");
    currentIndex++;
    setMP3(mp3, mp3url, statusId);
    var mp3Song = document.getElementById(mp3);
    mp3Song.addEventListener("ended", function() {
        // body...
        if (currentIndex < childs.length) {
            setDefaultColor(childs);
            childs[currentIndex].setAttribute("style", "color:red");
            setMP3(mp3, childs[currentIndex].getAttribute("mp3url"), statusId);
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    });
}


function loadOnClick(mp3, playlistId, statusId) {
    // body...
    var childIsClicked = window.event.target;
    var childs = getChildsBaseOnParent("li", playlistId);
    setDefaultColor(childs);
    for (var i = 0; i < childs.length; i++) {
        if (childs[i] === childIsClicked)
            currentIndex = i;
    }
    childs[currentIndex].setAttribute("style", "color:red");
    setMP3(mp3, childs[currentIndex].getAttribute("mp3url"), statusId);
    currentIndex++;
}



function loadNextMP3(mp3, playlistId, statusId) {
    // body...
    var childs = getChildsBaseOnParent("li", playlistId);
    if (currentIndex < childs.length) {
        console.log(currentIndex);
        setDefaultColor(childs);
        childs[currentIndex].setAttribute("style", "color:red");
        setMP3(mp3, childs[currentIndex].getAttribute("mp3url"), statusId);
        currentIndex++;
        console.log(currentIndex);
    } else {
        setDefaultColor(childs);
        loadFirst(mp3, playlistId, statusId);
    }
}

function loadPreviousMP3(mp3, playlistId, statusId) {
    // body...
    var childs = getChildsBaseOnParent("li", playlistId);
    if (currentIndex - 1 > 0) {
        setDefaultColor(childs);
        currentIndex -= 2;
        childs[currentIndex].setAttribute("style", "color:red");
        setMP3(mp3, childs[currentIndex].getAttribute("mp3url"), statusId);
        currentIndex++;
    } else {
        currentIndex = childs.length - 1;
        setDefaultColor(childs);
        loadNextMP3(mp3, playlistId, statusId);
    }
}