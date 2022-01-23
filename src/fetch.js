module.exports = fetch("localhost:8000/src/templates.html")
.then(data => data.text())
.then(html => document.getElementById("templates").innerHTML = html);