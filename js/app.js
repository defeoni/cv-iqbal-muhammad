/* Perakit halaman: render, ganti tema, animasi, nav, dan musik Web Audio. */
/* ═══ render ═══ */
let currentJob=null, patFlip=false;

function render(){
  const c=DATA.contact, m=DATA.meta;

  $('#heroIn').innerHTML=`
    <div>
      <span class="kicker"><i class="dot"></i>${esc(T(m,'open'))}</span>
      <h1><span class="jp">履歴</span>Iqbal Muhammad<span class="alias">Defeony · vakansisenja</span></h1>
      <p class="tagline">${esc(T(m,'tag'))}</p>
      <p class="lede">${esc(T(m,'lede'))}</p>
      <p class="where">⛩ ${esc(T(m,'loc'))}</p>
      <div class="cta">
        <a class="btn solid" href="mailto:${c.email}">${esc(u('mailBtn'))}</a>
        <a class="btn ghost" href="${c.cv}" target="_blank" rel="noopener">${esc(u('cvBtn'))}</a>
        <a class="btn ghost" href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
    <div class="portrait">
      <div class="tategaki">時間厳守・整理整頓</div>
      <div class="frame"><img src="img/foto-hero.jpg" alt="Iqbal Muhammad"></div>
      <svg class="stamp" viewBox="0 0 60 60" aria-hidden="true">
        <rect x="2" y="2" width="56" height="56" rx="8" fill="var(--shu)"/>
        <g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
          <path d="M14 18h32M30 18v26M20 44h20M17 30h26"/></g>
      </svg>
    </div>`;

  // angka final ditulis langsung di markup: kalau animasi tidak pernah jalan
  // (reduced-motion, rAF diblokir, JS mati), angkanya tetap benar
  const fmt=(n)=>n%1?n.toFixed(2).replace('.',','):String(n);
  $('#statRow').innerHTML=DATA.stats.map(s=>`
    <div class="stat"><b data-n="${s.n}">${fmt(s.n)}<span>${esc(s.suf)}</span></b><small>${esc(T(s,'lab'))}</small></div>`).join('');

  const head=(k)=>`<div class="head"><span class="kj">${UI[k].kj}</span>
      <div><div class="eyebrow">${esc(u('eb'+k[0].toUpperCase()+k.slice(1)))}</div><h2>${esc(u(k))}</h2></div>
      <span class="rule"></span></div>`;

  $('#app').innerHTML=`
  <section id="work">${head('work')}
    <p class="sub">${esc(u('workSub'))}</p>
    <div class="work">
      <div class="joblist" role="group" aria-label="${esc(u('work'))}">${DATA.jobs.map(j=>`
        <button class="job" data-job="${j.key}" aria-pressed="false">
          <span class="org">${esc(j.org)}</span>
          <span class="meta"><span>${esc(j.period)}</span><span>${esc(j.yrs)}</span></span>
          <span class="kind">${esc(T(j,'kind'))}</span></button>`).join('')}
      </div>
      <div class="card detail reveal" id="jobDetail"></div>
    </div>
  </section>

  <section id="ventures">${head('ventures')}
    <p class="sub">${esc(u('venturesSub'))}</p>
    <div class="g4">${DATA.ventures.map(v=>`
      <div class="card pad reveal"><h3><span class="gl">${v.glyph}</span>${esc(v.name)}</h3>
        <div class="mini">${esc(T(v,'role'))} · ${esc(v.period)}</div>
        <p>${esc(T(v,'desc'))}</p></div>`).join('')}
    </div>
  </section>

  <section id="awards">${head('awards')}
    <p class="sub">${esc(u('awardsSub'))}</p>
    <div class="g2">${DATA.awards.map(a=>`
      <div class="card aw reveal${a.big?' big':''}">${icon(a.ic)}
        <div><h3>${esc(T(a,'title'))}</h3><div class="mini">${esc(a.meta)}</div>
        <p>${esc(T(a,'desc'))}</p></div></div>`).join('')}
    </div>
  </section>

  <section id="edu">${head('edu')}
    <p class="sub">${esc(u('eduSub'))}</p>
    <div class="g3">${DATA.education.map(e=>`
      <div class="card pad reveal"><div class="mini">${esc(e.period)} · ${esc(e.score)}</div>
        <h3 style="margin-top:.3rem">${esc(T(e,'deg'))}</h3>
        <div class="mini" style="color:var(--accentInk)">${esc(e.inst)}</div>
        <p>${esc(T(e,'note'))}</p></div>`).join('')}
    </div>
  </section>

  <section id="certs">${head('certs')}
    <p class="sub">${esc(u('certsSub'))}</p>
    <div class="feat">${DATA.featCerts.map(f=>`
      <figure class="card fc reveal">
        <a class="shot" href="${f.img}" target="_blank" rel="noopener"
           aria-label="${esc(T(f,'title'))}"><img src="${f.img}" alt="${esc(T(f,'title'))}" loading="lazy"></a>
        <figcaption data-kj="${f.kj}">
          <div class="tagline2">${esc(T(f,'tag'))}</div>
          <h3>${esc(T(f,'title'))}</h3>
          <div class="mini">${esc(f.meta)}</div>
          <p>${esc(T(f,'body'))}</p>
        </figcaption>
      </figure>`).join('')}
    </div>
    <h3 style="font-size:.95rem; margin:1.5rem 0 .6rem">${esc(u('miniCertsT'))}</h3>
    <div class="g3">${DATA.miniCerts.map(c=>`
      <figure class="card mc reveal">
        <a class="shot" href="${c.img}" target="_blank" rel="noopener"
           aria-label="${esc(T(c,'n'))}"><img src="${c.img}" alt="${esc(T(c,'n'))}" loading="lazy"></a>
        <figcaption><b>${esc(T(c,'n'))}</b><span class="mini">${esc(c.meta)}</span></figcaption>
      </figure>`).join('')}
    </div>
    <h3 style="font-size:.95rem; margin:1.5rem 0 .6rem">${esc(u('moreCerts'))}</h3>
    <div class="chips reveal">${DATA.certs.map(x=>`
      <span class="chip"><s>${x.y}</s>${esc(x.n)}</span>`).join('')}
    </div>
  </section>

  <section id="skills">${head('skills')}
    <p class="sub">${esc(u('skillsSub'))}</p>
    <div class="g2">${DATA.skills.map(s=>`
      <div class="card pad sk reveal"><h3><span class="gl">${s.glyph}</span>${esc(T(s,'title'))}</h3>
        <ul>${s.items.map(it=>`<li class="${it.star?'star':''}">${esc(L(it))}</li>`).join('')}</ul></div>`).join('')}
    </div>
    <div class="card pad reveal" style="margin-top:.8rem">
      <h3><span class="gl">語</span>${esc(u('langs'))}</h3>
      ${DATA.languages.map(l=>`<div class="lang-row"><span>${esc(T(l,'name'))}</span>
        <span class="bar"><i data-pct="${l.pct}" style="width:${l.pct}%"></i></span><small>${esc(T(l,'lvl'))}</small></div>`).join('')}
    </div>
  </section>

  <section id="road">${head('road')}
    <p class="sub">${esc(u('roadSub'))}</p>
    <div class="road">${DATA.roadmap.map(r=>`
      <div class="card mile reveal"><div class="yr">${r.year}</div>
        <div><div class="in">${esc(T(r,'in'))}</div><h3>${esc(T(r,'title'))}</h3>
        <p>${esc(T(r,'desc'))}</p></div></div>`).join('')}
    </div>
    <h3 style="font-size:.95rem; margin:1.4rem 0 .2rem">${esc(u('running'))}</h3>
    <div class="running">${DATA.running.map(r=>`
      <div class="run reveal"><span class="gl">${r.g}</span><span>${esc(L(r))}</span></div>`).join('')}
    </div>
  </section>

  <section id="personal">${head('personal')}
    <p class="sub">${esc(u('personalSub'))}</p>
    <div class="g3">${DATA.personal.map(p=>`
      <div class="card pad reveal"><h3><span class="gl">${p.g}</span>${esc(T(p,'t'))}</h3>
        <p>${esc(T(p,'b'))}</p></div>`).join('')}
    </div>
    <div class="card quote reveal"><span class="kj">誠</span>
      <p>${esc(T(DATA.principle,'q'))}</p><cite>${esc(T(DATA.principle,'by'))}</cite></div>
  </section>

  <section id="contact">${head('contact')}
    <p class="sub">${esc(u('contactSub'))}</p>
    <div class="card contact reveal">
      <img src="img/foto-avatar.jpg" alt="Iqbal Muhammad">
      <div><h3>Iqbal Muhammad Syaidul Akbar</h3>
        <div class="mini">${esc(T(DATA.meta,'loc'))}</div>
        <div class="links">
          <a class="btn solid" href="mailto:${c.email}">${c.email}</a>
          <a class="btn" href="${c.linkedin}" target="_blank" rel="noopener">${esc(c.linkedinLabel)}</a>
          <a class="btn" href="${c.fb}" target="_blank" rel="noopener">${esc(c.fbLabel)}</a>
          <a class="btn" href="${c.cv}" target="_blank" rel="noopener">${esc(c.cvLabel)}</a>
        </div></div>
    </div>
  </section>`;

  $('#navlinks').innerHTML=['work','ventures','awards','edu','certs','skills','road','personal','contact']
    .map(k=>`<a href="#${k}">${esc(u(k))}</a>`).join('');
  $('#footL').textContent='© Iqbal Muhammad · Defeony · vakansisenja';
  $('#footR').textContent=u('noSensitive');
  if(typeof SND!=='undefined')
    $('#sndLabel').textContent = SND.playing ? (LANG==='id'?'Berbunyi':'Playing')
                                             : (LANG==='id'?'Musik':'Music');

  showJob(currentJob,true);
  observe();
  spyNav();
}

