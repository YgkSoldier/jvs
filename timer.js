function countdown() {
    var i = document.getElementById('counter');
    if (parseInt(i.innerHTML)<=-2) {
        location.href = '#link';
    }
    i.innerHTML = parseInt(i.innerHTML)-1;
}
setInterval(function(){ countdown(); },1100);
