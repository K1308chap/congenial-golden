console.log('This is the console.');

// window.onload = function() {

//     document.getElementById("button").onclick = function() {myFunction()}; //Onclick event used for user to start program with a button

// }

//Write the event handler
(function () {
    let httpRequest;
    document.getElementById("button").onclick = function() { makeRequest('degreeInformation.json');
};
//Create a XMLHttpRequest object
function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    //Alert if the request object is not successfully created
    if (!httpRequest) {
        alert('Error: Cannot create an XMLHTTP instance');
        return false;
    }
    //Write the code to create the request for the JSON data on the server
    httpRequest.onreadystatechange = alertContents;
    //Send the request
    httpRequest.open('GET', url);
    httpRequest.send();
}
//Check for the state or the request
function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        //Confirm you get 200 as that indicates JSON is returned successfully
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert('There was a problem with the request.');
        }
    }
}
})();
