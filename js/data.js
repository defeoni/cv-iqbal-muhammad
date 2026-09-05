/* KONTEN CV — ubah teksnya di sini. Semua pasangan xxId / xxEn = Indonesia / Inggris. */
/* ═══════════════════════════════════════════════════════════════════
   Sumber: berkas diri pribadi.  TIDAK dimuat di halaman publik:
   NIK, rekening, alamat RT/RW, kontak darurat, nomor referensi kerja,
   gaji terakhir & ekspektasi, data keluarga, tanda tangan.
   ═══════════════════════════════════════════════════════════════════ */
const DATA = {
  meta:{
    tagId:"Ditempatkan di tempat yang berantakan — lalu angkanya bergerak.",
    tagEn:"Dropped into the mess — then the numbers move.",
    ledeId:"Tujuh tahun, empat industri, satu pola berulang: operasional yang tahan berdiri di lapangan, disambung data yang tahan diaudit.",
    ledeEn:"Seven years, four industries, one repeating pattern: operations that survive the floor, joined to data that survives an audit.",
    locId:"Losari, Kabupaten Cirebon · bersedia ditempatkan lintas kota",
    locEn:"Losari, Cirebon Regency · open to relocation",
    openId:"Terbuka untuk peran Manager / Supervisor",
    openEn:"Open to Manager / Supervisor roles"
  },
  stats:[
    {n:7,   suf:"",    labId:"tahun pengalaman", labEn:"years of experience"},
    {n:4,   suf:"",    labId:"industri dilalui", labEn:"industries crossed"},
    {n:30,  suf:"+",   labId:"orang, tim terbesar", labEn:"people, largest team"},
    {n:450, suf:" jt", labId:"omzet/bulan dikelola", labEn:"monthly revenue managed"},
    {n:2.25,suf:" M",  labId:"rupiah pendanaan dimenangkan", labEn:"rupiah funding won"},
    {n:4,   suf:"",    labId:"bahasa dipakai", labEn:"languages spoken"}
  ],

  jobs:[
    { key:"mekuru", org:"Mekuru Ramen House", place:"Pontianak, Kalimantan Barat",
      period:"Jan 2019 — Jun 2021", yrs:"2 thn 6 bln",
      roleId:"Kepala Cabang & Manager Operasional", roleEn:"Branch Head & Operations Manager",
      kindId:"Kuliner Jepang", kindEn:"Japanese dining",
      capId:"Ramen-ya, lampu chochin, 30+ orang di belakang noren",
      capEn:"A ramen-ya, chochin lanterns, 30+ people behind the noren",
      leadId:"Umur 19 sudah memegang 30+ orang dan mengoordinasi banyak cabang.",
      leadEn:"At nineteen, already running 30+ people across multiple branches.",
      metrics:[{v:"+20%",kId:"target triwulan",kEn:"quarterly target"},
               {v:"+25%",kId:"efisiensi operasional",kEn:"ops efficiency"},
               {v:"30+", kId:"orang dipimpin",kEn:"people led"}],
      pointsId:["Memimpin 30+ karyawan lintas cabang; merangkap Quality Control Analyst.",
                "Target penjualan triwulan terlampaui rata-rata 20%.",
                "Efisiensi operasional naik 25%, kepuasan pelanggan dijaga di atas 90%.",
                "Kontribusi ke pertumbuhan pendapatan tahunan hingga 15%."],
      pointsEn:["Led 30+ staff across branches; doubled as Quality Control Analyst.",
                "Beat quarterly sales targets by an average of 20%.",
                "Lifted operational efficiency 25%, held customer satisfaction above 90%.",
                "Contributed up to 15% of annual revenue growth."],
      pfId:"Foto produk & operasional — dibuat sendiri semasa memimpin cabang",
      pfEn:"Product and floor photography — shot himself while running the branch",
      portfolio:[
        {f:"img/pf-mekuru-1.jpg", cId:"Ramen tonkotsu — telur, naruto, daun bawang", cEn:"Tonkotsu ramen — egg, naruto, spring onion"},
        {f:"img/pf-mekuru-2.jpg", cId:"Ramen tonkotsu udang", cEn:"Prawn tonkotsu ramen"},
        {f:"img/pf-mekuru-3.jpg", cId:"Ramen jagung pedas, ayam suwir", cEn:"Spicy corn ramen, shredded chicken"},
        {f:"img/pf-mekuru-4.jpg", cId:"Mie bakso — angkat sumpit", cEn:"Meatball noodles — chopstick lift"},
        {f:"img/pf-mekuru-5.jpg", cId:"Mie bakso, mangkuk motif", cEn:"Meatball noodles, patterned bowl"},
        {f:"img/pf-mekuru-6.jpg", cId:"Nasi iga bakar sambal", cEn:"Grilled short rib rice with sambal"},
        {f:"img/pf-mekuru-7.jpg", cId:"Nasi ayam goreng, tempe, serundeng", cEn:"Fried chicken rice, tempeh, serundeng"},
        {f:"img/pf-mekuru-8.jpg", cId:"Nasi ayam goreng — besek daun pisang", cEn:"Fried chicken rice — banana-leaf basket"},
        {f:"img/pf-mekuru-9.jpg", cId:"Side dish, cup berlogo 火", cEn:"Side dish, cup bearing the 火 mark"}
      ] },

    { key:"rajauduk", org:"Raja Uduk", place:"Pontianak, Kalimantan Barat",
      period:"Sep 2021 — Des 2021", yrs:"4 bln",
      roleId:"Supervisor Produksi & Manajemen Operasional", roleEn:"Production Supervisor & Operations Management",
      kindId:"Produksi makanan", kindEn:"Food production",
      capId:"Dapur produksi subuh, daun pisang, dan satu spreadsheet",
      capEn:"A pre-dawn production kitchen, banana leaf, and one spreadsheet",
      leadId:"Dapur produksi yang bocor, ditutup pakai spreadsheet.",
      leadEn:"A leaking production kitchen, sealed with a spreadsheet.",
      metrics:[{v:"−25%",kId:"pemborosan bahan baku",kEn:"raw-material waste"},
               {v:"+30%",kId:"output produksi",kEn:"production output"},
               {v:"−40%",kId:"kelebihan order",kEn:"over-ordering"}],
      pointsId:["Memimpin 20+ karyawan di lini produksi harian.",
                "Pemborosan bahan baku turun 25%; output produksi naik 30%.",
                "Kelebihan order turun 40% lewat sistem pemantauan stok harian berbasis Excel PivotTable."],
      pointsEn:["Led 20+ staff on the daily production line.",
                "Cut raw-material waste 25%; raised output 30%.",
                "Cut over-ordering 40% with a daily stock-monitoring system built on Excel PivotTables."] },

    { key:"kementan", org:"Kementerian Pertanian RI — BSIP Kalbar", place:"Kalimantan Barat",
      period:"Mar 2022 — Jul 2025", yrs:"3 thn 4 bln",
      roleId:"Analis Data & Operasional", roleEn:"Data & Operations Analyst",
      kindId:"Instansi pemerintah", kindEn:"Government agency",
      capId:"Kantor BRMP / BSIP Kalimantan Barat — Siantan Hulu, Pontianak",
      capEn:"The BRMP / BSIP West Kalimantan office — Siantan Hulu, Pontianak",
      leadId:"Masa kerja terpanjangnya. Di sinilah Excel jadi bahasa kedua.",
      leadEn:"His longest tenure. This is where Excel became a second language.",
      metrics:[{v:"30→15",kId:"hari siklus pelaporan",kEn:"day reporting cycle"},
               {v:"−20%", kId:"pemborosan sumber daya",kEn:"resource waste"},
               {v:"3 thn 4 bln",kId:"masa kerja terpanjang",kEn:"longest tenure"}],
      pointsId:["Analisis rantai nilai komoditas pertanian: pengumpulan, pembersihan, dan pelaporan data untuk keputusan operasional dan kebijakan.",
                "Siklus pelaporan dipangkas dari 30 hari menjadi 15 hari.",
                "Pemborosan sumber daya turun 20%.",
                "Pelaporan lintas wilayah dengan disiplin dokumentasi birokrasi."],
      pointsEn:["Agricultural commodity value-chain analysis: collecting, cleaning and reporting data for operational and policy decisions.",
                "Cut the reporting cycle from 30 days to 15.",
                "Reduced resource waste by 20%.",
                "Multi-region reporting under full bureaucratic documentation discipline."],
      pfId:"Lapangan, kantor, dan diseminasi — 2023 sampai 2024",
      pfEn:"Field, office and dissemination work — 2023 to 2024",
      portfolio:[
        {f:"img/pf-kementan-1.jpg", cId:"Bimbingan Teknis diseminasi standar instrumen pertanian — Kec. Toho, Kab. Mempawah, 31 Agustus 2023",
                                cEn:"Technical guidance on disseminating agricultural instrument standards — Toho, Mempawah, 31 August 2023"},
        {f:"img/pf-kementan-2.jpg", cId:"Pemetaan polygon CPCL ICARE bersama KOSTRATANI BPP Tebas — 17 Januari 2024",
                                cEn:"CPCL ICARE polygon mapping with KOSTRATANI BPP Tebas — 17 January 2024"},
        {f:"img/pf-kementan-3.jpg", cId:"Tim Balai Pengkajian Teknologi Pertanian Kalimantan Barat",
                                cEn:"The West Kalimantan Agricultural Technology Assessment Centre team"},
        {f:"img/pf-kementan-4.jpg", cId:"Kantor BSIP Kalimantan Barat", cEn:"The BSIP West Kalimantan office"},
        {f:"img/pf-kementan-5.jpg", cId:"Apel pegawai di gedung BPTP Kalimantan Barat", cEn:"Staff assembly at the BPTP West Kalimantan building"},
        {f:"img/pf-kementan-6.jpg", cId:"HUT ke-1 BSIP — Agrostandar Hebat, Pertanian Maju", cEn:"BSIP's 1st anniversary — Agrostandar Hebat, Pertanian Maju"},
        {f:"img/pf-kementan-7.jpg", cId:"HUT ke-2 BSIP — Agrostandar untuk Indonesia Maju", cEn:"BSIP's 2nd anniversary — Agrostandar untuk Indonesia Maju"}
      ] },

    { key:"jfood", org:"PT JFood Group Indonesia", place:"Ciledug, Kabupaten Cirebon",
      period:"Ags 2025 — Mar 2026", yrs:"8 bln",
      roleId:"Asisten Manajer Toko", roleEn:"Assistant Store Manager",
      kindId:"QSR ayam goreng", kindEn:"Fried-chicken QSR",
      capId:"J.Chicken Joy Restaurant — toko yang ia jaga tiap hari",
      capEn:"J.Chicken Joy Restaurant — the store he ran every day",
      leadId:"Rp450 juta sebulan, 22 orang, SOP tidak boleh turun.",
      leadEn:"Rp450 million a month, 22 people, an SOP that must not slip.",
      metrics:[{v:"Rp450 jt",kId:"target penjualan/bulan",kEn:"monthly sales target"},
               {v:"22", kId:"orang dipimpin",kEn:"people led"},
               {v:">90%", kId:"kepatuhan SOP",kEn:"SOP compliance"}],
      pointsId:["Memimpin 22 orang dalam operasional toko harian.",
                "Mengawal target penjualan Rp450 juta per bulan.",
                "Kepatuhan SOP dan standar layanan dijaga di atas 90%.",
                "Penjadwalan shift, pengendalian stok, dan penanganan keluhan pelanggan."],
      pointsEn:["Led 22 people through daily store operations.",
                "Guarded a Rp450 million monthly sales target.",
                "Kept SOP compliance and service standards above 90%.",
                "Shift scheduling, stock control and customer-complaint handling."] },

    { key:"trusmi", org:"PT Trusmi Group — PT RSP", place:"Plered, Kabupaten Cirebon",
      period:"Mar 2026 — Jul 2026", yrs:"5 bln",
      roleId:"SPV Marketing Communication Strategic & Asisten Regional Manager",
      roleEn:"Marketing Communication Strategic SPV & Assistant Regional Manager",
      kindId:"Properti — KPR Subsidi", kindEn:"Property — subsidised housing",
      capId:"Rumah Ningrat, Plered — produk yang ia pasarkan",
      capEn:"Rumah Ningrat, Plered — the product he marketed",
      leadId:"Lima jabatan sekaligus, satu orang. Produk: Rumah Ningrat.",
      leadEn:"Five job titles at once, one person. Product: Rumah Ningrat.",
      metrics:[{v:"5", kId:"peran dirangkap",kEn:"roles held at once"},
               {v:"14",kId:"orang tim langsung",kEn:"direct team"},
               {v:"16",kId:"tenaga sales dipantau",kEn:"salespeople tracked"}],
      pointsId:["Lima peran sekaligus: Marketing Communication, SPV Sales, PDCA, Asisten Regional Manager, dan Purchasing.",
                "Memimpin tim 14 orang dan memantau 16 tenaga sales.",
                "Menjalankan Meta Ads dan funnel Click-to-WhatsApp untuk produk KPR subsidi.",
                "Kanvasing wilayah, sales coaching, pelatihan tim, dan pengelolaan anggaran promosi."],
      pfId:"Kampanye “Dari Akad Rumah, Sampai Anak Pertama” — disusun sendiri, Februari 2026",
      pfEn:"The “From the deed to the first child” campaign — authored himself, February 2026",
      // Lima slide dari deck kampanye karyanya sendiri (nama tercetak di sampul).
      // SENGAJA DILEWATI: halaman target unit bulanan, tabel banding kompetitor,
      // dan tiga halaman model keuangan — itu angka internal Trusmi Group, bukan
      // milik portofolio pribadi. Poster lowongan juga dilewati: memuat nomor HP.
      portfolio:[
        {f:"img/pf-trusmi-1.jpg", cId:"Sampul kampanye Rumah Ningrat", cEn:"Rumah Ningrat campaign cover"},
        {f:"img/pf-trusmi-2.jpg", cId:"Konsep: mendampingi pelanggan dari pembelian rumah hingga menyambut anak pertama", cEn:"Concept: accompanying the customer from buying the house to welcoming the first child"},
        {f:"img/pf-trusmi-3.jpg", cId:"Analisis pasar Cirebon — data BPS Jawa Barat dan BPS Indonesia", cEn:"Cirebon market analysis — BPS West Java and BPS Indonesia data"},
        {f:"img/pf-trusmi-4.jpg", cId:"Segmen sasaran: Young Family Starter, usia 20–35", cEn:"Target segment: Young Family Starter, ages 20–35"},
        {f:"img/pf-trusmi-5.jpg", cId:"Celah peluang: emotional lifecycle value yang belum digarap developer lain", cEn:"Opportunity gap: emotional lifecycle value no other developer had worked"}
      ],
      pointsEn:["Five roles at once: Marketing Communication, Sales SPV, PDCA, Assistant Regional Manager and Purchasing.",
                "Led a team of 14 and monitored 16 salespeople.",
                "Ran Meta Ads and Click-to-WhatsApp funnels for a subsidised-mortgage product.",
                "Territory canvassing, sales coaching, team training and promotion-budget management."] }
  ],

  ventures:[
    {name:"REALEVENT", glyph:"◆", period:"2019 — 2020", roleId:"Founder & CEO", roleEn:"Founder & CEO",
     descId:"Event organizer digital. 50+ vendor lokal terhubung; proses pemesanan acara dipangkas 40%.",
     descEn:"Digital event organiser. 50+ local vendors connected; booking time cut 40%."},
    {name:"SISPAN", glyph:"❖", period:"2021", roleId:"Founder & CEO", roleEn:"Founder & CEO",
     descId:"Agritech penghubung 75+ petani dengan konsultan di 3 kabupaten. Penghargaan PINOV + dana Rp2 miliar.",
     descEn:"Agritech linking 75+ farmers to consultants across 3 regencies. PINOV Award + Rp2 billion funding."},
    {name:"PINAWASTE", glyph:"✦", period:"2021 — 2023", roleId:"CMO & Co-Founder", roleEn:"CMO & Co-Founder",
     descId:"Serat nanas zero-waste. Memulai ekspor ke Filipina, bermitra dengan Narasi TV.",
     descEn:"Zero-waste pineapple fibre. Started export to the Philippines, partnered with Narasi TV."},
    {name:"Percetakan 3×5", glyph:"▣", period:"2026 —", roleId:"Pemilik", roleEn:"Owner",
     descId:"Toko cetak 3×5 meter di Cirebon: ATK, fotokopi, jilid, laminating. Dibangun sambil mencari kerja.",
     descEn:"A 3×5 m print shop in Cirebon: stationery, copying, binding, laminating. Built while job-hunting."}
  ],

  awards:[
    {ic:"star", big:1, meta:"23 Nov 2021 · Jakarta · Rp250 juta",
     titleId:"Juara 1 Nasional — Ideanation 2021", titleEn:"1st Place National — Ideanation 2021",
     descId:"Kategori Green & Daily Life Innovation bersama tim FIBERCELL, mewakili Universitas Tanjungpura.",
     descEn:"Green & Daily Life Innovation category with team FIBERCELL, representing Universitas Tanjungpura."},
    {ic:"bloom", big:1, meta:"2021 · Universitas Tanjungpura · Rp2 miliar",
     titleId:"Penghargaan Inovasi PINOV — lewat SISPAN", titleEn:"PINOV Innovation Award — through SISPAN",
     descId:"Pengakuan inovasi sekaligus pendanaan pemerintah Rp2 miliar untuk platform yang menjangkau 75+ petani.",
     descEn:"Innovation recognition plus Rp2 billion in government funding for a platform reaching 75+ farmers."},
    {ic:"globe", meta:"4–7 Okt 2019 · Nakhon Nayok, Thailand",
     titleId:"Delegate Goal 13 — Global Goals MUN", titleEn:"Goal 13 Delegate — Global Goals MUN",
     descId:"Climate Change Forum, sidang penuh berbahasa Inggris bersama delegasi lintas negara. Usia 20 tahun.",
     descEn:"Climate Change Forum, a full session in English with delegates from other countries. Age twenty."},
    {ic:"mic", meta:"2021 · HIMASEP Fak. Pertanian Untan",
     titleId:"Pemateri sekaligus Ketua Panitia — Seminar Pitch Deck", titleEn:"Speaker and Committee Chair — Pitch Deck Seminar",
     descId:"Dua sertifikat untuk satu acara: yang menyelenggarakan dan yang mengisi materi adalah orang yang sama.",
     descEn:"Two certificates for one event: the person who ran it and the person who taught it were the same."}
  ],

  education:[
    {inst:"Universitas Tanjungpura", period:"2017 — 2020", score:"IPK 3,64",
     degId:"S1 Agribisnis", degEn:"B.Sc. Agribusiness",
     noteId:"Jurusan yang menyatukan dua hal yang kemudian jadi ciri kariernya: pangan dan bisnis.",
     noteEn:"The degree that fused the two things his career kept returning to: food and business."},
    {inst:"SMA Negeri 9 Pontianak", period:"2014 — 2017", score:"Rata-rata 79",
     degId:"Jurusan IPS", degEn:"Social Sciences stream",
     noteId:"Bahasa Indonesia 92, TIK 90 — Matematika 68. Excel dipelajari karena butuh, bukan karena bakat.",
     noteEn:"Indonesian 92, IT 90 — Maths 68. Excel was learned out of need, not talent."},
    {inst:"Kunkwan International Mandarin Training Centre", period:"2026 —", score:"HSK dasar",
     degId:"Kelas percakapan Mandarin", degEn:"Mandarin conversation class",
     noteId:"Alasannya ia sebut sendiri: bahasa itu mempercepat karier di pasar Asia Tenggara.",
     noteEn:"His own reason: the language speeds up a career across the Southeast Asian market."}
  ],

  miniCerts:[
    {img:"img/sertifikat-marketing-expert.jpg", nId:"Certified in Marketing Expert", nEn:"Certified in Marketing Expert",
     meta:"MII · 13 Jun 2026 · No. 343/V/IV/26"},
    {img:"img/sertifikat-business-management.jpg", nId:"Certified in Business Management", nEn:"Certified in Business Management",
     meta:"MII · 4 Jun 2026 · No. 316/V/III/XI/26"},
    {img:"img/sertifikat-ai-professional.jpg",  nId:"Certified in Artificial Intelligence Professional", nEn:"Certified in AI Professional",
     meta:"MII · 13 Mei 2026 · No. 347/X/IV/26"}
  ],

  featCerts:[
    {kj:"経", img:"img/sertifikat-mini-mba.jpg", tagId:"Sertifikat utama", tagEn:"Flagship certificate",
     titleId:"Mini-MBA — Master in General Management", titleEn:"Mini-MBA — Master in General Management",
     meta:"Marketing Institute Indonesia × University of London · 13 Jun 2026 · No. 294/V/III/IX/26",
     bodyId:"Program manajemen umum setingkat mini-MBA yang ditempuh sambil bekerja penuh sebagai supervisor. Isinya persis yang ia butuhkan untuk naik dari supervisor ke manager: keuangan perusahaan, strategi, dan perilaku organisasi. Diselesaikan bersama tiga sertifikasi profesional lain — Marketing Expert, Business Management, dan Artificial Intelligence Professional — seluruhnya dalam dua bulan.",
     bodyEn:"A mini-MBA-level general management programme, taken while working full time as a supervisor. Its content is exactly what the step from supervisor to manager requires: corporate finance, strategy, and organisational behaviour. Completed alongside three other professional certifications — Marketing Expert, Business Management, and AI Professional — all inside two months."},
    {kj:"環", img:"img/sertifikat-ggmun.jpg", tagId:"Sertifikat internasional", tagEn:"International certificate",
     titleId:"Delegate Goal 13 — Global Goals MUN", titleEn:"Goal 13 Delegate — Global Goals MUN",
     meta:"Nakhon Nayok, Thailand · 4–7 Oktober 2019 · Climate Change Forum",
     bodyId:"Simulasi sidang PBB tempat peserta berperan sebagai delegasi negara dan bersidang penuh dalam bahasa Inggris. Ia duduk di forum Goal 13 — Perubahan Iklim — di usia 20 tahun, di luar negeri, membawa nama sendiri. Yang diuji bukan hafalan: berdebat dalam bahasa Inggris, menulis position paper, bernegosiasi lintas budaya, dan berpikir cepat di bawah tekanan.",
     bodyEn:"A UN simulation in which participants serve as country delegates and debate entirely in English. He sat in the Goal 13 forum — Climate Change — at twenty years old, abroad, under his own name. What it tested was not memorisation: arguing in English, writing a position paper, negotiating across cultures, and thinking fast under pressure."}
  ],

  certs:[
    {y:"2026", n:"Certified in Marketing Expert"},
    {y:"2026", n:"Certified in Business Management"},
    {y:"2026", n:"Certified in AI Professional"},
    {y:"2024", n:"EF SET English — CEFR B2"},
    {y:"2023", n:"Data Analysis Fundamental"},
    {y:"2023", n:"Statistics"},
    {y:"2023", n:"Statistics & Data Visualization"},
    {y:"2023", n:"Power Pivot"},
    {y:"2023", n:"Product Manager Foundations"},
    {y:"2023", n:"Product Manager Introduction"},
    {y:"2023", n:"Product Vision"},
    {y:"2021", n:"Grasshopper Coding"},
    {y:"2021", n:"Gapura Digital — Google"},
    {y:"2021", n:"Sawit Fest — Video Kreatif"},
    {y:"2020", n:"Ramadhan in Sakura II — Japan Corner"}
  ],

  skills:[
    {glyph:"⛩", titleId:"Operasional & Kepemimpinan", titleEn:"Operations & Leadership", items:[
      {i:"Manajemen tim besar & sistem shift", e:"Large-team management & shift systems", star:1},
      {i:"Penyusunan & penegakan SOP", e:"SOP design & enforcement"},
      {i:"Pengendalian persediaan & food cost", e:"Inventory & food-cost control"},
      {i:"Quality control & koordinasi lintas divisi", e:"Quality control & cross-division coordination"},
      {i:"Penanganan keluhan pelanggan", e:"Customer-complaint handling"}]},
    {glyph:"▦", titleId:"Data & Analisis", titleEn:"Data & Analysis", items:[
      {i:"Excel lanjut — PivotTable, VLOOKUP, Nested IF, Power Pivot", e:"Advanced Excel — PivotTable, VLOOKUP, nested IF, Power Pivot", star:1},
      {i:"Google Sheets lanjut — IMPORTRANGE, SUMPRODUCT, SUMIF lintas file", e:"Advanced Sheets — IMPORTRANGE, SUMPRODUCT, cross-file SUMIF", star:1},
      {i:"Perbaikan proses yang terukur", e:"Measurable process improvement", star:1},
      {i:"Data cleaning & analisis rantai nilai komoditas", e:"Data cleaning & commodity value-chain analysis"},
      {i:"Python dasar untuk analisis data", e:"Basic Python for data analysis"}]},
    {glyph:"◈", titleId:"Marketing & Growth", titleEn:"Marketing & Growth", items:[
      {i:"Meta Ads & funnel Click-to-WhatsApp", e:"Meta Ads & Click-to-WhatsApp funnels", star:1},
      {i:"Copywriting iklan & A/B testing", e:"Ad copywriting & A/B testing"},
      {i:"Strategi kanvasing wilayah", e:"Territory canvassing strategy"},
      {i:"Sales coaching & pelatihan tim", e:"Sales coaching & team training"},
      {i:"Produksi konten video (Reels)", e:"Video content production (Reels)"}]},
    {glyph:"✧", titleId:"Strategi & Inovasi", titleEn:"Strategy & Innovation", items:[
      {i:"Perancangan KPI & siklus PDCA", e:"KPI design & PDCA cycles", star:1},
      {i:"Menggalang pendanaan skala miliaran", e:"Raising billion-rupiah funding", star:1},
      {i:"Merancang alur kerja berbantuan AI", e:"Designing AI-assisted workflows", star:1},
      {i:"Penyusunan proposal & studi kelayakan", e:"Proposal writing & feasibility studies"},
      {i:"Pitching kompetitif di forum nasional", e:"Competitive pitching at national level"}]}
  ],

  languages:[
    {nameId:"Indonesia", nameEn:"Indonesian", pct:100, lvlId:"Penutur asli", lvlEn:"Native"},
    {nameId:"Malaysia",  nameEn:"Malay",      pct:90,  lvlId:"Sangat baik",  lvlEn:"Excellent"},
    {nameId:"Inggris",   nameEn:"English",    pct:70,  lvlId:"B2 · membaca C1", lvlEn:"B2 · reading C1"},
    {nameId:"Mandarin",  nameEn:"Mandarin",   pct:20,  lvlId:"Sedang belajar", lvlEn:"Learning"}
  ],

  roadmap:[
    {year:"2027", inId:"1 tahun", inEn:"1 year", titleId:"Level Manager", titleEn:"Manager level",
     descId:"Naik satu tingkat dari supervisor. Modalnya sudah ada: Mini-MBA, pengalaman memimpin 14–30 orang, rekam jejak lintas industri.",
     descEn:"One step up from supervisor. Already in hand: a Mini-MBA, teams of 14–30 led, a cross-industry record."},
    {year:"2031", inId:"5 tahun", inEn:"5 years", titleId:"Jajaran C-Level", titleEn:"C-Level",
     descId:"Bukan hal asing — ia sudah pernah jadi CEO dan CMO di startup. Bedanya: kali ini di organisasi yang jauh lebih besar.",
     descEn:"Not unfamiliar — he has been a startup CEO and CMO. The difference: a far larger organisation."},
    {year:"2036", inId:"10 tahun", inEn:"10 years", titleId:"Bisnis F&B sendiri", titleEn:"His own F&B business",
     descId:"Kembali ke bidang tempat ia memulai — tapi sebagai pemilik. Tujuh tahun mengelola dapur orang lain adalah persiapannya.",
     descEn:"Back to where he started — as the owner. Seven years running other people's kitchens was the preparation."}
  ],

  running:[
    {g:"▣", i:"Percetakan 3×5 meter di Cirebon", e:"A 3×5 m print shop in Cirebon"},
    {g:"语", i:"Kelas percakapan Mandarin", e:"Mandarin conversation class"},
    {g:"▶", i:"Konten YouTube tanpa wajah", e:"Faceless YouTube content"},
    {g:"⚙", i:"Memetakan 'agen' AI untuk operasional bisnis", e:"Mapping AI 'agents' for business operations"}
  ],

  personal:[
    {g:"⌨", tId:"Hobi yang ia tulis sendiri", tEn:"The hobbies he wrote himself",
     bId:"Coding, app engineering, dan belajar AI — ketiganya ditulis di kolom hobi, bukan kolom keterampilan.",
     bEn:"Coding, app engineering and learning AI — written in the hobbies field, not the skills field."},
    {g:"竜", tId:"“I'm brontosaurus RawR”", tEn:"“I'm brontosaurus RawR”",
     bId:"Bio Facebook-nya. Di balik CV penuh angka, ada orang yang memperkenalkan diri sebagai dinosaurus herbivora yang mengaum.",
     bEn:"His Facebook bio. Behind a CV full of numbers, someone who introduces himself as a roaring herbivorous dinosaur."},
    {g:"◉", tId:"Kreator digital", tEn:"Digital creator",
     bId:"2.800 pengikut di Facebook dan rutin membuat Reels — kemampuan yang tidak pernah ia cantumkan di CV mana pun.",
     bEn:"2,800 Facebook followers and a steady Reels habit — never once listed on a CV."},
    {g:"宵", tId:"Nama ‘vakansisenja’", tEn:"The name ‘vakansisenja’",
     bId:"Nama yang ia pilih sendiri: liburan di waktu senja. Jauh lebih tenang daripada ritme hidup di seluruh berkasnya.",
     bEn:"The name he chose himself: a holiday at dusk. Far calmer than the pace of the rest of his file."},
    {g:"桜", tId:"Jejak Jepang", tEn:"The Japanese thread",
     bId:"Seminar ‘Ramadhan in Sakura’ di Japan Corner Untan, kutipan Naruto di profilnya, dan ketepatan waktu ala Jepang dari seorang mentor lama.",
     bEn:"A ‘Ramadhan in Sakura’ seminar at Japan Corner Untan, a Naruto quote on his profile, and Japanese punctuality from an old mentor."},
    {g:"航", tId:"Tidak terikat satu pulau", tEn:"Not tied to one island",
     bId:"Pernah tinggal dan bekerja di Pontianak dan Cirebon; melamar sampai Jakarta, Bogor, Bandung, dan Samarinda.",
     bEn:"Has lived and worked in Pontianak and Cirebon; has applied as far as Jakarta, Bogor, Bandung and Samarinda."}
  ],

  principle:{
    qId:"Integritas itu kesesuaian antara pikiran, ucapan, dan perlakuan. Tiga-tiganya harus sejalan; kalau satu meleset, dua sisanya ikut batal.",
    qEn:"Integrity is the alignment of thought, word and treatment. All three must agree; if one slips, the other two are void.",
    byId:"Prinsip hidup — dinyatakan sendiri", byEn:"Life principle — in his own words"
  },

  contact:{
    email:"defeony@gmail.com",
    linkedin:"https://linkedin.com/in/defeony", linkedinLabel:"linkedin.com/in/defeony",
    // Nomor WhatsApp SENGAJA tidak dipasang. Halaman ini publik dan
    // terindeks mesin pencari; nomor telepon di halaman terbuka akan
    // dipanen robot spam. Perekrut yang serius akan mengirim email dulu.
    // Kalau suatu saat mau dipasang lagi, tambahkan kembali:
    //   wa:"https://wa.me/6285754407351", waLabel:"+62 857-5440-7351",
    // lalu kembalikan juga tombolnya di js/app.js bagian kontak.
    fb:"https://facebook.com/vakansisenja", fbLabel:"facebook.com/vakansisenja",
    cv:"https://bit.ly/defeonyportofolio", cvLabel:"Portofolio & sertifikat"
  }
};