/* ═══ tema ═══ */
function applyTheme(key){
  const t=THEMES[key]||THEMES.base, r=document.documentElement.style;
  for(const [k,v] of Object.entries(t)){
    if(['glyph','pat','doodles'].includes(k)) continue;
    r.setProperty('--'+k,v);
  }
  $('#glyph').textContent=t.glyph;

  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">${
    PATS[t.pat].replace(/C/g,t.accent2)}</svg>`;
  const [show,hide]=patFlip?[$('#patA'),$('#patB')]:[$('#patB'),$('#patA')];
  show.style.backgroundImage=svgUrl(svg);
  show.style.opacity='.16'; hide.style.opacity='0'; patFlip=!patFlip;

  if(typeof SND!=='undefined') SND.setRoot(key);   // nada dasar ikut tempat kerja
  drawDoodles(t.doodles);
}

function drawDoodles(names){
  // posisi tetap: berganti tema mengganti gambarnya, bukan tata letaknya
  const spots=[[3,10,150,-9,.30],[86,16,110,13,.24],[7,50,132,8,.28],[83,58,140,-13,.22],
               [43,87,104,6,.26],[67,3,96,-6,.20],[25,71,116,11,.24],[56,40,86,-8,.17]];
  const col=['var(--accent2)','var(--accent)','var(--accent3)'];
  $('#doodles').innerHTML=names.slice(0,8).map((n,i)=>{
    const [x,y,s,rot,o]=spots[i];
    const body = n==='sakura'
      ? `<g fill="currentColor" transform="translate(50,50)">${[0,72,144,216,288]
          .map(a=>`<ellipse rx="10" ry="23" cy="-18" transform="rotate(${a})"/>`).join('')}
         <circle r="6.5" fill="var(--accent3)"/></g>`
      : `<path d="${D[n]}" fill="none" stroke="currentColor" stroke-width="4.4"
           stroke-linecap="round" stroke-linejoin="round"/>`;
    return `<svg viewBox="0 0 100 100" aria-hidden="true" style="left:${x}vw;top:${y}vh;
      width:clamp(72px,${s/8}vw,${s}px);color:${col[i%3]};--r:${rot}deg;--o:${o};
      animation-delay:${i*70}ms, ${900+i*70}ms">${body}</svg>`;
  }).join('');
}

