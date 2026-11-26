'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const G=JSON.parse($('#gdata').textContent);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* menu */
const nav=$('#nav'),links=$('#links'),burger=$('#burger');
const setMenu=o=>{links.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')};
burger.addEventListener('click',()=>setMenu(!links.classList.contains('open')));
links.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&links.classList.contains('open')){setMenu(false);burger.focus()}});
const onScroll=()=>nav.classList.toggle('scrolled',scrollY>12);
addEventListener('scroll',onScroll,{passive:true});onScroll();
$('#year').textContent=new Date().getFullYear();

/* active section in nav */
const secs=$$('main section[id]'),navA=$$('#links a[href^="#"]');
if('IntersectionObserver' in window){
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navA.forEach(a=>a.classList.toggle('cur',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(s=>so.observe(s));
}

/* project filter: every card stays in the HTML, filtering only hides */
const chips=$$('#filters .chip'),cards=$$('.pc');
function applyFilter(f){
  chips.forEach(c=>{const on=c.dataset.f===f;c.classList.toggle('on',on);c.setAttribute('aria-pressed',on)});
  cards.forEach(c=>{c.hidden=!(f==='all'||c.dataset.cat===f)});
  let any=false;
  $$('.pgroup').forEach(g=>{const v=g.querySelectorAll('.pc:not([hidden])').length>0;g.hidden=!v;any=any||v});
  $('#empty').hidden=any;
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b)applyFilter(b.dataset.f)});

/* image viewer */
let cur=null,idx=0,last=null;const lb=$('#lb');
function show(){const im=$('#lbImg');im.src=cur.gallery[idx];im.alt=cur.title+' — image '+(idx+1)+' of '+cur.gallery.length;
  $$('#lbThumbs button').forEach((b,i)=>b.classList.toggle('on',i===idx));
  const m=cur.gallery.length>1;$('#lbPrev').hidden=!m;$('#lbNext').hidden=!m}
function openLb(id,i,from){cur=G[id];if(!cur)return;idx=+i||0;last=from;
  $('#lbType').textContent=cur.label;$('#lbTitle').textContent=cur.title;
  $('#lbThumbs').innerHTML=cur.gallery.length>1?cur.gallery.map((s,k)=>`<button data-i="${k}" aria-label="Show image ${k+1}"><img src="${s}" alt=""></button>`).join(''):'';
  show();lb.hidden=false;document.body.style.overflow='hidden';$('.lb-x').focus()}
function closeLb(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
function step(d){idx=(idx+d+cur.gallery.length)%cur.gallery.length;show()}
document.addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(b&&!lb.contains(b))openLb(b.dataset.p,b.dataset.i,b)});
$('#lbThumbs').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b){idx=+b.dataset.i;show()}});
$('#lbPrev').addEventListener('click',()=>step(-1));$('#lbNext').addEventListener('click',()=>step(1));
lb.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))closeLb()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')closeLb();if(cur.gallery.length>1){if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)}});

/* simple reveal on scroll (skipped for reduced motion; content stays visible if anything fails) */
if(!reduce&&'IntersectionObserver' in window){
  document.documentElement.classList.add('anim');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  $$('.rv').forEach(el=>io.observe(el));
  setTimeout(()=>$$('.rv').forEach(el=>el.classList.add('in')),4000);
}
