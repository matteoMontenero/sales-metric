var calcolo = document.getElementById('calcolo');

calcolo.addEventListener('click', calcoloMedia);

function calcoloMedia() {
  var mediaClienti = Number(document.getElementById('media-clienti').value);
  var costoServizio = Number(document.getElementById('costo-medio').value);

  // Eseguo il calcolo del fatturato annuale e mensile
  var fatturatoAnnualeValue = mediaClienti * costoServizio * 12;
  var fatturatoMensileValue = mediaClienti * costoServizio;

  // Assegno i valori calcolati agli input corrispondenti
  document.getElementById('fatturato-annuale').value = fatturatoAnnualeValue;
  document.getElementById('fatturato-mensile').value = fatturatoMensileValue;
}
