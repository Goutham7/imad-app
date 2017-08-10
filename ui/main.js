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
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
  //Make a request to the server and send the name
  //Capture a list of name and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i-0; i<names.lenght; i++) {
        list +- '<li>' + names[i] + '<li/>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};