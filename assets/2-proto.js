/* 
    PROTOTYPES
    constructor del objecte per a lcients
*/

function Client(nom,saldo){
    this.nom = nom;
    this.saldo = saldo;
}

// instancia del now client
const charli = new Client("Charli",7000);
console.log(charli);

// metode tipoClient
Client.prototype.tipoClient = function(){
    let tipus;
    if(this.saldo > 10000){
        tipus = "gold";
    }else if(this.saldo > 5000){
        tipus ="platinum";
    }else{
        tipus = "normal";
    }
    return tipus
}

console.log(charli.tipoClient());

/* mteode nomClientSaldo */

Client.prototype.nomClientSaldo= function(){
    return `${this.nom} té ${this.saldo}, és un client ${this.tipoClient()}`
}

console.log(charli.nomClientSaldo());


/* retirar saldo */

Client.prototype.retirarSaldo= function(e){
    this.saldo -= e
}
charli.retirarSaldo(2500);
console.log(charli.nomClientSaldo());


/* 
    Els metodes que anem creant de cada objecte, en aquest cas de CLient, els anemi veient amb el
    navegador si anem a console
*/