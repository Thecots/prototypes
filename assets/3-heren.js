function Client(nom,saldo){
    this.nom = nom;
    this.saldo = saldo;
}

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

Client.prototype.nomClientSaldo= function(){
    return `${this.nom} té ${this.saldo}, és un client ${this.tipoClient()}`
}

Client.prototype.retirarSaldo= function(e){
    this.saldo -= e
}

/* 
    creem lobjecte preosna que afegira un telefon a client
*/

function Persona(nom, saldo, telefon){
    /* this.nom = nom;
    this.saldo = saldo; */
    Client.call(this,nom,saldo);
    this.telefon = telefon;
}

/* Veiem com client i persona compareixen atributs similars */

Persona.prototype = Object.create(Client.prototype);
Persona.prototype.constructor =  Client;

const persona = new Persona("Jordi",10000,"636565598");

console.log(persona);

/* ara podem utilitzar mteodes propies de client */
console.log(persona.nomClientSaldo());

Persona.prototype.mostrarTelefon = function(){
    return `${this.telefonx}`;
}

console.log(persona.mostrarTelefon());

/* God object o  objecte tot poderós és aquell sobre el qual es can heredant les funcions */

/* 
    Fins aquí prototypes, hem vist que són, com crearlos y com heredarlos, també es important perquè
    no utilizen arrow function en aquest casos que fem servir el "this"
*/