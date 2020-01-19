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
$(document).ready(function () {

    $("a").css("color", "blue");

    $("#B").click(function () {
        $("textarea").css("color", "red");
    });
    $("#B").keypress(function () {
        $("textarea").css("color", "blue");
    })
    $("#hide").click(function () {
        $("h2").hide();
    })
    $("#show").click(function () {
        $("h2").show();
    })
    $("#toggle").click(function () {
        $("h2").toggle();
    })

    $("#fadetoggle").click(function () {
        $("#first").fadeToggle();
        $("#second").fadeToggle("slow");
        $("#third").fadeToggle(3000);

    })

    $("button").css("opacity", "0");

    $("#main").click(function () {
        $("#child").slideToggle("slow");
    })

    $(".courses").mouseenter(function () {
        $(this).css("opacity", "0.5");
        $("#" + this.id + " button").css("opacity", "1");

    })
    $(".courses").mouseleave(function () {
        $(this).css("opacity", "1");
        $("#" + this.id + " button").css("opacity", "0");
    })

})