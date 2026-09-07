// Progressive enhancement flag (gates carousel CSS; without JS, .tg stays a stacked grid)
document.documentElement.classList.add('js');

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

// Review carousel(s): one card at a time on mobile, up to 3 at a time on desktop
document.querySelectorAll('.tgw').forEach(wrap=>{
  const track=wrap.querySelector('.tg');
  const prevBtn=wrap.querySelector('.tgb-prev');
  const nextBtn=wrap.querySelector('.tgb-next');
  const status=wrap.querySelector('.tgs');
  if(!track||!prevBtn||!nextBtn||!status)return;
  const cards=[...track.children];
  if(!cards.length)return;
  let index=0;

  const perView=()=>window.innerWidth>=860?Math.min(3,cards.length):1;
  const maxIndex=()=>Math.max(0,cards.length-perView());

  function update(){
    const pv=perView();
    index=Math.min(index,maxIndex());
    const offset=cards[index].offsetLeft;
    track.style.transform=`translateX(-${offset}px)`;
    cards.forEach((c,i)=>{
      c.setAttribute('aria-hidden',(i<index||i>=index+pv)?'true':'false');
    });
    prevBtn.disabled=index===0;
    nextBtn.disabled=index>=maxIndex();
    const last=Math.min(index+pv,cards.length);
    status.textContent=pv>1?`Showing reviews ${index+1} to ${last} of ${cards.length}`:`Showing review ${index+1} of ${cards.length}`;
  }

  prevBtn.addEventListener('click',()=>{index=Math.max(0,index-1);update()});
  nextBtn.addEventListener('click',()=>{index=Math.min(maxIndex(),index+1);update()});
  window.addEventListener('resize',update);
  update();
});
