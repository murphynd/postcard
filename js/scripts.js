$(document).ready(function(){
  $("#formOne").submit(function(event){ 
    const person1Input = $("input#person1").val();
    const adressInput = $("input#adress").val();

    $(".person1").append(person1Input);
    $(".adress").append(adressInput);

    $("#letter").show();

    event.preventDefault();
  });
});