difference = 0
rightWristX = 0
leftWristX = 0


function setup()
{
    video = createCapture(VIDEO);
    video.size(500,400);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    background('#353935');
    text('Bean');
    textSize('Bean', 10, 40);
    fill('#00B98F');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist X = " +leftWristX+ "right Wrist X =" +rightWristX+ "difference" +difference);
        
    }
    }


