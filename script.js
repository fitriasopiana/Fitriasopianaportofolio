'use strict';
const CATS={all:'All',excel:'Excel & Data',business:'Business Support',design:'Design',web:'Web Learning'};
const PROJECTS=[
{id:'salary',cat:'excel',type:'Excel & Data',title:'Employee Salary Calculation',img:'salary-grade.png',gallery:['salary-grade.png','p-hijab.jpg'],tools:['Excel','VLOOKUP','HLOOKUP','COUNTIF'],summary:'Employee salary lists calculated with lookup formulas: base salary, allowances, tax and net pay (PT. XYZ), plus an employee salary list with allowances and COUNTIF summaries (PT. BYMYA HIJAB).',context:'Training exercise: calculate salaries from employee status, grade and position using reference tables.',approach:'Applied VLOOKUP and HLOOKUP to pull base salary, allowances and tax rates, then calculated gross and net pay. Used COUNTIF and SUMIF for per-unit summaries.',shows:'Comfort with reference tables, lookup logic and payroll-style calculations.',note:'Training exercise · Sample company data.'},
{id:'bpjs',cat:'excel',type:'Excel & Data',title:'Payroll, BPJS & Salary Slip',img:'payroll-bpjs.png',gallery:['payroll-bpjs.png','p-slip.jpg'],tools:['Excel','VLOOKUP','Payroll'],summary:'Payroll workbook covering base pay, bonuses, BPJS Ketenagakerjaan and Kesehatan contributions, PPh 21 and transport bonus, with a formatted salary slip.',context:'Practice based on a job-entry test format: build a payroll sheet and generate individual salary slips.',approach:'Used a reference table for base pay by position and applied contribution percentages for employer and employee, then produced a slip with total received, total deductions and net pay.',shows:'Attention to detail in financial administration and clear document formatting.',note:'Practice exercise · Sample employee data.'},
{id:'distributor',cat:'excel',type:'Excel & Data',title:'Distributor Sales & Cashback',img:'sales-distributor.png',gallery:['sales-distributor.png','p-distributor.jpg'],tools:['Excel','VLOOKUP','HLOOKUP','INDEX MATCH'],summary:'Beverage distributor sales recap with customer and product tables, quantity-based cashback, gifts and net revenue.',context:'Case study: complete transactions and apply promotional rules by customer, product and quantity.',approach:'Mapped business rules to lookup formulas (VLOOKUP, HLOOKUP, INDEX-MATCH and IF) to fill product names, prices, cashback and gifts.',shows:'Ability to turn business rules into clear, working spreadsheet formulas.',note:'Simulated distributor data · Training exercise.'},
{id:'retail',cat:'excel',type:'Excel & Data',title:'Weekly Retail Sales Recap',img:'sales-weekly.png',gallery:['sales-weekly.png'],tools:['Excel','VLOOKUP','IF'],summary:'Seven-day sales list for a clothing shop with customer and product lookups, tiered discounts, totals and daily averages.',context:'Practice brief: report weekly sales with discounts based on quantity.',approach:'Looked up product names and prices by code, applied conditional discounts with IF, and calculated net sales, totals and the daily average.',shows:'Routine sales administration and reporting.',note:'Sample scenario · Not actual client sales.'},
{id:'sambal-recap',cat:'excel',type:'Excel & Data',title:'Sambal Sales Recap',img:'p-excel4.jpg',gallery:['p-excel4.jpg'],tools:['Excel','Sales Tracking'],summary:'Sales log of Sambal Cumi and Sambal Bawang from October 2024 to June 2025, with unit price, quantity and total per transaction.',context:'Record keeping for my own sambal business.',approach:'Logged each sale by date, product and quantity, and totalled revenue with formulas.',shows:'Practical bookkeeping habits from running a small business.',note:'From my own food business.'},
{id:'docs',cat:'business',type:'Business Support',title:'Customer Email, Meeting & Task Documents',img:'business-doc.webp',gallery:['business-doc.webp','issue-doc.webp','p-email.jpg','p-meeting.jpg','p-sheet.jpg'],tools:['Docs','Sheets','Business Writing'],summary:'Virtual assistant practice samples: meeting summary with action items, customer email scenarios and a task and issue tracker.',context:'A sample beauty-business workflow needs clear meeting notes, structured customer emails and issue tracking.',approach:'Turned campaign notes into meeting summaries and assigned actions, drafted inquiry, complaint and refund email examples, and organized issues in a tracker sheet.',shows:'Organized documentation, written communication and task tracking. Emails are sample messages, not client replies.',note:'Scenario-based practice · Sample data.'},
{id:'promo',cat:'design',type:'Design',title:'Product Label & Promotion Designs',img:'p-business1.jpg',gallery:['p-business1.jpg','p-business2.jpg','p-business3.jpg'],tools:['Canva','Visual Design','Marketing'],summary:'Sambal product label, a drink promotion post and a skincare advertisement layout.',context:'Create attractive labels and promotional visuals for food and retail products.',approach:'Worked on layout, typography, color and product placement to create labels and social media style promotions.',shows:'Basic marketing design and visual hierarchy.',note:'Design practice and small business material.'},
{id:'social',cat:'design',type:'Design',title:'Social Media Profile',img:'p-social2.jpg',gallery:['p-social2.jpg'],tools:['Social Media','Content'],summary:'Screenshots of my social media profiles.',context:'Showing an active online presence.',approach:'Screenshots taken from the profiles shown.',shows:'Familiarity with social media platforms.',note:'Screenshots from my profiles.'},
{id:'web-admin',cat:'web',type:'Web Learning',title:'Admin Dashboard Interface',img:'web-admin.webp',gallery:['web-admin.webp','web-finance.webp','p-admin1.jpg','p-admin2.jpg','p-admin3.jpg','p-admin4.jpg','p-webadmin.jpg'],tools:['Web UI','Frontend Basics','AI-assisted'],summary:'Early dashboard-style interface screens explored while learning basic web layouts.',context:'Learning task: see how web interfaces organize data.',approach:'Practiced beginner layouts and interface elements with AI-assisted coding.',shows:'Early exposure to business-oriented web interfaces. Not a production system.',note:'Beginner learning project · AI-assisted · Functionality not verified.'},
{id:'web-pos',cat:'web',type:'Web Learning',title:'Cashier & Sales Interface',img:'web-pos.webp',gallery:['web-pos.webp','p-pos1.jpg','p-pos2.jpg','p-pos3.jpg','p-pos4.jpg','p-pos5.jpg','p-webpos.jpg'],tools:['Web UI','Retail Systems','AI-assisted'],summary:'Cashier, sales and receipt interface concepts.',context:'Learning task: visualize store operations such as item lists, transactions and receipts.',approach:'Built and iterated on example screens focusing on composition and workflow.',shows:'Interest in web-enabled business processes. Not a production POS system.',note:'Beginner practice · AI-assisted · Functionality not verified.'},
{id:'web-apps',cat:'web',type:'Web Learning',title:'Other Website & App Screens',img:'p-app1.jpg',gallery:['p-app1.jpg','p-app2.jpg','p-app3.jpg','p-app4.jpg','p-app5.jpg','p-app6.jpg','p-webfinance.jpg'],tools:['Web UI','App Screens','AI-assisted'],summary:'Other website and app screen explorations, including music interface screens.',context:'Learning task: explore interface ideas for different app types.',approach:'Experimented with screen composition and interface components.',shows:'Early exposure to interface design.',note:'Beginner learning project · AI-assisted · Functionality not verified.'}
];
const CERTS=[
{img:'p-cert1.jpg',title:'USAID Training: Thematic Student Service (KKN) on Entrepreneurship & Soft Skills',meta:'Certificate of completion · Cianjur, 18–19 June 2019'},
{img:'p-cert2.jpg',title:'Seminar Nasional Ekonomi Syariah',meta:'Participant · Universitas Suryakancana, 22 February 2020'},
{img:'p-cert3.jpg',title:'Talkshow Leadership LDKM & PDPU',meta:'Participant · 17 February 2020'}
];
const CULI=[
{img:'p-business1.jpg',cap:'Sambal label design'},
{img:'p-business7.jpg',cap:'Filled cireng'},
{img:'p-business6.jpg',cap:'Cireng with sauce'},
{img:'p-business8.jpg',cap:'Fried cireng'},
{img:'p-business4.jpg',cap:'Banana snacks',dark:true},
{img:'p-excel4.jpg',cap:'Sales recap in Excel'}
];
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* nav */
const nav=$('#nav'),links=$('#links'),burger=$('#burger');
burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20),{passive:true});
$('#year').textContent=new Date().getFullYear();

