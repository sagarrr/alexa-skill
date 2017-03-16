var alexa = require("alexa-app");
var app = new alexa.app();
app.launch(function(request,response){
response.say("Hey Sagar! How can I help you?");
response.shouldEndSession(false);
})

app.intent("getLunchSuggestions",
{
"slots" : {},
"utterances" : [
"what's for lunch",
"where should {I|we} go for lunch",
"what should {shikhar|sagar} have for lunch?"
]
},
function (request,response){
generate_suggestions(response);
return;
}
);

function generate_suggestions(response){
var food = [ "Indian",
"Pizza",
"Italian",
"chineese"
];

var rand = food[Math.floor(Math.random()*food.length)];

response.say("Why dont you try some" + rand + "today?");
response.send();
return;
}

exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema')){
console.log(app.schema());
console.log(app.utterances());
}

