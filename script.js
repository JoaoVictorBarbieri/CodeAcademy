let piadas = ['Qual é a sua coisa favorita em mim?', 'Que tipo de aventura você gostaria de ter juntos?', 'Jantar romântico ou noite de cinema em casa?', "Você tem algum talento escondido?", 'Gostaria de tentar fantasias de casal para o Halloween?', 'Como é a sua casa dos sonhos?', 'Onde é um lugar que você sempre quis visitar?' ];

let piadas02 = ['Como quiser', 'Apenas faça', 'Esta é uma pergunta muito boa', 'Tem certeza que quer saber?', 'Isso é certo como o inferno', 'Você já sabe a resposta'];

function numAleatorio(max) {
  return Math.floor(Math.random() * max)
}
const selecionarPiadaAleatoria = () => {
  const indexAleatorio = numAleatorio(piadas.length);
  const indexAleatorio02 = numAleatorio(piadas02.length)
  return`Pergunta: ${piadas[indexAleatorio]} Resposta: ${piadas02[indexAleatorio02]}`
}
console.log(selecionarPiadaAleatoria())