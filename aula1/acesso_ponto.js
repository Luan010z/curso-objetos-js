const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "113123213",
  email: "andre@gmail.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);
console.log(`Os três primeiros numeros do cpf são: ${cliente.cpf.substring(0, 3)}`);