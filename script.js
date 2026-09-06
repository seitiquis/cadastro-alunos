const form = document.getElementById("formCadastro");
const listaAlunos = document.getElementById("listaAlunos");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const matricula = document.getElementById("matricula").value;
    const curso = document.getElementById("curso").value;

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${matricula}</td>
        <td>${curso}</td>
    `;

    listaAlunos.appendChild(novaLinha);

    form.reset();
});