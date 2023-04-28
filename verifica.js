var nome;
var cognome;
var email;

function Modulo() 
{
    // Variabili associate ai campi del modulo
    nome = document.modulo.nome.value;
    var failname = document.getElementById("failname");
    
    cognome = document.modulo.cognome.value;
    var failsurname = document.getElementById("failsurname");
    //var nascita = document.modulo.nascita.value;
    email = document.modulo.email.value;
    var failemail = document.getElementById("failemail");
    var dominio = getDomain(email);

    var nomeVerifica = true;
    var cognomeVerifica = true;
    var emailVerifica = true;
    //How do a substring with JavaScript?
   
    if(nome == "")
    {
        failname.innerHTML = "Si prega di inserire un nome valido";
        nomeVerifica=false;
    }else
    {
        failname.innerHTML = "";
        nomeVerifica=true;
    }

    if(cognome == "")
    {
        failsurname.innerHTML = "Si prega di inserire un cognome valido";
        cognomeVerifica = false;
    }else
    {
        failsurname.innerHTML = "";
        cognomeVerifica = true;
    }

    if(dominio != "ittsrimini.edu.it" && dominio != "studenti.ittsrimini.edu.it")
    {
        failemail.innerHTML = "Si prega di inserire un indirizzo e-mail valido";
        emailVerifica = false;
    }else
    {
        failemail.innerHTML = "";
        emailVerifica = true;
    }

    if(nomeVerifica && cognomeVerifica && emailVerifica)
    {
        if(dominio == "studenti.ittsrimini.edu.it")
        {
            window.location = "prenotaLibroStudente.html";
            
        }else
        {
            window.location = "prenotaLibroProf.html";
        }
        
    }
}

function getDomain(email) {
    var parti = email.split('@');
    return parti[1];
}



function Submit(){
    document.getElementById("nomeInfo").innerHTML = nome;
    document.getElementById("cognomeInfo").innerHTML = cognome;
    document.getElementById("emailInfo").innerHTML = email;
}