/* Portofolio foto tempat kerja. Gambar yang hilang menyembunyikan dirinya
   sendiri lewat onerror, jadi halaman tidak pernah menampilkan ikon rusak. */
function gallery(j){
  if(!j.portfolio || !j.portfolio.length) return '';
  return `
    <div class="pf">
      <h4>${esc(u('pfT'))}<span>${esc(T(j,'pf'))}</span></h4>
      <div class="pf-grid">${j.portfolio.map(p=>`
        <a class="pf-i" href="${p.f}" target="_blank" rel="noopener" title="${esc(T(p,'c'))}">
          <img src="${p.f}" alt="${esc(T(p,'c'))}" loading="lazy"
               onerror="this.closest('.pf-i').remove()">
          <span>${esc(T(p,'c'))}</span>
        </a>`).join('')}
      </div>
    </div>`;
}

function showJob(key,quiet){
  currentJob=key;
  applyTheme(key||'base');
  $$('.job').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.job===key)));
  const d=$('#jobDetail');

  if(!key){
    d.innerHTML=`<div class="dbody"><h3>${esc(u('pickT'))}</h3>
      <p class="lead">${esc(u('pickB'))}</p>
      <div class="swatches">${DATA.jobs.map(x=>`
        <span class="sw" style="--c:${THEMES[x.key].accentInk}"><i>${THEMES[x.key].glyph}</i>${
          esc(x.org.split(' — ')[0])}</span>`).join('')}</div></div>`;
    return;
  }

  const j=DATA.jobs.find(x=>x.key===key);
  const scene = PHOTOS[key]
    ? `<img src="${PHOTOS[key]}" alt="${esc(j.org)}">`
    : SCENES[key];
  d.innerHTML=`
    <div class="scene">${scene}<div class="duo"></div>
      <div class="cap"><span>${esc(T(j,'cap'))}</span><em>${esc(j.place)}</em></div></div>
    <div class="dbody">
      <h3>${esc(j.org)}</h3>
      <div class="role">${esc(T(j,'role'))}</div>
      <div class="when"><span>${esc(j.period)}</span><span>·</span><span>${esc(j.yrs)}</span></div>
      <p class="lead">${esc(T(j,'lead'))}</p>
      <div class="mrow">${j.metrics.map(x=>`<div class="m"><b>${esc(x.v)}</b><small>${esc(T(x,'k'))}</small></div>`).join('')}</div>
      <ul>${T(j,'points').map(p=>`<li>${esc(p)}</li>`).join('')}</ul>
      ${gallery(j)}
    </div>`;
  if(!quiet) d.animate([{opacity:.2,transform:'translateY(12px) scale(.995)'},{opacity:1,transform:'none'}],
    {duration:460,easing:'cubic-bezier(.2,.8,.2,1)'});
}

