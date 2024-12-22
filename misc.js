function hidemenu() {
    document.getElementById('menu-cp').style.left = '-300px';
}

function showmenu() {
    document.getElementById('menu-cp').style.left = '0px';
}

function closefixedad(event) {
    event.stopPropagation();
    document.getElementById('fixed-ads').style.display = "none";
}

function handleAdClick(event) {
    if (event.target.classList.contains('close-ad')) {
        return;
    }
    window.location.href = "https://aspirewebplix.github.io/";
}