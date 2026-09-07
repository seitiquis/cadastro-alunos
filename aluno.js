function validarAluno(aluno) {
  if (!aluno.nome || !aluno.email || !aluno.matricula || !aluno.curso) {
    return false;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(aluno.email);

  return emailValido;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validarAluno };
}
