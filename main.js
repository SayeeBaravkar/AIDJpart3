Maan_meri_jaan = "";
Mahiye_jinna_sona = "";
leftWrist_x = 0;
leftWrist_y =0;
rightWrist_x =0;
rightWrist_y =0;

function play()
{
    song.play();
    song.setVolume();
    song.rate(1);
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.position(420,190);
    background("pink");

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    Image(video,0,0,600,530);
}

function preload()
{
    Maan_meri_jaan = loadSound("MAAN MERI JAAN + AFTERLIFE.mp3");
    Mahiye_jinna_sona = loadSound("Mahiye Jinna Sohna(PagalWorld.com.se).mp3");
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWrist_x + "leftWristY = " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWrist_x + "rightWristY = " + rightWrist_y);
    }
}