const $ = id => document.getElementById(id);
const brl = n => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

let categoria = "Todos";
let carrinho = {};   // { "id|tamanho": quantidade }
const escolha = {};  // { idDoProduto: tamanho escolhido }

try { carrinho = JSON.parse(localStorage.getItem("carrinho") || "{}") || {}; } catch (e) { carrinho = {}; }
const salvar = () => { try { localStorage.setItem("carrinho", JSON.stringify(carrinho)); } catch (e) {} };
const chave = (id, tam) => id + "|" + (tam || "");

document.title = CONFIG.titulo || (CONFIG.loja + " – Catálogo");
const texto = (id, t) => { const el = $(id); if (el) el.textContent = t; };
texto("loja", CONFIG.loja);
texto("frase", CONFIG.frase || "");

function desenharTabs() {
  const ativas = CATEGORIAS.filter(c => PRODUTOS.some(p => p.categoria === c));
  $("tabs").innerHTML = ["Todos", ...ativas].map(c =>
    `<button class="tab" type="button" data-c="${esc(c)}" aria-pressed="${c === categoria}">${esc(c)}</button>`
  ).join("");
}

function desenharGrid() {
  const lista = PRODUTOS.filter(p => categoria === "Todos" || p.categoria === categoria);
  if (!lista.length) { $("grid").innerHTML = '<p class="vazio">Nenhum produto nesta categoria ainda.</p>'; return; }
  $("grid").innerHTML = lista.map(p => `
    <article class="item">
      <div class="thumb">
        ${p.img ? `<img src="${esc(p.img)}" alt="${esc((p.codigo ? p.codigo + " – " : "") + p.nome)}" loading="lazy">` : (ICONES[p.categoria] || "🛍️")}
        ${p.codigo ? `<span class="codigo">${esc(p.codigo)}</span>` : ""}
      </div>
      <div class="info">
        <span class="cat">${esc(p.categoria)}</span>
        <span class="nome">${esc(p.nome)}</span>
        <span class="preco">${brl(p.preco)}</span>
        ${p.detalhes && p.detalhes.length ? `<details class="detalhes"><summary>Ver detalhes</summary><ul>${p.detalhes.map(d => `<li>${esc(d)}</li>`).join("")}</ul></details>` : ""}
        ${p.tamanhos && p.tamanhos.length ? `
          <div class="tamanhos" id="tam-${p.id}" role="group" aria-label="Tamanho">
            <span class="tam-rot">Tamanho</span>
            <div class="tam-lista">${p.tamanhos.map(t => `<button type="button" class="tam" data-tam="${esc(t)}" data-p="${p.id}" aria-pressed="${escolha[p.id] === t}">${esc(t)}</button>`).join("")}</div>
          </div>` : ""}
        <button class="add" type="button" data-add="${p.id}">Adicionar ao pedido</button>
      </div>
    </article>`).join("");
}

function itens() {
  return Object.entries(carrinho).map(([k, q]) => {
    const [id, tam = ""] = k.split("|");
    return { k, p: PRODUTOS.find(x => x.id == id), tam, q };
  }).filter(i => i.p && i.q > 0);
}

function desenharCarrinho() {
  const it = itens();
  const qtd = it.reduce((s, i) => s + i.q, 0);
  const total = it.reduce((s, i) => s + i.q * i.p.preco, 0);
  $("badge").hidden = qtd === 0;
  $("badge").textContent = qtd;
  $("abrir").setAttribute("aria-label", "Abrir meu pedido (" + qtd + (qtd === 1 ? " item)" : " itens)"));
  $("total").textContent = brl(total);
  $("lista").innerHTML = it.length ? it.map(({ k, p, tam, q }) => `
    <li class="linha">
      <span class="n">${esc((p.codigo ? p.codigo + " – " : "") + p.nome)}${tam ? `<small class="tam-linha">Tamanho ${esc(tam)}</small>` : ""}</span>
      <span class="p">${brl(p.preco * q)}</span>
      <div class="qtd">
        <button type="button" data-menos="${esc(k)}" aria-label="Diminuir">−</button>
        <span>${q}</span>
        <button type="button" data-mais="${esc(k)}" aria-label="Aumentar">+</button>
        <button type="button" class="remover" data-remover="${esc(k)}">Remover</button>
      </div>
    </li>`).join("") : '<li class="vazio">Seu pedido está vazio. Adicione produtos do catálogo.</li>';
  $("enviar").disabled = !it.length;
}

function mudar(k, delta) {
  carrinho[k] = Math.max(0, (carrinho[k] || 0) + delta);
  if (!carrinho[k]) delete carrinho[k];
  salvar(); desenharCarrinho();
}

function adicionar(btn) {
  const p = PRODUTOS.find(x => x.id == btn.dataset.add);
  if (!p) return;
  if (p.tamanhos && p.tamanhos.length && !escolha[p.id]) {
    $("tam-" + p.id).classList.add("erro");
    return;
  }
  mudar(chave(p.id, escolha[p.id]), 1);
  btn.textContent = "Adicionado ✓";
  setTimeout(() => { btn.textContent = "Adicionar ao pedido"; }, 1200);
}

function escolherTamanho(btn) {
  const id = btn.dataset.p;
  escolha[id] = btn.dataset.tam;
  const grupo = $("tam-" + id);
  grupo.classList.remove("erro");
  grupo.querySelectorAll(".tam").forEach(b => b.setAttribute("aria-pressed", b === btn));
}

function abrirGaveta() { $("fundo").classList.add("on"); $("gaveta").classList.add("on"); }
function fecharGaveta() { $("fundo").classList.remove("on"); $("gaveta").classList.remove("on"); }

function enviar() {
  const it = itens();
  if (!it.length) return;
  const linhas = it.map(({ p, tam, q }) =>
    `• ${q}x ${p.codigo ? p.codigo + " – " : ""}${p.nome}${tam ? " (tam. " + tam + ")" : ""} – ${brl(p.preco * q)}`
  );
  const total = it.reduce((s, i) => s + i.q * i.p.preco, 0);
  const msg = `Olá! Quero fazer este pedido:\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}`;
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  const aba = window.open(url, "_blank");

  // Pedido enviado: esvazia o carrinho e fecha a gaveta
  carrinho = {};
  salvar();
  desenharCarrinho();
  fecharGaveta();

  // Se o navegador bloqueou a nova aba, abre o WhatsApp nesta mesma aba
  if (!aba) location.href = url;
}

function remover(k) {
  delete carrinho[k];
  salvar();
  desenharCarrinho();
}

document.addEventListener("click", e => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.c) { categoria = t.dataset.c; desenharTabs(); desenharGrid(); }
  else if (t.dataset.tam) escolherTamanho(t);
  else if (t.dataset.add) adicionar(t);
  else if (t.dataset.mais) mudar(t.dataset.mais, 1);
  else if (t.dataset.menos) mudar(t.dataset.menos, -1);
  else if (t.dataset.remover) remover(t.dataset.remover);
});
$("abrir").onclick = abrirGaveta;
$("fechar").onclick = fecharGaveta;
$("fundo").onclick = fecharGaveta;
$("enviar").onclick = enviar;
$("limpar").onclick = () => { carrinho = {}; salvar(); desenharCarrinho(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharGaveta(); });

desenharTabs(); desenharGrid(); desenharCarrinho();