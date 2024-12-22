
function hide() {
    document.write("<h1>This Page is Currenlty Under Maintenance");
}

function goHome() {
    window.location.href = "../";
}

function dummyButton() {
    alert("This is just a template, this button doesn't do anything. \nTemplates are designed to show how a similar website would look like");
}

function closeleftad() {
    document.getElementById("left-ad").style.display = "none";
}

function closerightad() {
    document.getElementById("right-ad").style.display = "none";
}

function askAdDisplacement() {
    var x = confirm("Do you want to display sample ads in this template?");
    if (x) {
      // do nothing
    } else {
        document.getElementById("left-ad").style.display = "none";
        document.getElementById("right-ad").style.display = "none";

        var adsElements = document.getElementsByClassName('ads');
        for (var i = 0; i < adsElements.length; i++) {
            adsElements[i].style.display = "none";
        }
    }
}