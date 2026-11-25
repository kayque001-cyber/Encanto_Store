/* ===== É AQUI QUE VOCÊ MEXE PARA ADICIONAR OU MUDAR PRODUTOS ===== */

const CONFIG = {
  loja: "Cantinho dos Achados",
  whatsapp: "5521982441637"   // 55 (Brasil) + 21 (DDD) + número
};

const CATEGORIAS = ["Relógios", "Chinelos", "Tapetes", "Natal"];
const ICONES = { "Relógios": "⌚", "Chinelos": "🩴", "Tapetes": "🧶", "Natal": "🎄" };

/* Faixas de tamanho dos chinelos */
const TAMANHOS_CHINELO = ["33-34", "35-36", "37-38", "39-40", "41-42"];

/* Detalhes que se repetem nos chinelos Farm */
const DETALHES_FARM = [
  "Estampas autênticas, tendências e com alta procura no mercado",
  "Sola alta e colorida",
  "Solas 100% em micro expandido, coloridas combinando estampa + correia + cabedal",
  "Estamparia em transfer digital, com cores vivas e vibrantes",
  "Enfeite em ABS resinado"
];

/* codigo: o número que aparece na foto (Farm 1, Farm 2...). O cliente pede por ele.
   img: caminho da foto (ex.: "fotos/farm1.jpg"). Deixe "" para usar o ícone.
   tamanhos: lista de tamanhos para o cliente escolher (omita se não tiver).
   O id precisa ser único. Para cada estampa nova, copie a linha e mude id, codigo e img. */
const PRODUTOS = [
  { id: 1, codigo: "Farm 1", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm1.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 2, codigo: "Farm 2", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm2.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 3, codigo: "Farm 3", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm3.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 4, codigo: "Farm 4", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm4.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 5, codigo: "Farm 5", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm5.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 6, codigo: "Farm 6", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm6.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 7, codigo: "Farm 7", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm7.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 8, codigo: "Farm 8", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm8.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 9, codigo: "Farm 9", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm9.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 10, codigo: "Farm 10", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm10.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 11, codigo: "Farm 11", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm11.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 12, codigo: "Farm 12", nome: "Havaianas Farm Top Color", preco: 35.00, categoria: "Chinelos", img: "img/fotos/chinelos/farm12.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
];