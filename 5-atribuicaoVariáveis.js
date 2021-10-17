console.log("Trabalhando com atribuição de variárveis");

const idade = 25;   //variável constante
let nome = "Michelle";  //variável varia
const sobrenome = "Mello";

//console.log(nome +  " "  + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`); //interpolação - ${} chama variável

nome = nome + sobrenome;
console.log(nome);