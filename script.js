// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja 1200 ml por Pessoa + 6 horas - 2000ml
// Refrigerantes - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos=document.getElementById("adultos");
let inputCriancas=document.getElementById("criancas");
let inputDuracao=document.getElementById("duracao");

let resultado=document.getElementById("resultado");

function calcular() {
    console.log("calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas);
    console.log(qtdTotalCarne)
}

function carnePP(duracao) {
    let carne=400;
    if(duracao >=6) {
        return 650;
    } else { 
        return 400; }
}