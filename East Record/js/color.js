var col = 0;

window.onscroll = function(){
    var scrollTop =
            document.documentElement.scrollTop || // IE、Firefox、Opera
            document.body.scrollTop;              // Chrome、Safari
    col = -1 * scrollTop/10 + 200;
    console.log(col);
    document.body.style.background = "hsl(" + col + ", 70%, 45%)";
}