/* projects */
let filter='all';
function renderFilters(){
  $('#filters').innerHTML=Object.keys(CATS).map(k=>{
    const n=k==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===k).length;
    return `<button class="chip${k===filter?' on':''}" data-f="${k}">${CATS[k]} <small>${n}</small></button>`}).join('');
}
function renderGrid(){
  $('#grid').innerHTML=PROJECTS.filter(p=>filter==='all'||p.cat===filter).map(p=>`
  <article class="pcard"><button class="pimg" data-p="${p.id}" aria-label="Open ${esc(p.title)}"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy"><span class="pcount">${p.gallery.length} image${p.gallery.length>1?'s':''}</span></button>
  <div class="pbody"><p class="ptype">${p.type}</p><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
  <div class="ptags">${p.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
  <button class="plink" data-p="${p.id}">View project →</button></div></article>`).join('');
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;filter=b.dataset.f;renderFilters();renderGrid()});
$('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(b)openProject(b.dataset.p)});

/* certificates + culinary */
$('#certs').innerHTML=CERTS.map((c,i)=>`<figure class="cert"><button data-c="${i}" aria-label="Open certificate"><img src="${c.img}" alt="${esc(c.title)}" loading="lazy"></button><figcaption><b>${esc(c.title)}</b><span>${esc(c.meta)}</span></figcaption></figure>`).join('');
$('#certs').addEventListener('click',e=>{const b=e.target.closest('[data-c]');if(!b)return;const c=CERTS[b.dataset.c];openGallery({type:'Certificate',title:c.title,summary:c.meta,gallery:[c.img],info:''})});
$('#culinaryGallery').innerHTML=CULI.map((c,i)=>`<figure class="g${c.dark?' dk':''}"><button data-g="${i}" aria-label="Open photo"><img src="${c.img}" alt="${esc(c.cap)}" loading="lazy"></button><figcaption>${esc(c.cap)}</figcaption></figure>`).join('');
$('#culinaryGallery').addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(!b)return;openGallery({type:'Culinary business',title:'Culinary business',summary:'Sambal, cireng, cilok and banana snacks.',gallery:CULI.map(c=>c.img),start:+b.dataset.g,info:''})});

