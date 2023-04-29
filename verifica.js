
function Modulo() 
{
    // Variabili associate ai campi del modulo
    var nome = document.modulo.nome.value;
    var failname = document.getElementById("failname");
    
    var cognome = document.modulo.cognome.value;
    var failsurname = document.getElementById("failsurname");
    //var nascita = document.modulo.nascita.value;
    var email = document.modulo.email.value;
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
            document.getElementById("scndPage").style.visibility = 'visible';
            document.getElementById("frstPage").style.visibility ="hidden";
            document.getElementById("classroom").setAttribute(disabled, enabled);
            
        }else
        {
            document.getElementById("scndPage").style.visibility = 'visible';
            document.getElementById("frstPage").style.visibility ="hidden";
        }

        document.getElementById("nomeInfo").innerHTML = nome;
        document.getElementById("cognomeInfo").innerHTML = cognome;
        document.getElementById("emailInfo").innerHTML = email;
        
    }
}

function getDomain(email) {
    var parti = email.split('@');
    return parti[1];
}



function Submit(){
    
}
