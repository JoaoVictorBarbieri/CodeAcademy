let piadas = ['Qual a velocidade do escuro? Depende da viatura', 'Você sabe como deixa um carteiro triste ? Você mata a família dele', 'Porque o padre não pode xingar na hora do sexo: Para não ensinar palavrão pra criança', "Um cara forte e um cara fraco assaltam uma mulher. Em quem você bate? 'Na mulher'" ];

function numAleatorio(max) {
  return Math.floor(Math.random() * max)
}
const selecionarPiadaAleatoria = () => {
  const indexAleatorio = numAleatorio(piadas.length);
  return piadas[indexAleatorio]
}
console.log(selecionarPiadaAleatoria())