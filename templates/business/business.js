function closefixedad() {
    document.getElementById("fixed-ads").style.display = "none";
}

function hide() {
    document.write("<h1>This Page is Currenlty Under Maintenance");
}

function goHome() {
    window.location.href = "../";
}

function dummyButton() {
    alert("This is just a template, this button doesn't do anything. \nTemplates are designed to show how a similar website would look like");
}

function askAdDisplacement() {
    var x = confirm("Do you want to display sample ads in this template?");
    if (x) {
      // do nothing
    } else {
        document.getElementById("fixed-ads").style.display = "none";

        var adsElements = document.getElementsByClassName('ads');
        for (var i = 0; i < adsElements.length; i++) {
            adsElements[i].style.display = "none";
        }

        var adsElementsDark = document.getElementsByClassName('ads-dark-bg');
        for (var i = 0; i < adsElements.length; i++) {
            adsElementsDark[i].style.display = "none";
        }
    }
}

function mockOrder() {
    alert("This is not a real button in this website, it just shows how templates would look like");
}