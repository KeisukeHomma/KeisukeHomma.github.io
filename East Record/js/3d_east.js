/**
 * Created by Jin on 2016/06/10.
 */
var main = function () {
    var scene = new THREE.Scene();
    //cemara setting
    var width  = 600;
    var height = 400;
    var fov    = 60;  //画角
    var near   = 1;   //ニア―クリップの距離
    var far    = 1000;//ファークリップの距離
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far);
    camera.position( 0, 0, 50 );

    //レンダラ―をDOM上に設置
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    //光源を追加
    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, 0.7, 0.7);
    scene.add( directionalLight );

    //物体を追加
    var geometry = new THREE.CubeGeometry( 30, 30, 30);
    var material = new THREE.MeshPhongMaterial( { color: 0xff0000 });
    var mesh = new THREE.Mesh(geometry, material );

    renderer.render( scene, camera );
};

window.addEventListener( 'DOMContentLoaded', main, false );