function countdown() {
    var i = document.getElementById('counter');
    if (parseInt(i.innerHTML)<=-4) {
        location.href = '';
    }
    i.innerHTML = parseInt(i.innerHTML)-1;
}
setInterval(function(){ countdown(); },1100);