/* lightbox */
let cur=null,idx=0;
const lb=$('#lb');
function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;
  openGallery({type:p.type,title:p.title,summary:p.summary,gallery:p.gallery,info:`<div><h4>Context</h4><p>${esc(p.context)}</p></div><div><h4>Approach</h4><p>${esc(p.approach)}</p></div><div><h4>What it shows</h4><p>${esc(p.shows)}</p></div><div><h4>Tools</h4><p>${p.tools.map(esc).join(' · ')}</p></div><p class="lb-note">${esc(p.note)}</p>`})}
function openGallery(g){cur=g;idx=g.start||0;
  $('#lbType').textContent=g.type;$('#lbTitle').textContent=g.title;$('#lbSum').textContent=g.summary;$('#lbInfo').innerHTML=g.info||'';
  $('#lbThumbs').innerHTML=g.gallery.length>1?g.gallery.map((s,i)=>`<button data-i="${i}" aria-label="Image ${i+1}"><img src="${s}" alt=""></button>`).join(''):'';
  show();lb.hidden=false;document.body.style.overflow='hidden';$('.lb-x').focus()}
function show(){const s=cur.gallery[idx];const im=$('#lbImg');im.src=s;im.alt=cur.title+' — image '+(idx+1);
  document.querySelectorAll('#lbThumbs button').forEach((b,i)=>b.classList.toggle('on',i===idx));
  const multi=cur.gallery.length>1;$('#lbPrev').hidden=!multi;$('#lbNext').hidden=!multi}
function step(d){idx=(idx+d+cur.gallery.length)%cur.gallery.length;show()}
function close(){lb.hidden=true;document.body.style.overflow=''}
$('#lbPrev').addEventListener('click',()=>step(-1));$('#lbNext').addEventListener('click',()=>step(1));
$('#lbThumbs').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b){idx=+b.dataset.i;show()}});
lb.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))close()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft'&&cur.gallery.length>1)step(-1);if(e.key==='ArrowRight'&&cur.gallery.length>1)step(1)});

renderFilters();renderGrid();
