function preload(){

};

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(690 ,360);
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5.version);
  classifier=ml5.imageClassifier("MobileNet",modelLoaded);
};

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotresult);
};
function modelLoaded(){
console.log("model is loaded !");
};
function gotresult(error,result){
if (error){
  console.log(error);
}
else {
  console.log(result);
  document.getElementById("Object").innerHTML=result[0].label;
  document.getElementById("confidence").innerHTML=result[0].confidence;
};
};


