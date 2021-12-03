/* 
    Els propotips son els antecesors de les clases.
    Hi ha molts projectes creats amb prototypes y és important
    saber com es creen i utilitzen.
    Els prototypes están molt relasionats amb els objectes, de fet tots els objectes tenen una propietat
    prototype que apunta el mètodes.

    Fins ara hem vist diferentes maneres de crear objectes:
    Objecte literal

*/

const person = {
    name: "john",
    age:12,
    isMarried: false
}

console.log(person);
console.log(typeof(person));

/* 
    Un altra manera
    Objecte constructor (aixo era conegut com la POOen JS), ens permet crear
    objectes dinamicament.
*/

function Person(name, age, isMarried){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
}

const Sam = new Person('sam',30,false);
console.log(Sam);
console.log(typeof(Sam));

/* 
    amb l'objecte literal podem crear objectes sense necesitat de constructor
    pero d'una forma incòmoda i estetica, en canvi amb el constructor podem crear objecte amb una
    sola linea de codi.

    QUIN ÉS EL PROBLEMA QUE SOLUCIONA EL PROTOTYPE?
    EXEMPLE:
*/

function Client(nom,saldo){
    this.nom = nom;
    this.saldo = saldo;
}

const sam = new Client("sam",100);

function fomratClient(client){
    return `El client ${client.nom}, te ${client.saldo}€`;
}

console.log(fomratClient(sam));

function Empresa(nom, saldo, categoria){
    this.nom = nom;
    this.saldo = saldo;
    this.categoria = categoria;
}

const empresa = new Empresa("Sam",1000,"ACME");

function fomratEmpresa(e){
    return `La empresa ${e.nom}, amb saldo ${e.saldo}€ y categoria ${e.categoria}`;
}

console.log(fomratEmpresa(empresa));

/* 
    EL PROTOTYPE PODEM AGREGAR FUNCIONS EXCLUSIVES DE CLIENT Y DE EMPRESA
    EXPANDINT-LO. SI TENIM UNA APLICACIÖ AMB POQUES FUNCIONS NO VAL LA PENSA; PERO SI QUE ES UNA
    BONA PRACTICA PER A APLICACIONS MAB MOLTES FUNCIONS
*/