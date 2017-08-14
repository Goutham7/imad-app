// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
//Make a request to the counter endpoint
var request = new XMLHttpRequest();
//Capture the repsonse and store it in variable
request.onreadystatechange = function () {
    if(request.readyState===XMLHttpRequest.DONE){
    // Take some action
    if (request.status===200){
        var counter = request.responseText;        
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
    }
    // Not done yet
}

};
// make the request
 request.open('GET', 'http://taazgoutham7.imad.hasura-app.io/counter', true);
 request.send(null);
};

//sumbit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
 var request = new XMLHttpRequest();
 
//Capture the repsonse and store it in variable
request.onreadystatechange = function () {
    if(request.readyState===XMLHttpRequest.DONE){
    // Take some action
    if (request.status===200){
      //Capture a list of name and render it as a list
    var names = request.reponseText;
    names = JSON.parse(names);
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;  
    }
    // Not done yet
}

};
// make the request
var nameInput = document.getElementById('name');
var name = nameInput.value;
 request.open('GET', 'http://taazgoutham7.imad.hasura-app.io/submit-name?name='+ name, true);
 request.send(null); 
  
};