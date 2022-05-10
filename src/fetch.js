 export  function getTemplates(){
//     fetch("127.0.0.1:8000/src/templates.html")
// .then(data => data.text())
// .then(html => document.getElementById("templates").innerHTML = html)
var ajax = new XMLHttpRequest();
ajax.open("GET", "templates.html", false);
ajax.send();
document.getElementById("templates").innerHTML += ajax.responseText;};  