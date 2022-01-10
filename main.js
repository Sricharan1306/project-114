function preload(){

}
function setup(){
    place=createCanvas(350,350);
    place.position(450,300);
    snap=createCapture(VIDEO);
    snap.hide();
    poseNet=ml5.poseNet(snap,modeloaded);
    poseNet.on("pose",getresult);
}
function draw(){
    image(snap,0,0,350,300);
    
}
function take_snapshot(){
    save("Clown-Nose-Filter");
}
function modeloaded(){
    console.log("PoseNet is loaded");
}
function getresult(result){
    if(result.length>0){
        console.log(result);
        console.log("x position="+result[0].pose.nose.x);
        console.log("y position="+result[0].pose.nose.y);
    }
}