
const listanomes = document.getElementById("listanomes");

async function mostranomes() {
    listanomes.innerHTML = "";
    resposta = await fetch("https://restapi-deploy-demo-b7u0.onrender.com/nomes");
    nomes = await resposta.json();
    for (cadanome of nomes) {
        novop = document.createElement("p");
        novop.innerHTML = cadanome.nome
        listanomes.appendChild(novop)
    }
}

mostranomes();