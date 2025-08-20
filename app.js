const € = n => n.toLocaleString("fr-FR",{minimumFractionDigits:2, maximumFractionDigits:2})+" €";
const el = sel => document.querySelector(sel);

function renderProducts() {
  const wrap = el("#products");
  wrap.innerHTML = "";
  window.PRODUCTS.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="row">
        <span class="price">${€(p.price)}</span>
        <button data-id="${p.id}" class="add">Ajouter</button>
      </div>`;
    wrap.appendChild(card);
  });
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".add");
    if (!btn) return;
    addToCart(btn.dataset.id);
  });
}

let CART = JSON.parse(localStorage.getItem("gh_cart") || "[]");
function saveCart(){ localStorage.setItem("gh_cart", JSON.stringify(CART)); }

function addToCart(id){
  const it = CART.find(i => i.id === id);
  if (it) it.qty += 1; else CART.push({ id, qty: 1 });
  saveCart(); renderCart();
}
function removeFromCart(id){
  CART = CART.filter(i => i.id !== id);
  saveCart(); renderCart();
}
function setQty(id, q){
  const it = CART.find(i=>i.id===id); if(!it) return;
  it.qty = Math.max(1, q|0);
  saveCart(); renderCart();
}

function computeShipping(subtotal){
  if (subtotal >= window.SHIPPING.freeFrom) return 0;
  if (subtotal >= 20) return window.SHIPPING.fee20to40;
  return window.SHIPPING.feeUnder20;
}

function renderCart(){
  const list = el("#cart");
  const totalEl = el("#total");
  list.innerHTML = "";

  if (CART.length === 0){
    list.innerHTML = `<li class="muted">Votre panier est vide.</li>`;
    totalEl.textContent = "Total : 0 €";
    return;
  }

  let subtotal = 0;
  CART.forEach(i => {
    const p = window.PRODUCTS.find(x=>x.id===i.id);
    subtotal += p.price * i.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="line">
        <span>${p.name}</span>
        <input type="number" min="1" value="${i.qty}" data-qty="${i.id}">
        <span>${€(p.price * i.qty)}</span>
        <button data-rm="${i.id}" title="Retirer">✕</button>
      </div>`;
    list.appendChild(li);
  });

  const shipping = computeShipping(subtotal);
  const total = subtotal + shipping;
  totalEl.innerHTML = `Sous-total : ${€(subtotal)} — Livraison : ${shipping===0?"gratuite":€(shipping)}<br><strong>Total : ${€(total)}</strong>`;

  list.addEventListener("click", e=>{
    const rm = e.target.closest("[data-rm]");
    if (rm) removeFromCart(rm.dataset.rm);
  }, { once:true });

  list.addEventListener("input", e=>{
    const inp = e.target.closest("[data-qty]");
    if (inp) setQty(inp.dataset.qty, parseInt(inp.value,10)||1);
  }, { once:true });
}

function checkout(){
  if (CART.length === 0) { alert("Votre panier est vide."); return; }
  let lines = "";
  let subtotal = 0;
  CART.forEach(i=>{
    const p = window.PRODUCTS.find(x=>x.id===i.id);
    subtotal += p.price*i.qty;
    lines += `- ${p.name} x${i.qty} (${€(p.price*i.qty)})%0D%0A`;
  });
  const shipping = computeShipping(subtotal);
  const total = subtotal + shipping;

  const subject = encodeURIComponent("Commande GreenHousefood");
  const body = `Bonjour,%0D%0A%0D%0AJe passe commande :%0D%0A${lines}%0D%0ASous-total : ${€(subtotal)}%0D%0AFrais de livraison : ${shipping===0?"0,00 €":€(shipping)}%0D%0ATotal : ${€(total)}%0D%0A%0D%0AMerci de confirmer l'horaire de préparation / livraison.%0D%0A`;
  window.location.href = `mailto:greenhouse.68@outlook.fr?subject=${subject}&body=${body}`;
}

function init(){
  renderProducts();
  renderCart();
  document.getElementById("checkout").addEventListener("click", checkout);
}
document.addEventListener("DOMContentLoaded", init);
