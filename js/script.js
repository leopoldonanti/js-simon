/* 1. Clccando su “via” il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
6. Opzionale:
	- alla fine far apparire un bottone “restart”
	- all’inizio fare scegliere all’utente con quanti numeri giocare  */
  
$(document).ready(function(){
  
  reset();

  var pcNumber = [];
  var userNumber = [];
  var result = [];

  
  $('.btn').click(function(){
    
    while(pcNumber.length < 5){
      pcNumber.push(generatorNumber(1,100));
    }console.log(pcNumber);

    printOutput(pcNumber.toString(),'#print')

    setTimeout(function(){
      printOutput('Ora inseriscili', '#print');
      $('.numb').addClass('active');
    }, 2000);
  });

  /* funzioni */

  function reset(){
    printOutput('Al click di "VIA" memorizza i numeri', '#print');
    $('.btn').show();
  };

  function printOutput (text, target){
    $(target).text(text);
  };

  function generatorNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+min);
   };

});