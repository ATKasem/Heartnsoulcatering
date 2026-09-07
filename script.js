// Mobile nav
const h=document.getElementById('hm'),n=document.getElementById('nk');
if(h&&n){
  const openMenu=()=>{h.classList.add('a');n.classList.add('o');h.setAttribute('aria-expanded','true')};
  const closeMenu=()=>{h.classList.remove('a');n.classList.remove('o');h.setAttribute('aria-expanded','false')};
  h.addEventListener('click',()=>{h.classList.contains('a')?closeMenu():openMenu()});
  document.querySelectorAll('.nk a').forEach(l=>l.addEventListener('click',closeMenu));
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'&&h.classList.contains('a')){closeMenu();h.focus()}
  });
}

// Nav scroll
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(!nav)return;
  if(window.scrollY>20)nav.classList.add('s');else nav.classList.remove('s')
});

// Active page highlighting
(()=>{
  let path=location.pathname.replace(/index\.html?$/,'').replace(/\.html$/,'');
  if(path.length>1&&path.endsWith('/'))path=path.slice(0,-1);
  if(path==='')path='/';
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
