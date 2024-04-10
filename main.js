
prediction_1="";
prediciton_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';    
 });
}

console.log("ml5 version:" , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-8RKDlpyIU/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth= window.speechSynthesis
    speak_data_1="The first prediction is "+ prediction_1;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1);
    
    synth.speak(utterThis);

}

function check(){
    img=document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML= results[0].label;
        prediction_1 = results[0].label;
        speak();
        if(results[0].label=="ThumbsUp"){
            document.getElementById("update_emoji").innerHTML="Thumbs Up emoji means to agree with someone.";
        }
        if(results[0].label=="Peace"){
            document.getElementById("update_emoji").innerHTML="Peace emoji stands for peace, untiy and on-violence.";
        }
        if(results[0].label=="Perfect"){
            document.getElementById("update_emoji").innerHTML="Perfect Emoji is used when something or someone is perfect, excellent or just right.";
        }
       
        }
        
        }

