const test = require('node:test');
const assert = require('node:assert/strict');
const { validarAluno } = require('./aluno');

test('aceita aluno com dados válidos', () => {
  const aluno = {
    nome: 'Carlos',
    email: 'carlos@email.com',
    matricula: '12345',
    curso: 'Medicina'
  };

  assert.equal(validarAluno(aluno), true);
});

test('rejeita aluno com e-mail inválido', () => {
  const aluno = {
    nome: 'Carlos',
    email: 'carlosemail.com',
    matricula: '12345',
    curso: 'Medicina'
  };

  assert.equal(validarAluno(aluno), false);
});

test('rejeita aluno com campo vazio', () => {
  const aluno = {
    nome: '',
    email: 'carlos@email.com',
    matricula: '12345',
    curso: 'Medicina'
  };

  assert.equal(validarAluno(aluno), false);
});
