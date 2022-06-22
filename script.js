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

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qtdTotalCarne)

    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    console.log(qtdTotalCerveja)

    let qtdTotalRefrigerante = refrigerantePP(duracao) * criancas;
    console.log(qtdTotalRefrigerante)

resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefrigerante / 2000)} Pet´s 2 litros de Refrigerante</p>`;

}

function carnePP(duracao) {
    let carne=400;
    if(duracao >=6) {
        return 650;
    } else { 
        return 400; }
}

function cervejaPP(duracao) {
    let cerveja=1200;
    if (duracao >= 6) {
        return 2000; }
        else {return 1200}
    }


function refrigerantePP(duracao) {
    let refrigerante=1000;
    if (duracao >= 6) {
        return 1500; }
        else { return 1000}
    }

    
