/* ===== É AQUI QUE VOCÊ MEXE PARA ADICIONAR OU MUDAR PRODUTOS ===== */

const CONFIG = {
  loja: "Brilho & Estilo",                          // nome na navbar
  titulo: "Brilho & Estilo – Moda e Presentes",     // título da aba do navegador
  frase: "Mais brilho, mais estilo, mais você.",    // frase de destaque no cabeçalho
  whatsapp: "5521982441637"   // 55 (Brasil) + 21 (DDD) + número
};

const CATEGORIAS = ["Relógios", "Chinelos/Farm", "Tapetes", "Natal","Tamanco"];
const ICONES = { "Relógios": "⌚", "Chinelos": "🩴", "Tapetes": "🧶", "Natal": "🎄" };

/* Faixas de tamanho dos chinelos */
const TAMANHOS_CHINELO = ["35-36", "37-38", "39-40"];
const TAMANHOS_TAMANCO = ["33-34", "35-36", "37-38", "39-40"];

/* Detalhes que se repetem nos chinelos Farm */
const DETALHES_FARM = [
  "Estampas autênticas, tendências e com alta procura no mercado",
  "Sola alta e colorida",
  "Solas 100% em micro expandido, coloridas combinando estampa + correia + cabedal",
  "Estamparia em transfer digital, com cores vivas e vibrantes",
  "Enfeite em ABS resinado"
];

const DETALHES_TAMANCO = [
  "Na caixinha unitária",
  "Em PVC Translúcido",
  "Leve e confortável",
  "Saldo de 2,5 cm", 
  "Bico quadrado",
  "Solado flexível" 
]

/* codigo: o número que aparece na foto (Farm 1, Farm 2...). O cliente pede por ele.
   img: caminho da foto (ex.: "fotos/farm1.jpg"). Deixe "" para usar o ícone.
   tamanhos: lista de tamanhos para o cliente escolher (omita se não tiver).
   O id precisa ser único. Para cada estampa nova, copie a linha e mude id, codigo e img. */
const PRODUTOS = [
  { id: 1, codigo: "Farm 1", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm1.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 2, codigo: "Farm 2", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm2.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 3, codigo: "Farm 3", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm3.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 4, codigo: "Farm 4", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm4.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 5, codigo: "Farm 5", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm5.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 6, codigo: "Farm 6", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm6.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 7, codigo: "Farm 7", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm7.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 8, codigo: "Farm 8", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm8.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 9, codigo: "Farm 9", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm9.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 10, codigo: "Farm 10", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm10.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 11, codigo: "Farm 11", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm11.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 12, codigo: "Farm 12", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm12.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 13, codigo: "Farm 13", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm13.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 14, codigo: "Farm 14", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm14.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 15, codigo: "Farm 15", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm15.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 16, codigo: "Farm 16", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm16.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 17, codigo: "Farm 17", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm17.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 18, codigo: "Farm 18", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm18.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 19, codigo: "Farm 19", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm19.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },  
  { id: 20, codigo: "Farm 20", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm20.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 21, codigo: "Farm 21", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm21.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 22, codigo: "Farm 22", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm22.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 23, codigo: "Farm 23", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm23.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 24, codigo: "Farm 24", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm24.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 25, codigo: "Farm 25", nome: "Havaianas Farm Top Color", preco: 40.00, categoria: "Chinelos/Farm", img: "img/fotos/chinelos/farm25.jpeg", tamanhos: TAMANHOS_CHINELO, detalhes: DETALHES_FARM },
  { id: 26, codigo: "Tamanco 1", nome: "Tamanco Jelly Gummy", preco: 80.00, categoria: "Tamanco", img: "img/fotos/chinelos/tamanco1.jpeg", tamanhos: TAMANHOS_TAMANCO, detalhes: DETALHES_TAMANCO },
  { id: 27, codigo: "Tamanco 2", nome: "Tamanco Jelly Gummy", preco: 80.00, categoria: "Tamanco", img: "img/fotos/chinelos/tamanco2.jpeg", tamanhos: TAMANHOS_TAMANCO, detalhes: DETALHES_TAMANCO },
  { id: 28, codigo: "Tamanco 3", nome: "Tamanco Jelly Gummy", preco: 80.00, categoria: "Tamanco", img: "img/fotos/chinelos/tamanco3.jpeg", tamanhos: TAMANHOS_TAMANCO, detalhes: DETALHES_TAMANCO }
];