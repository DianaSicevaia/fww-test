function openTab(event, tabName) {
    var i, tab__content, tab__links;
    tab__content = document.getElementsByClassName("tab__content");
    for (i = 0; i < tab__content.length; i++) {
        tab__content[i].style.display = "none";
    }
    tab__links = document.getElementsByClassName("tab__links");
    for (i = 0; i < tab__links.length; i++) {
        tab__links[i].className = tab__links[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}