// Banner in basso con semaforo di partenza e saluto.
// Lo stesso script è usato in tutte le pagine.
document.addEventListener("DOMContentLoaded", function () {
  var ora = new Date().getHours();
  var saluto = ora < 12 ? "Buongiorno" : ora < 18 ? "Buon pomeriggio" : "Buonasera";

  var avviso = document.createElement("div");
  avviso.id = "avviso";
  avviso.innerHTML =
    "<span id='luci'>&#9675; &#9675; &#9675; &#9675; &#9675;</span>" +
    "<span id='msg'>Si parte...</span>" +
    "<button type='button'>Ho capito</button>";
  document.body.appendChild(avviso);

  var luci = document.getElementById("luci");
  var msg = document.getElementById("msg");
  var accese = 0;

  // ogni 600 ms si accende una luce; dopo la quinta compare il messaggio
  var timer = setInterval(function () {
    accese++;
    var testo = "";
    for (var i = 0; i < 5; i++) { testo += (i < accese ? "&#9679; " : "&#9675; "); }
    luci.innerHTML = testo;
    if (accese === 5) {
      clearInterval(timer);
      setTimeout(function () {
        luci.innerHTML = "&#9675; &#9675; &#9675; &#9675; &#9675;";
        msg.textContent = saluto + "! Sito didattico: nessun dato personale viene raccolto.";
      }, 700);
    }
  }, 600);

  avviso.querySelector("button").addEventListener("click", function () {
    clearInterval(timer);
    avviso.remove();
  });
});
