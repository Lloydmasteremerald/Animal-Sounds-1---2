function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Sdouo3u9l/model.json", modelready);
}

function modelready()
{
    classifier.classify(gotresult);
}

function gotresult(error,results)
{
   console.log("got result");
}