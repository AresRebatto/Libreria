var email;
var nome;
var cognome;

function Modulo() 
{
    // Variabili associate ai campi del modulo
    nome = document.modulo.nome.value;
    var failname = document.getElementById("failname");
    
    cognome = document.modulo.cognome.value;
    var failsurname = document.getElementById("failsurname");
    
    email = document.modulo.email.value;
    var failemail = document.getElementById("failemail");
    var dominio = getDomain(email);

    var nomeVerifica = true;
    var cognomeVerifica = true;
    var emailVerifica = true;

    document.getElementById("nomeInfo").innerHTML = nome;
    document.getElementById("cognomeInfo").innerHTML = cognome;
    document.getElementById("emailInfo").innerHTML = email;
   
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
            document.getElementById("classroomn").removeAttribute("disabled");
            document.getElementById("classrooms").removeAttribute("disabled");

        }else
        {
            document.getElementById("scndPage").style.visibility = 'visible';
            document.getElementById("frstPage").style.visibility ="hidden";
        }

        
        
    }
}

function getDomain(email) {
    var parti = email.split('@');
    return parti[1];
}


function Submit(){
    var classe = document.moduloLibro.Classevalue.value;
    var sezione = document.moduloLibro.Sezionevalue.value;
    var giorno = document.moduloLibro.RitiroGiorno.value;
    var mese = Number(document.moduloLibro.RitiroMese.value);
    var anno = document.moduloLibro.RitiroAnno.value;
    
    

    if(classe == "" || classe > 5 || isNaN(classe) || !isNaN(sezione) ||
        isNaN(giorno) || giorno > 31 || giorno == "" || isNaN(mese) || mese > 12 || mese == "" || isNaN(anno) ||
        anno < 2023 || anno == "")
    {
        if(!isNaN(sezione) || classe == "" || classe > 5 || isNaN(classe))
        {

            document.getElementById("Errorsc").innerHTML = "Classe o sezione non valide";
        }
        
        if(classe = "" || classe > 5 || isNaN(classe))
        {
            document.getElementById("errorData").innerHTML = "data non valida";

        }

        if(isNaN(giorno) || giorno > 31 || giorno == "" || isNaN(mese) || mese > 12 || mese == "" || isNaN(anno) || anno < 2023 || anno == "")
        {
            document.getElementById("errorData").innerHTML = "data non valida";
        }else
        {
            document.getElementById("errorData").innerHTML = "";
        }

    }else
    {
        var meseRiconsegna = mese+1;
        var riconsegna = giorno + "/" + meseRiconsegna+ "/"+ anno;
        document.getElementById("dataRiconsegna").innerHTML = riconsegna;
        inviaEmail(email, nome, cognome, riconsegna);
    }

    
}



async function inviaEmail(email, nome, cognome, riconsegna) {
    const nodemailer = require('nodemailer');
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'testAccount.user',
        pass: 'testAccount.pass'
      }
    });

    // Crea il corpo del messaggio
    let corpoMessaggio = `
      Nome: ${nome}
      Cognome: ${cognome}
      Data di riconsegna: ${riconsegna}
      Saluti,
      La biblioteca dell'ITTS L. Da Vinci - O. Belluzzi
    `;

    // Configura le opzioni dell'email
    let opzioniEmail = {
      from: '<bibliotecascolasticaittsrimini@gmail.com>',
      to: email,
      subject: 'Informazioni sul libro',
      text: corpoMessaggio
    };

    // Invia l'email
    let info = await transporter.sendMail(opzioniEmail);
}
