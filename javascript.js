function delayRedirect(event, url) {
    event.preventDefault(); 
    setTimeout(function() {
        window.location.href = url; 
    }, 1000); 
}

window.onload = function() {
    var sobreMimDiv = document.querySelector('.sobre-mim');
    document.body.appendChild(sobreMimDiv);
};