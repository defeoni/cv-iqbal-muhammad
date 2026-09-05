/* TEMA per tempat kerja: warna, pola latar, dan daftar doodle. */
/* ═══ tema ═══ */
const THEMES = {
  base:    {bg:"#F4EDE1",bg2:"#E9DECB",surface:"#FFFBF3",ink:"#1A1512",ink2:"#6B6053",line:"#DDCFB5",
            accent:"#C62A22",accent2:"#1A1512",accent3:"#C9A227",glyph:"朱",pat:"seigaiha",
            doodles:["torii","sakura","fan","koi","moon","lantern","wave","dino"]},
  mekuru:  {bg:"#F9EEDC",bg2:"#EFDDBF",surface:"#FFFAF0",ink:"#2B1A11",ink2:"#7A5B44",line:"#E2CBA6",
            accent:"#C3402A",accent2:"#2B1A11",accent3:"#D89A3C",glyph:"麺",pat:"noren",
            doodles:["bowl","chopsticks","naruto","steam","lantern","noren","sakura","torii"]},
  rajauduk:{bg:"#F1F5E7",bg2:"#E1ECD2",surface:"#FBFDF5",ink:"#1D2A16",ink2:"#5C6B4A",line:"#CCDCB7",
            accent:"#B8402C",accent2:"#2F5A2C",accent3:"#C98A34",glyph:"米",pat:"anyaman",
            doodles:["cone","leaf","chili","steam","basket","rice","fan","star"]},
  kementan:{bg:"#EEF3EB",bg2:"#DDE9DB",surface:"#FAFDF9",ink:"#14231A",ink2:"#566356",line:"#C6D6C3",
            accent:"#1F6242",accent2:"#1B3A26",accent3:"#B08F22",glyph:"農",pat:"graph",
            doodles:["padi","grid","chart","leaf","stamp","clip","moon","star"]},
  jfood:   {bg:"#FDF2DC",bg2:"#F9E3B9",surface:"#FFFAEF",ink:"#22190D",ink2:"#7B5326",line:"#EFD59F",
            accent:"#D2571F",accent2:"#22345C",accent3:"#E0A22A",glyph:"鶏",pat:"checker",
            doodles:["drumstick","fries","flame","clip","chart","star","grid","bowl"]},
  trusmi:  {bg:"#EDF2FA",bg2:"#DAE5F4",surface:"#FAFCFF",ink:"#10203A",ink2:"#4C5F7C",line:"#C0D2E9",
            accent:"#B3312A",accent2:"#1B4B8F",accent3:"#3E7CC4",glyph:"雲",pat:"megamendung",
            doodles:["cloud","house","key","megaphone","chart","funnel","grid","star"]}
};

const PATS = {
  seigaiha:`<g fill="none" stroke="C" stroke-width="1.2" opacity=".6">${
    [[-40,0],[0,0],[40,0],[-20,40],[20,40],[60,40]].map(([x,y])=>
    `<path d="M0 40a40 40 0 0 1 80 0M0 40a30 30 0 0 1 60 0M0 40a20 20 0 0 1 40 0M0 40a10 10 0 0 1 20 0" transform="translate(${x},${y})"/>`).join('')}</g>`,
  noren:`<g stroke="C" stroke-width="1.5" opacity=".5"><path d="M10 0v80M30 0v80M50 0v80M70 0v80"/></g>
         <g fill="C" opacity=".2"><circle cx="20" cy="22" r="2.6"/><circle cx="60" cy="54" r="2.6"/></g>`,
  anyaman:`<g stroke="C" stroke-width="2.2" opacity=".42" fill="none">
    <path d="M0 0l40 40M40 0L0 40M40 40l40 40M80 40L40 80M40 0l40 40M80 0L40 40M0 40l40 80M40 40L0 80"/></g>`,
  graph:`<g stroke="C" stroke-width=".8" opacity=".4"><path d="M0 0h80M0 20h80M0 40h80M0 60h80M0 0v80M20 0v80M40 0v80M60 0v80"/></g>
         <g stroke="C" stroke-width="1.8" opacity=".5"><path d="M0 0h80M0 0v80"/></g>`,
  checker:`<g fill="C" opacity=".26">${[[0,0],[40,0],[20,20],[60,20],[0,40],[40,40],[20,60],[60,60]]
    .map(([x,y])=>`<rect x="${x}" y="${y}" width="20" height="20"/>`).join('')}</g>`,
  megamendung:`<g fill="none" stroke="C" stroke-width="1.6" opacity=".52">
    <path d="M-8 54q0-15 15-14 2-16 18-15 9-14 22-6 16-3 18 14 14 2 12 15"/>
    <path d="M6 54q2-10 12-9 2-11 13-10"/><path d="M34 48q5-9 14-7"/>
    <path d="M32 94q0-15 15-14 2-16 18-15 9-14 22-6"/></g>`
};

