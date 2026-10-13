
(() => {
  const key='modafinilshop-cart-v1';
  const catalog={"modaxl-200":"MODAXL 200","modawake":"MODAWAKE","modacare-200":"MODACARE 200","modacare-300":"MODACARE 300","armodacare-150":"ARMODACARE 150","armodacare-250":"ARMODACARE 250","modalert-200":"MODALERT 200","waklert":"WAKLERT","modvigil-200":"MODVIGIL 200","artvigil":"ARTVIGIL"};
  const list=document.querySelector('[data-checkout-items]'); const total=document.querySelector('[data-checkout-total]'); const form=document.querySelector('[data-checkout-form]'); const done=document.querySelector('[data-checkout-success]'); if(!list||!form) return;
  let cart={}; try{cart=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch(e){cart={};}
  const entries=Object.entries(cart).filter(([slug,qty])=>catalog[slug]&&Number(qty)>0);
  if(!entries.length){list.innerHTML='<div class="empty">Košík je zatiaľ prázdny. Vyberte si produkty a potom pokračujte k objednávke.</div>'; if(total) total.textContent='0 ks'; const submit=form.querySelector('[type="submit"]'); if(submit) submit.disabled=true; return;}
  const root=''; let count=0;
  entries.forEach(([slug,qty])=>{count+=Number(qty); const item=document.createElement('div'); item.className='checkout-item'; item.innerHTML=`<img src="assets/images/${slug}-main.webp" alt="${catalog[slug]}"><div><strong>${catalog[slug]}</strong><span>Množstvo: ${qty} ks</span></div>`; list.appendChild(item);});
  if(total) total.textContent=`${count} ks`;
  form.addEventListener('submit',(e)=>{e.preventDefault(); if(!form.reportValidity()) return; form.hidden=true; if(done) done.hidden=false; window.scrollTo({top:0,behavior:'smooth'}); try{localStorage.removeItem(key);}catch(err){}});
})();