/* ═══ animasi masuk + penanda nav ═══ */
let io,navIo;
function observe(){
  if(io) io.disconnect();
  const show=(el)=>{el.classList.remove('hide');
    $$('b[data-n]',el).forEach(countUp);
    $$('.bar i[data-pct]',el).forEach(b=>b.style.width=b.dataset.pct+'%')};
  io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; show(e.target); io.unobserve(e.target);
  }),{threshold:.14,rootMargin:'0px 0px -6% 0px'});
  // lebar final sudah ada di markup; hanya dikosongkan kalau animasi memang akan jalan
  if(!REDUCED) $$('.bar i[data-pct]').forEach(b=>b.style.width='0');
  $$('.reveal, .stat').forEach(el=>{
    if(el.getBoundingClientRect().top<innerHeight*.94){show(el);return}
    el.classList.add('hide'); io.observe(el);
  });
}

function spyNav(){
  if(navIo) navIo.disconnect();
  const links=new Map($$('.navlinks a').map(a=>[a.getAttribute('href').slice(1),a]));
  navIo=new IntersectionObserver(es=>es.forEach(e=>{
    const a=links.get(e.target.id); if(!a) return;
    if(e.isIntersecting){ $$('.navlinks a').forEach(x=>x.classList.remove('on')); a.classList.add('on'); }
  }),{rootMargin:'-45% 0px -50% 0px'});
  $$('main section').forEach(s=>navIo.observe(s));
}

