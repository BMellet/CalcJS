function suppr()
{
	var valeur= document.getElementById("resultat").value;
	var longueur= valeur.length;
	var fin=longueur-1;

	valeur=valeur.substring(0,fin);
	document.getElementById("resultat").value= valeur;
}

function un()
{

	var x= document.getElementById("un").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}