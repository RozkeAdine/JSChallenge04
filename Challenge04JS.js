//tache numero 1
const meansDauphinsScore1 = (96 + 108 + 89) / 3;
console.log('moyenne D1 :'+ meansDauphinsScore1);
const meansKoalasScore1 = (88 + 91 + 110) / 3;
console.log('moyenne K1 :' + meansKoalasScore1);

const meansDauphinsScore2 = (97 + 112 + 101) / 3;
console.log('moyenne D2 :' + meansDauphinsScore2);
const meansKoalasScore2 = (109 + 95 + 123) / 3;
console.log('moyenne K2 :' + meansKoalasScore2);

const meansDauphinsScore3 = (97 + 112 + 101) / 3;
console.log('moyenne D3 :' + meansDauphinsScore3);
const meansKoalasScore3 = (109 + 95 + 106) / 3;
console.log('moyenne K3 :' + meansKoalasScore3);

//tache numero 2
console.log("comparaison et affichage")
console.log("premier jeu")
if (meansDauphinsScore1 < meansKoalasScore1) {
    console.log("Pour ce premier jeu, les gagnants sont les Koalas !")
}else if (meansDauphinsScore1 > meansKoalasScore1){
    console.log("Pour ce premier jeu, les gagnants sont les Dauphins !")
}else if (meansDauphinsScore1 === meansKoalasScore1){
    console.log("Pour ce premier jeu, les équipes sont à égalité !")
};

console.log("second jeu")
if (meansDauphinsScore2 < meansKoalasScore2) {
    console.log("Pour ce second jeu, les gagnants sont les Koalas !")
}else if (meansDauphinsScore2 > meansKoalasScore2){
    console.log("Pour ce second jeu, les gagnants sont les Dauphins !")
}else if (meansDauphinsScore2 === meansKoalasScore2){
    console.log("Pour ce second jeu, les équipes sont à égalité !")
};


console.log("troisieme jeu")
if (meansDauphinsScore3 < meansKoalasScore3) {
    console.log("Pour ce troisième jeu, les gagnants sont les Koalas !")
}else if (meansDauphinsScore3 > meansKoalasScore3){
    console.log("Pour ce troisième jeu, les gagnants sont les Dauphins !")
}else if (meansDauphinsScore3 === meansKoalasScore3){
    console.log("Pour ce troisième jeu, les équipes sont à égalité !")
};

//tache numero 3
console.log("ajout de nouvelle regle")

console.log("premier jeu")
if ((meansDauphinsScore1 <100) && (meansKoalasScore1<100)) {
    console.log("Aucun gagnant pour ce jeu !!")
}else{
    if ((meansDauphinsScore1 >=100) || (meansKoalasScore1>=100)) {
        if ((meansDauphinsScore1 < 100) || (meansDauphinsScore1 < meansKoalasScore1)) {
            console.log("Pour ce premier jeu, les gagnants sont les Koalas !")
        } else if ((meansKoalasScore1 < 100) && (meansDauphinsScore1 > meansKoalasScore1)) {
            console.log("Pour ce premier jeu, les gagnants sont les Dauphins !")
        } else if (meansDauphinsScore1 === meansKoalasScore1) {
            console.log("Pour ce premier jeu, les équipes sont à égalité !")
        }
    }
};

console.log("second jeu")
if ((meansDauphinsScore2 <100) && (meansKoalasScore2<100)) {
    console.log("Aucun gagnant pour ce jeu !!")
}else{
    if ((meansDauphinsScore2 >=100) || (meansKoalasScore2>=100)) {
        if ((meansDauphinsScore2 < 100) || (meansDauphinsScore2 < meansKoalasScore2)) {
            console.log("Pour ce second jeu, les gagnants sont les Koalas !")
        } else if ((meansKoalasScore2 < 100) && (meansDauphinsScore2 > meansKoalasScore2)) {
            console.log("Pour ce second jeu, les gagnants sont les Dauphins !")
        } else if (meansDauphinsScore2 === meansKoalasScore2) {
            console.log("Pour ce second jeu, les équipes sont à égalité !")
        }
    }
};


console.log("troisieme jeu")
if ((meansDauphinsScore3 <100) && (meansKoalasScore3<100)) {
    console.log("Aucun gagnant pour ce jeu !!")
}else{
    if ((meansDauphinsScore3 >=100) || (meansKoalasScore3>=100)) {
        if ((meansDauphinsScore3 < 100) || (meansDauphinsScore3 < meansKoalasScore3)) {
            console.log("Pour ce second jeu, les gagnants sont les Koalas !")
        } else if ((meansKoalasScore3 < 100) && (meansDauphinsScore3 > meansKoalasScore3)) {
            console.log("Pour ce second jeu, les gagnants sont les Dauphins !")
        } else if (meansDauphinsScore3 === meansKoalasScore3) {
            console.log("Pour ce second jeu, les équipes sont à égalité !")
        }
    }
};

