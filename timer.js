function countdown() {
    var i = document.getElementById('counter');
    if (parseInt(i.innerHTML)<=0) {
        location.href = '#clickimage';
    }
    i.innerHTML = parseInt(i.innerHTML)-2;
}
setInterval(function(){ countdown(); },1100);
