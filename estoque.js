document.getElementById("verificar").onclick = function() { //[cite: 1]
    let estoque = Number(document.getElementById("estoque").value); //[cite: 1]

    if (estoque < 10) { //[cite: 1]
        document.getElementById("resultado").innerHTML = "Alerta: Estoque baixo!"; //[cite: 1]
    } else {
        document.getElementById("resultado").innerHTML = "Quantidade em estoque suficiente."; //[cite: 1]
    }
}