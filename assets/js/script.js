//Função relativa a Idade
contadorIdade = 0;


const funcAlmentaIdade = () => {
    document.getElementById("btnSubtraiIdade").disabled = false;
    contadorIdade = document.getElementById("displayIdade").innerHTML;
    contadorIdade++;
    document.getElementById("displayIdade").innerHTML = contadorIdade;
}
const funcDiminueIdade = () => {
    contadorIdade = document.getElementById("displayIdade").innerHTML;
    if (contadorIdade > 0) {
        contadorIdade--;
        document.getElementById("displayIdade").innerHTML = contadorIdade;
    } else {
        document.getElementById("btnSubtraiIdade").disabled = true;
    }
}

//Função relativa ao Peso
contadorPeso = 0;

const funcAlmentaPeso = () => {
    document.getElementById("btnSubtraiPeso").disabled = false;
    contadorPeso = document.getElementById("displayPeso").innerHTML;
    contadorPeso++;
    document.getElementById("displayPeso").innerHTML = contadorPeso;
}
const funcDiminuePeso = () => {
    contadorPeso = document.getElementById("displayPeso").innerHTML;
    if (contadorPeso > 0) {
        contadorPeso--;
        document.getElementById("displayPeso").innerHTML = contadorPeso;
    } else {
        document.getElementById("btnSubtraiPeso").disabled = true;
    }
}

//Função relativa a Altura
contadorAltura = 0;

const funcAlmentaAltura = () => {
    document.getElementById("btnSubtraiAltura").disabled = false;
    contadorAltura = document.getElementById("displayAltura").innerHTML;
    contadorAltura = (Number(contadorAltura) + 0.1).toFixed(2);
    
    document.getElementById("displayAltura").innerHTML = contadorAltura;
}

const funcDiminueAltura = () => {
    contadorAltura = document.getElementById("displayAltura").innerHTML;
    if (contadorAltura > 0) {
        contadorAltura = (Number(contadorAltura) - 0.1).toFixed(2);
        document.getElementById("displayAltura").innerHTML = contadorAltura;
    } else {
        document.getElementById("btnSubtraiAltura").disabled = true;
    }
}


//resultado
const funcCalcular = () => {
    let peso =  document.getElementById("displayPeso").innerHTML;
    peso = Number(peso)
    let altura = document.getElementById("displayAltura").innerHTML;
    altura = Number(altura)
    let result = (peso / (altura * altura)).toFixed(1);
    document.getElementById("resultado").innerHTML = result;

}