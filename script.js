// Mostra un avviso in fondo alla pagina. Il bottone lo fa sparire.
var avviso = document.createElement("div");
avviso.id = "avviso";

var testo = document.createElement("span");
testo.textContent = "Questo è un sito didattico: non raccoglie nessun dato su di te.";

var bottone = document.createElement("button");
bottone.textContent = "Ho capito";
bottone.onclick = function () {
  avviso.style.display = "none";
};

avviso.appendChild(testo);
avviso.appendChild(bottone);
document.body.appendChild(avviso);
