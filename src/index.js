//-----------------------------------J1----------------------------------------//
/*const age = 1;
const isMajor = (age >=18) ? "Tres bien vous pouvez passez" : "Vous n'êtes pas majeur";
console.log(isMajor);*/

/*const age = 18;
switch (age) {
  case 21:
    console.log('Tu peux commencer à boire de l’alcool aux Etats-Unis.');
    break;
  case 18:
    console.log('Tu peux commencer à boire de l’alcool en France.');
    break;
  case 16:
    console.log('Tu peux commencer à boire de l’alcool à Cuba.');
    break;
  case 14:
    console.log('Tu peux commencer à boire de la bière en Allemagne.');
    break;
  default:
    console.log('Rien pour toi cette année.');
}
console.log(age);*/

/*let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10*/

//-----------------------------------------J2---------------------------------------------//

// appel de methode // utilisation d'objets natif
/*console.log(parseFloat(1 + +"44.6"));
const a = 13;
const taille = "metre";

console.log(a.toString());
console.log(a.toExponential());
console.log(Number(taille));*/

/*const a = Math.round(Math.random()*32); // genere un nombre entre 0 et 32(exclus) sans le round nombre a virgule
console.log(a)

Math.E; // Nombre d’Euler
Math.LN2; // Logarithme népérien de 2
Math.LN10; // Logarithme népérien de 10
Math.PI; // Pi
Math.SQRT2; // Racine carrée de 2
*/

// les littéraux de modèle permet d'écrit sur plusieurs ligne
/*const a = 12;
const b = `je suis un ${a} garçon`; // ${} => convertion en chaine de caractère /*
console.log(b);
var utilisateur = {nom: 'Jean Dupont’};
console.log(`Bienvenue, ${utilisateur.nom.toUpperCase()}.`); .
*/

// utilisation du regex
/*const a = "je 4suis quelque chose";
const search = /\d{1}suis/.test(a); // recherche suis et le test avec a (.test(a)) // "\d" = digit pour nombre // [a-z] = de A à Z // // [1-9] = de A à Z
console.log(search);*/

//---------------------------------------------J3------------------------------------------//
// les object 3 type de declaration:
const a = {};
const b = Object();
const c = new Object();
// example :
const employe1 = {
  age: 42,
  salaire: 32000,
  fonction: "acheteur",
  enfant: {
    fille: 1,
    garcon: 3,
  },
  annee() {
    console.log("6eme anneé");
  },
};
const employe2 = {
  age: 23,
  salaire: 22000,
  fonction: "dev",
  enfant: {
    fille: 0,
    garcon: 0,
  },
  annee() {
    console.log("2eme anneé");
  },
};
// recuperation
console.log(employe1.enfant);
employe1.annee();
// la meilleur façon de extraire des données
const { age, salaire, fonction, ...reste } = employe1; // ...reste vient de l'operateur spread
console.log(age, salaire, fonction, reste);
// ajout de propriété et suppresion:
employe1.sexe = "masculin";
console.log(employe1);
// et suppresion
delete employe1.fonction;
console.log(employe1);
// fussion d'objets
const employer = { ...employe1, ...employe2 };
console.log(employer);
// affichage d'objet avec une boucle :
const obj = { a: 1, b: 2, c: 4 };

for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
// Le format JSON
// conversion JS en JSON
const obj1 = { a: {}, b: 42, c: true, d: "test" };
JSON.stringify(obj); // {"a":{},"b":42,"c":true,"d":"test"}
// conversion JSON en JS
const json = JSON.stringify({ a: 1, b: 2 });
const objet = JSON.parse(json); // {a: 1, b: 2}
console.log(json);
// faire une copie profonde : 
const ads = {a: {}};
const ads2 = JSON.parse(JSON.stringify(obj));
obj2.a.test = 42;
console.log(obj); // {a: {}}
console.log("Hello Mec");