/* doodle: coretan tangan */
const D = {
  torii:`M12 30q38-9 76 0M18 42h64M30 42v46M70 42v46M23 88h14M63 88h14M12 30l3 9M88 30l-3 9`,
  sakura:null,
  fan:`M50 84a40 40 0 0 1-34-20l34-18 34 18a40 40 0 0 1-34 20zM50 46V20M50 46L28 60M50 46l22 14M50 20a6 6 0 0 1 0 12`,
  koi:`M20 50q18-22 40-14 16 6 20 14-4 8-20 14-22 8-40-14zM80 50l14-12v24zM36 44a2 2 0 0 1 .1 0M46 62q10 6 20 0`,
  moon:`M64 16a34 34 0 1 0 18 46A28 28 0 0 1 64 16zM76 24l3 6 6 3-6 3-3 6-3-6-6-3 6-3z`,
  lantern:`M50 12v10M30 30q20-10 40 0v34q-20 10-40 0zM30 42h40M30 54h40M50 78v10M42 88h16`,
  noren:`M14 22h72v14H14zM20 36v42M36 36v42M52 36v42M68 36v42M82 36v42M14 22l4-8h64l4 8`,
  wave:`M8 58q12-18 24 0t24 0 24 0M8 76q12-18 24 0t24 0 24 0M20 40q10-14 20 0t20 0`,
  dino:`M18 74q0-20 20-22 8-16 26-11 15 5 12 18-2 9-11 8M18 74q10 13 26 13 20 0 28-13M28 87v9M44 89v9M60 87v9M72 70q16-2 14 14`,
  bowl:`M12 44h76a38 34 0 0 1-76 0zM6 44h88M34 30q4-11 12-6M52 27q4-11 12-6`,
  chopsticks:`M30 18L60 76M42 14L72 68M30 18l-5 5M42 14l-5 5`,
  naruto:`M50 18a32 32 0 1 0 .1 0zM50 34a16 16 0 1 1-15 16 10 10 0 1 1 10-10 6 6 0 1 1-5 6`,
  steam:`M34 80q12-16 0-30t0-32M54 84q12-16 0-30t0-32M74 76q10-13 0-24`,
  cone:`M50 12L84 78H16zM30 58h40M23 70h54M50 12l-4-8`,
  leaf:`M50 10q38 30 0 80-38-50 0-80zM50 16v76M50 40l18-12M50 58l20-14M50 40L32 28M50 58L30 44`,
  chili:`M64 20q6-12-5-14M62 24q17 14 3 37-14 23-33 22 15-17 13-35-2-20 17-24z`,
  basket:`M14 40h72l-8 42H22zM14 40q36-22 72 0M30 50l4 26M50 50v26M70 50l-4 26`,
  rice:`M50 84V26M50 38q-18-6-22-22 20 2 22 18M50 54q-18-6-22-22 20 2 22 18M50 38q18-6 22-22-20 2-22 18M50 54q18-6 22-22-20 2-22 18`,
  padi:`M50 86V28M50 40q-17-6-21-21 19 2 21 17M50 54q-17-6-21-21 19 2 21 17M50 40q17-6 21-21-19 2-21 17M50 54q17-6 21-21-19 2-21 17`,
  grid:`M14 20h72v58H14zM14 40h72M14 59h72M38 20v58M62 20v58`,
  chart:`M12 84h76M28 84V52M46 84V30M64 84V44M80 84V20`,
  clip:`M28 16h44v68H28zM40 10h20v12H40zM38 40h24M38 54h24M38 68h16`,
  stamp:`M22 22h56v56H22zM34 34h32v32H34zM40 44h20M40 56h20`,
  drumstick:`M64 20a21 21 0 1 1-24 34L24 70a10 10 0 1 0 8 8l16-16a21 21 0 1 1 16-42zM26 72l-9 9`,
  fries:`M32 46h36l-5 38H37zM39 46V24M50 46V18M61 46V26M32 56h36`,
  flame:`M50 12q20 23 8 36-7 8-13 0-8 16 5 25-25-5-22-27 3-22 22-34z`,
  house:`M14 50L50 18l36 32M24 45v38h52V45M42 83V60h16v23`,
  cloud:`M10 66q0-15 14-14 3-17 18-16 9-14 24-7 17-3 19 15 14 2 12 15M24 66q3-10 12-9M50 62q5-9 15-6`,
  key:`M34 52a15 15 0 1 1 15 15 15 15 0 0 1-15-15zM49 60l35-30M74 38l8 8M64 44l8 8`,
  megaphone:`M22 44v16h13l27 17V27L35 44zM35 60v15h11v-9M70 36q11 14 0 28`,
  funnel:`M14 20h72L58 54v28l-16 10V54zM24 32h52`,
  star:`M50 12l12 27 29 2-22 20 7 28-26-15-26 15 7-28-22-20 29-2z`
};
