// Lista para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;

    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    let li = document.createElement('li');
    li.textContent = "¡El amigo secreto es: " + ganador + "!";
    resultado.appendChild(li);
}

// Permitir agregar con la tecla Enter
document.getElementById('amigo').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});