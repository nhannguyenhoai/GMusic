function getAllChildByParentClassname(childTag, parentClassname) {
    var childsByTag = document.getElementsByTagName(childTag);
    var childsByParent = [];
    var index = 0;
    for (var i = 0; i < childsByTag.length; i++) {
        if (childsByTag[i]. parentNode.className  === parentClassname) {
            childsByParent[index] = childsByTag[i];
            index++;
        }
    }
    return childsByParent;
}

function setDefaultColor(childs, color) {
    for (var i = 0; i < childs.length; i++) {
        childs[i].setAttribute("style", "color: " + color);
    }
}

function changeNavColor(navListLiId, defaultColor, color) {
    var navOnClick = window.event.target;
    var navChilds = getAllChildByParentClassname('a', navListLiId);
    setDefaultColor(navChilds, defaultColor);
    for (var i = 0; i < navChilds.length; i++) {
        if (navChilds[i] === navOnClick) {
            navChilds[i].setAttribute("style", "color: " + color);
        }
    }
}