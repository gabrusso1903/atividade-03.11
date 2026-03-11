const lampada = document.getElementById('lampada');
const linkacesa = "acessa.png";
const linkapagada = "apagada.png";

function alternar(estado) {
    if (estado === 'ligar') {
        if (!lampada.src.includes("acessa.png")) {
            lampada.src = linkacesa;
        }
     } else if (estado === 'desligar') {
            if (!lampada.src.includes("apagada.png")){
                lampada.src = linkapagada;
        }
    }
}