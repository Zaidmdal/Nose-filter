nose_x = 0;
nose_y = 0;
function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('Posenet is initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill("red")
    stroke("red")
    circle(nose_x, nose_y, 30);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results) {
     if (results.length > 0)
     {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

     }
}