const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el){
  if(REDUCED || el.dataset.counted) return;  // diam saja; nilai final sudah ada di markup
  el.dataset.counted='1';
  const target=parseFloat(el.dataset.n), suf=el.querySelector('span').outerHTML;
  const dec=target%1!==0?2:0, t0=performance.now(), dur=1200;
  const step=(now)=>{
    // stempel waktu rAF bisa mendahului t0 beberapa milidetik — tanpa jepitan
    // bawah, p jadi negatif dan angkanya tampil minus
    const p=Math.max(0,Math.min(1,(now-t0)/dur)), e=1-Math.pow(1-p,3);
    el.innerHTML=(target*e).toFixed(dec).replace('.',',')+suf;
    if(p<1) requestAnimationFrame(step)};
  requestAnimationFrame(step);
}

document.addEventListener('click',(ev)=>{
  const job=ev.target.closest('.job');
  if(job){ showJob(job.dataset.job); return }
  const lang=ev.target.closest('#lang button');
  if(lang && lang.dataset.lang!==LANG){
    LANG=lang.dataset.lang;
    $$('#lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===LANG)));
    render();
  }
});

/* ═══════════════════════════════════════════════════════════════════
   MUSIK — komposisi orisinal, dibangkitkan Web Audio. Bukan rekaman.
   Nandemonaiya (RADWIMPS) berhak cipta, termasuk versi instrumennya,
   jadi tidak bisa ditanam di sini. Yang dipakai: tangga nada hirajoshi
   (0-2-3-7-8), tangga nada Jepang yang memberi rasa melankolis itu,
   dengan pola dan melodi sendiri. Nol berkas audio, nol unduhan.
   ═══════════════════════════════════════════════════════════════════ */
const SND=(()=>{
  const HIRAJOSHI=[0,2,3,7,8];                 // derajat tangga nada
  const ROOT={base:293.66, mekuru:277.18, rajauduk:329.63, kementan:220.00, jfood:261.63, trusmi:196.00};
  // 16 langkah; -1 = diam. Frasa turun-lalu-menggantung, khas melodi Jepang.
  const MEL=[0,-1,2,-1, 4,-1,3,-1, 2,-1,-1,1, 3,-1,0,-1];
  const OCT=[1, 0,1, 0, 2, 0,1, 0, 1, 0,0,1, 1, 0,1, 0];
  const STEP=0.42, LOOK=0.2, TICK=25;

  let ac,master,delay,wet,timer,step=0,next=0,root=ROOT.base,on=false;

  function build(){
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return false;
    ac=new AC();
    master=ac.createGain(); master.gain.value=0; master.connect(ac.destination);
    // gema murah: delay berumpan-balik + peredam — tanpa berkas impuls
    delay=ac.createDelay(1); delay.delayTime.value=0.34;
    const fb=ac.createGain(); fb.gain.value=0.4;
    const damp=ac.createBiquadFilter(); damp.type='lowpass'; damp.frequency.value=2000;
    wet=ac.createGain(); wet.gain.value=0.34;
    delay.connect(damp); damp.connect(fb); fb.connect(delay); damp.connect(wet); wet.connect(master);
    return true;
  }

  function pluck(f,t,dur,vol,type){
    const o=ac.createOscillator(), g=ac.createGain(), lp=ac.createBiquadFilter();
    o.type=type; o.frequency.value=f;
    lp.type='lowpass'; lp.frequency.setValueAtTime(2600,t);
    lp.frequency.exponentialRampToValueAtTime(700,t+dur);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(vol,t+0.015);
    g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.connect(lp); lp.connect(g); g.connect(master); g.connect(delay);
    o.start(t); o.stop(t+dur+0.05);
  }
  function pad(f,t,dur,vol){
    const o=ac.createOscillator(), g=ac.createGain();
    o.type='sine'; o.frequency.value=f;
    g.gain.setValueAtTime(0.0001,t);
    g.gain.linearRampToValueAtTime(vol,t+1.2);
    g.gain.linearRampToValueAtTime(0.0001,t+dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t+dur+0.05);
  }
  const hz=(deg,oct)=>root*Math.pow(2,(HIRAJOSHI[deg]+12*oct)/12);

  function schedule(){
    // penjadwalan bertenggat: jadwalkan ke depan, jangan bunyikan dari setInterval
    while(next < ac.currentTime + LOOK){
      const d=MEL[step];
      if(d>=0) pluck(hz(d,OCT[step]), next, 1.9, 0.16, step%4===0?'triangle':'sine');
      if(step===0){ pad(root/2, next, STEP*8, 0.05); pad(root*Math.pow(2,7/12)/2, next, STEP*8, 0.035); }
      if(step===8) pad(root*Math.pow(2,3/12)/2, next, STEP*8, 0.04);
      next+=STEP; step=(step+1)%16;
    }
  }

  return {
    toggle(){
      if(!ac && !build()) return false;
      on=!on;
      if(on){
        ac.resume();
        next=ac.currentTime+0.1; step=0;
        master.gain.cancelScheduledValues(ac.currentTime);
        master.gain.setValueAtTime(master.gain.value,ac.currentTime);
        master.gain.linearRampToValueAtTime(0.5,ac.currentTime+1.5);
        timer=setInterval(schedule,TICK); schedule();
      }else{
        master.gain.cancelScheduledValues(ac.currentTime);
        master.gain.setValueAtTime(master.gain.value,ac.currentTime);
        master.gain.linearRampToValueAtTime(0,ac.currentTime+0.8);
        clearInterval(timer); timer=null;
      }
      return on;
    },
    // tiap tempat kerja punya nada dasarnya sendiri — suasananya ikut berpindah
    setRoot(key){
      const r=ROOT[key]||ROOT.base;
      if(r===root) return; root=r;
    },
    get playing(){ return on }
  };
})();

$('#snd').addEventListener('click',()=>{
  const b=$('#snd'), playing=SND.toggle();
  b.setAttribute('aria-pressed',String(playing));
  $('#sndLabel').textContent = playing ? (LANG==='id'?'Berbunyi':'Playing') : (LANG==='id'?'Musik':'Music');
  b.setAttribute('aria-label', playing
    ? (LANG==='id'?'Hentikan musik latar':'Stop background music')
    : (LANG==='id'?'Putar musik latar':'Play background music'));
});

render();

/* ── satu pemeriksaan: tema, pola, doodle, ikon, dan pasangan ID/EN harus lengkap ── */
(function selfCheck(){
  const bad=[];
  DATA.jobs.forEach(j=>{
    if(!THEMES[j.key]) bad.push('tema hilang: '+j.key);
    if(!PATS[THEMES[j.key]?.pat]) bad.push('pola hilang: '+j.key);
    if(!PHOTOS[j.key] && !SCENES[j.key]) bad.push('pemandangan hilang: '+j.key);
    (THEMES[j.key]?.doodles||[]).forEach(n=>{ if(n!=='sakura'&&!D[n]) bad.push('doodle hilang: '+n) });
    ['role','kind','lead','cap','points'].forEach(k=>{
      if(!j[k+'Id']||!j[k+'En']) bad.push(`${j.key}.${k} tidak lengkap ID/EN`) });
    if(j.pointsId.length!==j.pointsEn.length) bad.push(j.key+': jumlah poin ID≠EN');
  });
  THEMES.base.doodles.forEach(n=>{ if(n!=='sakura'&&!D[n]) bad.push('doodle base hilang: '+n) });
  DATA.awards.forEach(a=>{ if(!IC[a.ic]) bad.push('ikon hilang: '+a.ic) });
  Object.keys(UI).forEach(k=>{ if(!UI[k].id||!UI[k].en) bad.push('UI.'+k+' bolong') });
  ['work','ventures','awards','edu','certs','skills','road','personal','contact'].forEach(k=>{
    if(!UI[k].kj) bad.push('kanji seksi hilang: '+k);
    if(!UI['eb'+k[0].toUpperCase()+k.slice(1)]) bad.push('eyebrow hilang: '+k) });
  console[bad.length?'error':'log'](bad.length?'✗ '+bad.join(' | ')
    :'✓ tema, pola, doodle, pemandangan, ikon & teks ID/EN lengkap');
})();
