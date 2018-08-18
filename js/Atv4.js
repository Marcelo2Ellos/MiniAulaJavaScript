function touch() {
  var userName = prompt("Olá! Qual o seu nome ?");
  if (userName) {
  document.getElementById("rockImg").src="img/feliz.jpg";
  alert("Prazer, "+userName);
}
}
