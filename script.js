'use strict';
const CATS={all:'All',excel:'Excel & Data',business:'Business Support',design:'Design',web:'Web Learning'};
const PROJECTS=[
{id:'payroll-report',featured:true,cat:'excel',type:'Excel & Data',title:'Employee Payroll Report',img:'payroll-report.png',gallery:['payroll-report.png'],tools:['Excel','Lookup formulas','Helper table'],
 summary:'A monthly payroll report for 10 employees in 4 departments: base salary from a helper table, years of service, allowance and net pay.',
 task:'Build a one-page monthly payroll report (February 2025) for 10 employees, using a helper table of department codes and base salaries.',
 did:'Listed each employee with ID, status, department and position. Calculated years of service from the year joined, took base salary from the helper table by department code, added the allowance and summed it into net pay.',
 result:'A clean, readable report with net pay for every employee and a total that can be checked at a glance.',
 check:'10 employees · 4 base-salary levels (Rp 7,500,000 – 9,000,000) · net pay = base salary + allowance in every row · total net pay Rp 97,625,000.',
 note:'Training exercise · Sample company data.',
 stats:[['10','Employees',0],['4','Departments',0],['Rp 97,625,000','Total net pay (month)',0]]},
{id:'issue-tracker',cat:'business',type:'Business Support',title:'Customer Issue Tracker',img:'issue-tracker.png',gallery:['issue-tracker.png'],tools:['Google Sheets','Dropdowns','Filters'],
 summary:'A tracker for 19 customer issues at a skincare store, with status, priority, owner and resolution date.',
 task:'Keep customer complaints for a skincare store organized so a team can see what is open, who owns it and when it was solved.',
 did:'Logged each issue with ID, date, product, description, status, priority and owner. Used dropdown menus for status, priority and assignee, added filters to the header row and filled in a resolution date for closed issues.',
 result:'A tracker the team can filter by status or priority to decide what to handle first.',
 check:'19 issues = 7 open + 4 in progress + 8 closed · priorities: 8 high, 5 medium, 6 low · every closed issue has a resolution date.',
 note:'Sample scenario · Fictional names and data.'},
{id:'land-data',cat:'excel',type:'Excel & Data',title:'Land Parcel Data Table',img:'land-data-private.png',gallery:['land-data-private.png'],tools:['Google Sheets','Data Entry','Data Structure'],
 summary:'A structured table of land parcel records with 12 fields per record, from parcel number to the year the certificate was issued.',
 task:'Organize land parcel records into one table: parcel number (NIB), rights number, area, owner, ID number, address, village, sub-district, district, province and year issued.',
 did:'Entered each parcel as one numbered row, kept location fields (village, sub-district, district, province) and year in a consistent format, and colour-coded the column headers by type of information.',
 result:'A table that is easy to filter, verify and summarize by village, area or year of issue.',
 check:'12 fields per record · every row has its own number and parcel ID (NIB) in the rows shown.',
 note:'Related to my land data work · Owner names, ID numbers and addresses are hidden on this site to protect privacy.'},
{id:'salary',cat:'excel',type:'Excel & Data',title:'Employee Salary Calculation',img:'salary-grade.png',gallery:['salary-grade.png','p-hijab.jpg'],tools:['Excel','VLOOKUP','HLOOKUP','COUNTIF'],
 summary:'Employee salary lists calculated with lookup formulas: base salary, allowances, tax and net pay, plus a salary list with COUNTIF summaries.',
 task:'Calculate salaries from employee status, grade and position using reference tables.',
 did:'Used VLOOKUP and HLOOKUP to pull base salary, allowances and tax rates, then calculated gross and net pay. Used COUNTIF and SUMIF for per-unit summaries.',
 result:'Salary lists where every figure comes from a reference table instead of manual typing.',
 note:'Training exercise · Sample company data (PT. XYZ and PT. BYMYA HIJAB).'},
{id:'bpjs',cat:'excel',type:'Excel & Data',title:'Payroll, BPJS & Salary Slip',img:'payroll-bpjs.png',gallery:['payroll-bpjs.png','p-slip.jpg'],tools:['Excel','VLOOKUP','Payroll'],
 summary:'Payroll workbook with base pay, bonuses, BPJS Ketenagakerjaan and Kesehatan contributions, PPh 21 and a formatted salary slip.',
 task:'Build a payroll sheet from a job-entry test format and generate individual salary slips.',
 did:'Used a reference table for base pay by position, applied contribution percentages for employer and employee, then produced a slip with total received, total deductions and net pay.',
 result:'A payroll sheet plus a clean salary slip.',
 note:'Practice exercise · Sample employee data.'},
{id:'distributor',cat:'excel',type:'Excel & Data',title:'Distributor Sales & Cashback',img:'sales-distributor.png',gallery:['sales-distributor.png','p-distributor.jpg'],tools:['Excel','VLOOKUP','HLOOKUP','INDEX MATCH'],
 summary:'Beverage distributor sales recap with customer and product tables, quantity-based cashback, gifts and net revenue.',
 task:'Complete transactions and apply promotional rules by customer, product and quantity.',
 did:'Mapped business rules to lookup formulas (VLOOKUP, HLOOKUP, INDEX-MATCH and IF) to fill product names, prices, cashback and gifts.',
 result:'A sales recap where rules and prices come straight from the tables.',
 note:'Simulated distributor data · Training exercise.'},
{id:'retail',cat:'excel',type:'Excel & Data',title:'Weekly Retail Sales Recap',img:'sales-weekly.png',gallery:['sales-weekly.png'],tools:['Excel','VLOOKUP','IF'],
 summary:'Seven-day sales list for a clothing shop with lookups, tiered discounts, totals and daily averages.',
 task:'Report weekly sales with discounts based on quantity.',
 did:'Looked up product names and prices by code, applied conditional discounts with IF, and calculated net sales, totals and the daily average.',
 result:'A weekly sales report ready for routine reporting.',
 note:'Sample scenario · Not actual client sales.'},
{id:'sambal-recap',cat:'excel',type:'Excel & Data',title:'Sambal Sales Recap',img:'p-excel4.jpg',gallery:['p-excel4.jpg'],tools:['Excel','Sales Tracking'],
 summary:'Sales log of Sambal Cumi and Sambal Bawang from October 2024 to June 2025, with unit price, quantity and total per transaction.',
 task:'Keep records of my own sambal sales.',
 did:'Logged each sale by date, product and quantity, and totalled revenue with formulas.',
 result:'A running record of sales and revenue over nine months.',
 note:'From my own food business.'},
{id:'docs',cat:'business',type:'Business Support',title:'Customer Email, Meeting & Task Documents',img:'business-doc.webp',gallery:['business-doc.webp','issue-doc.webp','p-email.jpg','p-meeting.jpg'],tools:['Docs','Business Writing'],
 summary:'Virtual assistant practice samples: a meeting summary with action items and customer email scenarios.',
 task:'A sample beauty-business workflow needs clear meeting notes and structured customer emails.',
 did:'Turned campaign notes into a meeting summary with assigned actions, and drafted inquiry, complaint and refund-request email examples.',
 result:'Organized documentation and developing professional writing in English. The emails are sample messages, not client replies.',
 note:'Scenario-based practice · Sample data.'},
{id:'promo',cat:'design',type:'Design',title:'Product Label & Promotion Designs',img:'p-business1.jpg',gallery:['p-business1.jpg','p-business2.jpg','p-business3.jpg'],tools:['Canva','Visual Design','Marketing'],
 summary:'Sambal product label, a drink promotion post and a skincare advertisement layout.',
 task:'Create attractive labels and promotional visuals for food and retail products.',
 did:'Worked on layout, typography, colour and product placement for labels and social-media style promotions.',
 result:'Basic marketing visuals for my own products and practice layouts.',
 note:'Design practice and small business material.'},
{id:'social',cat:'design',type:'Design',title:'Social Media Profile',img:'p-social2.jpg',gallery:['p-social2.jpg'],tools:['Social Media','Content'],
 summary:'Screenshots of my social media profiles.',task:'Show my online presence.',did:'Screenshots taken from the profiles shown.',result:'Familiarity with social media platforms.',note:'Screenshots from my profiles.'},
{id:'web-admin',cat:'web',type:'Web Learning',title:'Admin Dashboard Interface',img:'web-admin.webp',gallery:['web-admin.webp','web-finance.webp','p-admin1.jpg','p-admin2.jpg','p-admin3.jpg','p-admin4.jpg','p-webadmin.jpg'],tools:['Web UI','Frontend Basics','AI-assisted'],
 summary:'Early dashboard-style interface screens explored while learning basic web layouts.',task:'Learn how web interfaces organize data.',did:'Practiced beginner layouts and interface elements with AI-assisted coding.',result:'Early exposure to business-oriented web interfaces. Not a production system.',note:'Beginner learning project · AI-assisted · Functionality not verified.'},
{id:'web-pos',cat:'web',type:'Web Learning',title:'Cashier & Sales Interface',img:'web-pos.webp',gallery:['web-pos.webp','p-pos1.jpg','p-pos2.jpg','p-pos3.jpg','p-pos4.jpg','p-pos5.jpg','p-webpos.jpg'],tools:['Web UI','Retail Systems','AI-assisted'],
 summary:'Cashier, sales and receipt interface concepts.',task:'Visualize store operations such as item lists, transactions and receipts.',did:'Built and iterated on example screens focusing on composition and workflow.',result:'Interest in web-enabled business processes. Not a production POS system.',note:'Beginner practice · AI-assisted · Functionality not verified.'},
{id:'web-apps',cat:'web',type:'Web Learning',title:'Other Website & App Screens',img:'p-app1.jpg',gallery:['p-app1.jpg','p-app2.jpg','p-app3.jpg','p-app4.jpg','p-app5.jpg','p-app6.jpg','p-webfinance.jpg'],tools:['Web UI','App Screens','AI-assisted'],
 summary:'Other website and app screen explorations, including music interface screens.',task:'Explore interface ideas for different app types.',did:'Experimented with screen composition and interface components.',result:'Early exposure to interface design.',note:'Beginner learning project · AI-assisted · Functionality not verified.'}
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

/* featured project */
const F=PROJECTS.find(p=>p.featured);
$('#featured').innerHTML=`<button class="f-img" data-p="${F.id}" aria-label="Open ${esc(F.title)}"><img src="${F.img}" alt="${esc(F.title)}"><span class="pcount">Click to enlarge</span></button>
<div class="f-body"><span class="f-tag">Featured project</span><h3>${esc(F.title)}</h3><p class="f-sum">${esc(F.summary)}</p>
<div class="f-stats">${F.stats.map(s=>`<div><b data-n="${esc(s[0])}">${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join('')}</div>
<dl class="f-dl"><div><dt>Task</dt><dd>${esc(F.task)}</dd></div><div><dt>What I did</dt><dd>${esc(F.did)}</dd></div><div><dt>Result</dt><dd>${esc(F.result)}</dd></div><div><dt>Data check</dt><dd>${esc(F.check)}</dd></div></dl>
<div class="ptags">${F.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div><p class="f-note">${esc(F.note)}</p></div>`;
$('#featured').addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(b)openProject(b.dataset.p)});

/* projects */
const LIB=PROJECTS.filter(p=>!p.featured);
let filter='all';
function renderFilters(){
  $('#filters').innerHTML=Object.keys(CATS).map(k=>{
    const n=k==='all'?LIB.length:LIB.filter(p=>p.cat===k).length;
    return `<button class="chip${k===filter?' on':''}" data-f="${k}">${CATS[k]} <small>${n}</small></button>`}).join('');
}
function renderGrid(){
  $('#grid').innerHTML=LIB.filter(p=>filter==='all'||p.cat===filter).map(p=>`
  <article class="pcard"><button class="pimg" data-p="${p.id}" aria-label="Open ${esc(p.title)}"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy"><span class="pcount">${p.gallery.length} image${p.gallery.length>1?'s':''}</span></button>
  <div class="pbody"><p class="ptype">${p.type}</p><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
  <div class="ptags">${p.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
  <button class="plink" data-p="${p.id}">View case study →</button></div></article>`).join('');
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;filter=b.dataset.f;renderFilters();renderGrid()});
$('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(b)openProject(b.dataset.p)});

/* certificates + culinary */
$('#certs').innerHTML=CERTS.map((c,i)=>`<figure class="cert rv"><button data-c="${i}" aria-label="Open certificate"><img src="${c.img}" alt="${esc(c.title)}" loading="lazy"></button><figcaption><b>${esc(c.title)}</b><span>${esc(c.meta)}</span></figcaption></figure>`).join('');
$('#certs').addEventListener('click',e=>{const b=e.target.closest('[data-c]');if(!b)return;const c=CERTS[b.dataset.c];openGallery({type:'Certificate',title:c.title,summary:c.meta,gallery:[c.img],info:''})});
$('#culinaryGallery').innerHTML=CULI.map((c,i)=>`<figure class="g${c.dark?' dk':''}"><button data-g="${i}" aria-label="Open photo"><img src="${c.img}" alt="${esc(c.cap)}" loading="lazy"></button><figcaption>${esc(c.cap)}</figcaption></figure>`).join('');
$('#culinaryGallery').addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(!b)return;openGallery({type:'Culinary business',title:'Culinary business',summary:'Sambal, cireng, cilok and banana snacks.',gallery:CULI.map(c=>c.img),start:+b.dataset.g,info:''})});

/* lightbox */
let cur=null,idx=0;
const lb=$('#lb');
function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;
  const row=(h,t)=>t?`<div><h4>${h}</h4><p>${esc(t)}</p></div>`:'';
  openGallery({type:p.type,title:p.title,summary:p.summary,gallery:p.gallery,info:row('Task',p.task)+row('What I did',p.did)+row('Result',p.result)+row('Data check',p.check)+`<div><h4>Tools</h4><p>${p.tools.map(esc).join(' · ')}</p></div><p class="lb-note">${esc(p.note)}</p>`})}
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

/* reveal on scroll + counters */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.job,.card,.pcard,.g,.step,.svc-c,.cert,.f-img,.f-body').forEach(el=>el.classList.add('rv'));
function count(el){
  const raw=el.dataset.n;const m=raw.match(/[\d,]+/);if(!m||reduce)return;
  const target=+m[0].replace(/,/g,''),pre=raw.slice(0,m.index),post=raw.slice(m.index+m[0].length);
  const t0=performance.now(),dur=1400;
  (function f(t){const k=Math.min(1,(t-t0)/dur),v=Math.round(target*(1-Math.pow(1-k,3)));
    el.textContent=pre+v.toLocaleString('en-US')+post;if(k<1)requestAnimationFrame(f)})(t0);
}
if('IntersectionObserver' in window&&!reduce){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
}else{document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'))}
