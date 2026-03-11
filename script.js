const inicio = new Date("2020-02-11");
const fim = new Date("2026-02-25");

function atualizar(){

let anos = fim.getFullYear() - inicio.getFullYear();
let meses = fim.getMonth() - inicio.getMonth();
let dias = fim.getDate() - inicio.getDate();

if(dias < 0){
meses--;
dias += 30;
}

if(meses < 0){
anos--;
meses += 12;
}

document.getElementById("contador").innerHTML =
"Nosso tempo juntos: " + anos + " anos, " + meses + " meses e " + dias + " dias";

}

atualizar();