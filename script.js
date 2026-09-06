// Mobile nav
const h=document.getElementById('hm'),n=document.getElementById('nk');
if(h&&n){
  h.addEventListener('click',()=>{h.classList.toggle('a');n.classList.toggle('o')});
  document.querySelectorAll('.nk a').forEach(l=>l.addEventListener('click',()=>{h.classList.remove('a');n.classList.remove('o')}));
}

// Nav scroll
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(!nav)return;
  if(window.scrollY>20)nav.classList.add('s');else nav.classList.remove('s')
});

// Active page highlighting
(()=>{
  let path=location.pathname.split('/').pop();
  if(path===''||path==='/')path='index.html';
  document.querySelectorAll('.nk a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page')===path)a.classList.add('active');
  });
})();

// Scroll reveals
const obs=new IntersectionObserver((e)=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');obs.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.rv,.rvl,.rvr,.rvs').forEach(e=>obs.observe(e));

// Staggered grid reveals
document.querySelectorAll('#sg,#gg').forEach(g=>{
  const i=g.querySelectorAll('.rvs');
  if(i.length){new IntersectionObserver((e)=>{if(e.some(e=>e.isIntersecting)){i.forEach((e,t)=>setTimeout(()=>e.classList.add('v'),80+t*60));obs.unobserve(g)}},{threshold:.05}).observe(g)}
});
