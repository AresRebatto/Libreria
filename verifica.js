function Modulo() 
{
    // Variabili associate ai campi del modulo
    var nome = document.modulo.nome.value;
    var failname = document.getElementById("failname");
    
    var cognome = document.modulo.cognome.value;
    var failsurname = document.getElementById("failsurname");
    //var nascita = document.modulo.nascita.value;
    //var email = document.modulo.email.value;
   
    if(nome == "")
    {
        failname.innerHTML = "Si prega di inserire un nome valido";
    }else
    {
        failname.innerHTML = "";
    }

    if(cognome == "")
    {
        failsurname.innerHTML = "Si prega di inserire un cognome valido";
    }else
    {
        failsurname.innerHTML = "";
    }
}
