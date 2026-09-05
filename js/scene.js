/* Pembantu, teks antarmuka (UI), ikon prestasi, dan pemandangan tiap tempat kerja. */
/* ═══ util ═══ */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
let LANG='id';
const T=(o,b)=>o[b+(LANG==='id'?'Id':'En')];
const L=(o)=>LANG==='id'?o.i:o.e;
const esc=(s)=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const svgUrl=(s)=>`url("data:image/svg+xml,${encodeURIComponent(s)}")`;

const UI={
  work:{id:"Pengalaman Kerja",en:"Work Experience",kj:"職歴"},
  ventures:{id:"Project",en:"Projects",kj:"企画"},
  awards:{id:"Prestasi",en:"Achievements",kj:"表彰"},
  edu:{id:"Pendidikan",en:"Education",kj:"学歴"},
  certs:{id:"Sertifikasi",en:"Certifications",kj:"資格"},
  skills:{id:"Keahlian",en:"Skills",kj:"技能"},
  road:{id:"Arah",en:"Direction",kj:"進路"},
  personal:{id:"Sisi Lain",en:"Off the CV",kj:"素顔"},
  contact:{id:"Kontak",en:"Contact",kj:"連絡"},

  ebWork:{id:"klik, seluruh halaman ikut berpindah suasana ↴",en:"click — the whole page changes atmosphere ↴"},
  ebVentures:{id:"dibangun sendiri di sela-sela",en:"built on the side"},
  ebAwards:{id:"yang tidak bisa dibeli",en:"what money cannot buy"},
  ebEdu:{id:"sekolah dan kuliah",en:"school and university"},
  ebCerts:{id:"bukti, bukan klaim",en:"proof, not claims"},
  ebSkills:{id:"dibaca dari pengalaman",en:"read from experience"},
  ebRoad:{id:"2027 → 2036",en:"2027 → 2036"},
  ebPersonal:{id:"di luar berkas",en:"off the file"},
  ebContact:{id:"ayo ngobrol",en:"let us talk"},

  workSub:{id:"Lima tempat, lima suasana. Klik salah satu — warna, pola latar, coretan, dan aksara di halaman ini berpindah mengikutinya.",
           en:"Five places, five atmospheres. Click one — this page's colours, background pattern, doodles and glyph move with it."},
  venturesSub:{id:"Project yang dibangun dari ide menjadi sesuatu yang bisa berjalan.",
               en:"Projects built from ideas into something that can run."},
  awardsSub:{id:"Tiga pengakuan yang tidak bisa dibeli, dan satu acara yang ia isi sekaligus ia selenggarakan.",
             en:"Three recognitions that cannot be bought, and one event he both ran and taught."},
  eduSub:{id:"Terpisah dari pengalaman kerja dan dari sertifikasi, seperti seharusnya.",
          en:"Kept separate from work experience and from certifications, as it should be."},
  certsSub:{id:"Dua sertifikat ini yang paling menentukan. Semuanya dilampirkan apa adanya — silakan diperbesar.",
            en:"These two carry the most weight. Every certificate is attached as-is — zoom in if you like."},
  miniCertsT:{id:"Tiga sertifikasi lain di angkatan yang sama",en:"Three more certifications from the same cohort"},
  skillsSub:{id:"Tanda ◆ menandai kemampuan yang paling jarang ada pada satu orang yang sama.",
             en:"◆ marks the abilities rarest to find in one and the same person."},
  roadSub:{id:"Tiga tonggak yang ia tetapkan sendiri — dan apa yang sudah berjalan sekarang.",
           en:"Three milestones he set for himself — and what is already running."},
  personalSub:{id:"Yang tidak muat di CV, tapi menjelaskan orangnya.",en:"What does not fit on a CV, but explains the person."},
  contactSub:{id:"Terbuka untuk peran Manager atau Supervisor — F&B, ritel, operasional, marketing, atau data.",
              en:"Open to Manager or Supervisor roles — F&B, retail, operations, marketing or data."},
  running:{id:"Sedang berjalan sekarang",en:"Already running now"},
  pfT:{id:"Portofolio",en:"Portfolio"},
  moreCerts:{id:"Lima belas sertifikasi lain",en:"Fifteen further certifications"},
  langs:{id:"Bahasa",en:"Languages"},
  cvBtn:{id:"Portofolio & sertifikat",en:"Portfolio & certificates"},
  mailBtn:{id:"Kirim email",en:"Send an email"},
  pickT:{id:"Pilih satu tempat kerja",en:"Pick a workplace"},
  pickB:{id:"Klik satu nama di daftar. Warna, pola latar, coretan, dan aksara di halaman ini akan berpindah mengikuti suasana tempat itu.",
         en:"Click a name in the list. This page's colours, background pattern, doodles and glyph will move to match that place."},
  noSensitive:{id:"Halaman ini tidak memuat data pribadi sensitif.",en:"This page carries no sensitive personal data."}
};
const u=(k)=>UI[k][LANG];

/* ikon prestasi — SVG, supaya benar-benar center di dalam lingkaran */
const IC={
  star:`<path d="M12 2.6l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.4 5.9 21l1.5-6.8L2.2 9.6l6.9-.7z"/>`,
  bloom:`<g><circle cx="12" cy="12" r="2.6"/>${[0,60,120,180,240,300].map(a=>
    `<ellipse cx="12" cy="5.6" rx="2.2" ry="4" transform="rotate(${a} 12 12)"/>`).join('')}</g>`,
  globe:`<g fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9.2"/>
    <ellipse cx="12" cy="12" rx="4" ry="9.2"/><path d="M2.8 12h18.4M4.4 6.6h15.2M4.4 17.4h15.2"/></g>`,
  mic:`<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <rect x="9" y="2.6" width="6" height="11" rx="3"/><path d="M5.4 11.4a6.6 6.6 0 0 0 13.2 0M12 18v3.4M8.4 21.4h7.2"/></g>`
};
const icon=(n)=>`<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${IC[n]}</svg>`;

