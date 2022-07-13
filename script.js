var output = document.getElementById("output");
var start = document.getElementById("start");
var ArabicLang = document.getElementById("ArabicLang");
var speechRecognition = speechRecognition || webkitSpeechRecognition;
var recognizer = new speechRecognition();
recognizer.lang = 'ar';

ArabicLang.onchange = function() {
    recognizer.lang = ArabicLang.value;
}

//controls
start.onclick = function() {
    recognizer.start();
}
// to write:
recognizer.onresult = function(event) {
    var Textbox = event.results[0][0].transcript;
    output.value = Textbox;
}
