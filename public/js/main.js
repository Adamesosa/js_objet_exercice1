let personnage = {
    nom : "caliskan",
    prenom: 'ayhan',
    age: '23',
    taille: '178cm',
}
console.log(personnage);

let personnage2 = {
    nom : "test",
    prenom: 'elias',
    age: '25',
    taille: '178cm',
}
console.log(personnage2);

let personnage3 = {}

personnage3.nom = personnage.nom
personnage3.age = personnage2.age
personnage3.taille = '185 cm'

console.log(personnage3);

//4 
let personnage4 = {
    saluer(){
        console.log(`Bonjour ${personnage2.prenom}`);
    }
}
personnage4.saluer()

//5
let ayhan = {
    nom : 'caliskan',
    prenom : "ayhan",
    bonjour(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
ayhan.bonjour()

//6
let perso = {
    nom: "test",
    changerAge(){
        this.age = prompt('Donne moi ton âge?')
        console.log(`${this.nom} à ${this.age} ans`);
    }
}
// perso.changerAge()

//7 
let perso1 = {
    nom : "perso1",
    age : 23
}
let perso2 = {
    nom : "perso2",
    age : 24
}
let perso3 = {
    nom : "perso3",
    age : 25
}

let voleur = {
    usurpation(x) {
        this.nom = x.nom
        this.age = x.age
    }
}

voleur.usurpation(perso3)
console.log(voleur);

//8 
let francois = {
    nom : 'francois',
    panier: ['pain'],
    derober(a){
        // while (sergio.panier.length !== 0) {
        //     let product = prompt()
        // }
        for (let i = 0; i < 2; i++) {
            let product = prompt(`Que voulez vous dérober ? \n ${sergio.panier}`)   
            this.panier.push(product);
            // a.panier.splice(sergio.panier.indexOf(product),1)
            a.panier = a.panier.filter( (el) => {
                return el != product
            })
        }
    }
}

let sergio = {
    nom : 'sergio',
    panier : ["jambon", "ail", "baguette", "kiwi"]
}

francois.derober(sergio)
console.log(francois);
console.log(sergio);