/* pemandangan tempat kerja — foto asli kalau ada, kalau tidak digambar sendiri */
// Sampul tiap tempat kerja. Foto menang atas ilustrasi SVG di bawah.
const PHOTOS={mekuru:"img/kerja-mekuru.jpg", kementan:"img/kerja-kementan.jpg",
              jfood:"img/kerja-jfood.jpg", trusmi:"img/kerja-trusmi.jpg"};
const SCENES={
  mekuru:`<svg viewBox="0 0 400 165" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="165" fill="var(--accent2)"/>
    <circle cx="330" cy="34" r="16" fill="var(--accent3)" opacity=".55"/>
    <rect x="30" y="46" width="250" height="119" fill="var(--bg2)" opacity=".22"/>
    <rect x="46" y="86" width="90" height="52" fill="var(--accent3)" opacity=".5"/>
    <rect x="160" y="86" width="90" height="52" fill="var(--accent3)" opacity=".32"/>
    <rect x="30" y="46" width="250" height="34" fill="var(--accent)"/>
    <g stroke="var(--bg2)" stroke-width="2" opacity=".65"><path d="M78 46v34M126 46v34M174 46v34M222 46v34"/></g>
    <g fill="var(--bg2)" opacity=".9"><circle cx="56" cy="63" r="4"/><circle cx="100" cy="63" r="4"/><circle cx="148" cy="63" r="4"/></g>
    <g fill="var(--accent)"><ellipse cx="308" cy="72" rx="16" ry="21"/><ellipse cx="360" cy="60" rx="13" ry="17"/></g>
    <g stroke="var(--bg2)" stroke-width="1.4" opacity=".5" fill="none">
      <path d="M292 66h32M292 76h32M348 55h24M348 64h24"/></g>
    <g fill="none" stroke="var(--bg2)" stroke-width="2.6" stroke-linecap="round" opacity=".45">
      <path d="M196 40q10-13 0-24t0-14M216 36q10-13 0-24"/></g>
    <rect y="150" width="400" height="15" fill="var(--accent2)"/>
  </svg>`,
  rajauduk:`<svg viewBox="0 0 400 165" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="165" fill="var(--accent2)"/>
    <circle cx="62" cy="36" r="20" fill="var(--accent3)" opacity=".5"/>
    <path d="M0 118h400v47H0z" fill="var(--accent2)"/>
    <rect x="40" y="60" width="200" height="58" fill="var(--bg2)" opacity=".2"/>
    <g stroke="var(--bg2)" stroke-width="2" opacity=".4">
      <path d="M40 60l200 58M240 60L40 118M40 89h200M100 60v58M170 60v58"/></g>
    <path d="M28 60h224l-14-16H42z" fill="var(--accent)"/>
    <g fill="var(--accent3)" opacity=".9"><path d="M300 118L336 46l36 72z"/></g>
    <g stroke="var(--accent2)" stroke-width="2" opacity=".45"><path d="M312 100h48M320 86h32"/></g>
    <path d="M262 118q30-46 0-84-30 38 0 84z" fill="var(--bg2)" opacity=".35"/>
    <path d="M262 40v78" stroke="var(--accent2)" stroke-width="1.6" opacity=".5"/>
    <g fill="none" stroke="var(--bg2)" stroke-width="2.6" stroke-linecap="round" opacity=".5">
      <path d="M336 38q9-12 0-22M354 42q9-12 0-22"/></g>
  </svg>`,
  kementan:`<svg viewBox="0 0 400 165" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="165" fill="var(--accent2)"/>
    <circle cx="336" cy="34" r="18" fill="var(--accent3)" opacity=".45"/>
    <g stroke="var(--bg2)" stroke-width="1" opacity=".18">
      ${Array.from({length:13},(_,i)=>`<path d="M${i*32} 0v165"/>`).join('')}
      ${Array.from({length:6},(_,i)=>`<path d="M0 ${i*30}h400"/>`).join('')}</g>
    <rect x="30" y="52" width="120" height="52" fill="var(--bg2)" opacity=".25"/>
    <path d="M24 52l66-24 66 24z" fill="var(--accent)"/>
    <g fill="var(--accent3)" opacity=".55"><rect x="46" y="70" width="14" height="34"/>
      <rect x="76" y="70" width="14" height="34"/><rect x="106" y="70" width="14" height="34"/></g>
    <path d="M90 28V10M90 10h22v12H90" fill="var(--accent)" stroke="var(--accent)" stroke-width="2"/>
    <g stroke="var(--accent3)" stroke-width="2.4" stroke-linecap="round" opacity=".85">
      ${Array.from({length:9},(_,i)=>{const x=190+i*24;return`<path d="M${x} 148v-30M${x} 126q-9-3-11-11 10 1 11 9M${x} 126q9-3 11-11-10 1-11 9"/>`}).join('')}</g>
    <g fill="none" stroke="var(--bg2)" stroke-width="2.4" opacity=".55">
      <path d="M196 96l22-18 20 10 26-28"/><circle cx="264" cy="60" r="3.4" fill="var(--bg2)"/></g>
    <rect y="150" width="400" height="15" fill="var(--accent2)"/>
  </svg>`
};
