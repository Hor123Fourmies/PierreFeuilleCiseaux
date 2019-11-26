var pierre = "assets/img/Rock-paper-scissors_(rock).png";
var feuille = "assets/img/Rock-paper-scissors_(paper).png";
var ciseaux = "assets/img/Rock-paper-scissors_(scissors).png";

var jeu = [pierre, feuille, ciseaux];

var ordinateur = document.getElementById('ordinateur');
var joueur = document.getElementById('joueur');

var pointsOrdinateur = document.getElementById('pointsOrdinateur');
var pointsJoueur = document.getElementById('pointsJoueur');

var compteurVictoireOrdi=0;
var compteurVictoireJoueur=0;

var compteurOrdi=0;
var compteurJoueur=0;


function incrementerOrdinateur()
{
    compteurOrdi=compteurOrdi+1;
    pointsOrdinateur.innerHTML='Vous avez '+compteurOrdi+' points.';
}

function incrementerJoueur()
{
    compteurJoueur=compteurJoueur+1;
    pointsJoueur.innerHTML='Vous avez '+compteurJoueur+' points.';
}

function jeuOrdinateur() {
    var tirageAuSort = Math.floor(Math.random()*jeu.length);
    ordinateur.src = jeu[tirageAuSort];
    //    setTimeout(jeuOrdinateur, 1000);
    return jeu[tirageAuSort];
}
jeuOrdinateur();


var boutonValider = document.getElementById('boutonValider');

    boutonValider.addEventListener('click', function () {

    var input = document.getElementById('input').value;
    switch (input) {
        case "p":
            joueur.src = pierre;
            break;
        case "f":
            joueur.src = feuille;
            break;
        case "c":
            joueur.src = ciseaux;
            break;
    }
    jeuOrdinateur();

        if (jeuOrdinateur()==pierre && input==="f"){
            incrementerJoueur();
        }

        else if (jeuOrdinateur()==pierre && input==="c"){
            incrementerOrdinateur();
        }

        else if (jeuOrdinateur()==feuille && input==="p"){
            incrementerOrdinateur();
        }

        else if (jeuOrdinateur()==feuille && input==="c"){
            incrementerJoueur();
        }

        else if (jeuOrdinateur()==ciseaux && input==="p"){
            incrementerJoueur();
        }

        else if (jeuOrdinateur()==ciseaux && input==="f"){
            incrementerOrdinateur();
        }
        document.getElementById('input').value="";

        if (compteurOrdi===4){
            compteurVictoireOrdi=compteurVictoireOrdi+1;
            document.getElementById('victoireOrdi').innerHTML="Bravo, l'ordi est très fort!";
            document.getElementById('compteurVictoireOrdi').innerHTML=
                "Compteur Ordi: "+compteurVictoireOrdi;
        }
        else if (compteurJoueur===4){
            compteurVictoireJoueur=compteurVictoireJoueur+1;
            document.getElementById('victoireJoueur').innerHTML="Bravo, vous avez gagné!";
            document.getElementById('compteurVictoireJoueur').innerHTML=
                "Compteur Joueur: "+compteurVictoireJoueur;
        }

});


//Bonus
function nouvellePartie () {
    compteurOrdi=0;
    compteurJoueur=0;
    pointsOrdinateur.innerHTML="";
    pointsJoueur.innerHTML="";
    document.getElementById('victoireOrdi').innerHTML="";
    document.getElementById('victoireJoueur').innerHTML="";

}

document.getElementById('boutonNouvellePartie').addEventListener('click', function () {
    nouvellePartie();
});


var boutonRedémarrer = document.getElementById('boutonRejouer');

function redemarrer (){
    boutonRedémarrer.addEventListener('click', function () {
        location.reload();
    });
}
redemarrer();