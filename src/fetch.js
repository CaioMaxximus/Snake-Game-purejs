 export  function getTemplates(){
//     fetch("127.0.0.1:8000/src/templates.html")
// .then(data => data.text())
// .then(html => document.getElementById("templates").innerHTML = html)
// var ajax = new XMLHttpRequest();
// ajax.open("GET", "src/templates.html", false);
// ajax.send();
// document.getElementById("templates").innerHTML = ajax.responseText;
fetch("./templates.html",{method : 'get'}).then(r => console.log(r)).catch(e => console.log(e))}  
