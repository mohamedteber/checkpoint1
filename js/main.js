var mytextarea = document.getElementById("text");

function makebold() {

    if (mytextarea.style.fontWeight != "bold") {
        mytextarea.style.fontWeight = "bold";
    } else {
        mytextarea.style.fontWeight = "normal";
    }
}

function makeitalic() {
    if (mytextarea.style.fontStyle != "italic") {
        mytextarea.style.fontStyle = "italic";
    } else {
        mytextarea.style.fontStyle = "normal";
    }
}

function makeunderline() {
    if (mytextarea.style.textDecoration != "underline") {
        mytextarea.style.textDecoration = "underline";
    } else {
        mytextarea.style.textDecoration = "none";
    }
}

function dropdownlist() {
    document.getElementById("text").style.fontSize = document.getElementById("size").value;
}

function dropdownlistfamily() {
    document.getElementById("text").style.fontFamily = document.getElementById("family").value;
}