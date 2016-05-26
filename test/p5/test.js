window_load();

var sw;
var sh;

//ウィンドウサイズ変更時に更新
window.onresize = window_load();

//サイズの表示
function window_load() {
    sw = window.innerWidth;
    sh = window.innerHeight;
}

function setup(){
    createCanvas(sw, sh);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

var col = 60;
var now = 0.1;

function draw(){
    ellipse(mouseX, mouseY, 40, 40);
    fill(0, 0, col, 40);
    rect(0, 0, sw, sh/2);
    if(60 <= col && col <= 85){
        col += now;
    }else{
        now = -now;
        if(col < 60){
            col = 60;
        }else {
            col = 85;
        }
    }
}

