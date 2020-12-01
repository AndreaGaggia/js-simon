$(function () {
  //benvenuto
  alert('Benvenuto a questo gioco di memoria :)\nGuarderai una lista di parole per 30s e dovrai cercare di memorizzarle\n\nPronto?');

  //creo una lista di 5 numeri casuali non-uguali da 1 a 100
  var listaNumeri = [];
  while (listaNumeri.length < 5) {
    var numero = randomInt(1, 100);
    if (!existInArray(numero, listaNumeri)) {
      listaNumeri.push(numero);
    }
  }
  //stampo la lista sul document
  $('p').html(`${listaNumeri[0]}<br>${listaNumeri[1]}<br>${listaNumeri[2]}<br>${listaNumeri[3]}<br>${listaNumeri[4]}`);

  //cancello i numeri dopo 30s - ho dovuto spezzare perché se metto la riga 19 nell'altra non funziona... mah
  setTimeout(() => {
    $('p').css('display', 'none');
  }, 30000);

  //chiedo i numeri appena dopo aver cancellato il document e alla fine stampo il risultato
  setTimeout(() => {

    //chiedo di inserire i numeri e li salvo in un array
    var numeriInseriti = [];
    for (var i = 0; i < 5; i++) {
      var numeroCheRicordi = Number(prompt("inserisci un numero che ricordi"));
      numeriInseriti.push(numeroCheRicordi);
    }
    console.log(numeriInseriti, listaNumeri);

    //verifico quanti numeri ha ricordato correttamente
    var paroleRicordate = 0;
    for (var j = 0; j < numeriInseriti.length; j++) {
      if (existInArray(numeriInseriti[j], listaNumeri)) {
        paroleRicordate += 1;
      }
    }
    
    //stampo il punteggio
    switch (paroleRicordate) {
      case 0:
        $('p').html('Nessun numero che hai inserito fa parte della lista :(').css('display', 'block');
        $('body').css({
          'background-color': 'red',
          'color': 'lightgrey'
        });
        break;
      case 1:
        $('p').html('Hai ricordato correttamente solo ' + paroleRicordate + ' numero su ' + listaNumeri.length).css('display', 'block');
        break;
      case listaNumeri.length:
        $('p').html('En Plein!!!! Congrats ;)').css('display', 'block');
        $('body').css({
          'background-color': 'green',
          'font-weight': 'bold',
          'color': 'white'
        });
        break;
      default:
        $('p').html('Hai ricordato correttamente ' + paroleRicordate + ' numeri su ' + listaNumeri.length).css('display', 'block');
        $('body').css({
          'background-color': 'yellow'
        });
        break;
    }

  }, 30100);


  //utility functions

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  function existInArray(num, array) {
    for (var i = 0; i < array.length; i++) {
      if (num === array[i]) {
        return true;
      }
    }
  }

});