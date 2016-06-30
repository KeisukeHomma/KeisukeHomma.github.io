var col;

window.onscroll = function(){
    var scrollTop =
            document.documentElement.scrollTop || // IE、Firefox、Opera
            document.body.scrollTop;              // Chrome、Safari
    col = scrollTop/20 + 200;
    console.log(col);
    document.body.style.background = "hsl(" + col + ", 70%, 45%)";
}

