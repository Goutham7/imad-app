// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
//Make a request to the counter endpoint
var request = new XMLHttpRequest();
//Capture the repsonse and store it in variable
request.onreadystatechange = function () {
    if(request.readyState===XMLHttpRequest.Done){
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