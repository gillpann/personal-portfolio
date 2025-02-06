export const botResponses = {
  indonesianKeywords: [
    "siapa",
    "dimana",
    "apa",
    "tentang",
    "portfolio",
    "namamu",
    "kamu",
    "tinggal",
    "hai",
    "halo",
    "hei",
  ],
  matchResponses: [
    { keywords: ["skill", "skills", "keterampilan"], responseKey: "skills" },
    { keywords: ["project", "projects", "proyek"], responseKey: "projects" },
    { keywords: ["contact", "kontak", "hubungi"], responseKey: "contact" },
    {
      keywords: ["namamu", "siapa", "who are you", "what is your name", "nama"],
      responseKey: "name",
    },
    {
      keywords: ["tinggal", "dimana", "where", "lokasi"],
      responseKey: "location",
    },
    {
      keywords: ["education", "pendidikan", "sekolah"],
      responseKey: "education",
    },
    { keywords: ["service", "layanan", "jasa"], responseKey: "services" },
    {
      keywords: ["hi", "hello", "hey", "greetings", "halo", "hai"],
      responseKey: "greeting",
    },
  ],
  greeting: {
    thinking: "Berpikir...",
    response: (lang = "en") =>
      lang === "id"
        ? "Hai! Namaku Satria Ahmad Gilvan. Selamat datang di portofolioku! Ada yang bisa saya bantu?"
        : "Hi there! I'm Satria Ahmad Gilvan. Welcome to my portfolio! How can I help you today?",
  },
  name: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya Satria Ahmad Gilvan, seorang mahasiswa Teknik Informatika dan pengembang web frontend. Senang bertemu dengan Anda!"
        : "I'm Satria Ahmad Gilvan, an Informatics Engineering student and frontend web developer. Nice to meet you!",
  },
  default: {
    thinking: "Berpikir...",
    response: (lang = "en") =>
      lang === "id"
        ? "Saya tidak mengerti maksud Anda. Bisa tolong jelaskan lagi?"
        : "I'm not sure I understand. Could you please clarify?",
  },
  introduction: {
    response: (lang = "en") =>
      lang === "id"
        ? "Halo! Saya Satria Ahmad Gilvan, seorang mahasiswa Teknik Informatika di Universitas Gunadarma. Saya adalah pengembang web frontend yang antusias dan desainer UI/UX."
        : "Hello! I'm Satria Ahmad Gilvan, an Informatics Engineering student at Gunadarma University. I'm an enthusiastic frontend web developer and UI/UX designer.",
  },
  location: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya tinggal di Bekasi, Indonesia. Tepatnya di daerah Tambun Selatan."
        : "I live in Bekasi, Indonesia. Specifically in the Tambun Selatan area.",
  },
  skills: {
    thinking: "Menganalisis keterampilan...",
    response: (lang = "en") =>
      lang === "id"
        ? "Saya mahir dalam pengembangan web, khususnya dengan React, Next.js, dan teknologi frontend modern. Saya juga memiliki keterampilan dalam desain UI/UX dan pengembangan aplikasi."
        : "I'm proficient in web development, particularly with React, Next.js, and modern frontend technologies. I also have skills in UI/UX design and app development.",
  },
  projects: {
    thinking: "Mengumpulkan informasi proyek...",
    response: (lang = "en") =>
      lang === "id"
        ? "Saya telah mengerjakan berbagai proyek web dan desain. Ingin tahu lebih detail tentang proyek-proyek saya?"
        : "I've worked on various web and design projects. Would you like to know more details about my projects?",
  },
  contact: {
    thinking: "Mengambil informasi kontak...",
    response: (lang = "en") =>
      lang === "id"
        ? "Anda bisa menghubungi saya melalui email di gpundong@gmail.com atau melalui formulir kontak di halaman website ini."
        : "You can reach me via email at gpundong@gmail.com or through the contact form on this website.",
  },
  education: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya sedang menempuh pendidikan S1 Teknik Informatika di Universitas Gunadarma. Sebelumnya, saya lulus dari SMAN 3 Tambun Selatan dengan jurusan Matematika dan Ilmu Pengetahuan Alam."
        : "I'm currently pursuing a Bachelor's in Informatics Engineering at Gunadarma University. Previously, I graduated from SMAN 3 Tambun Selatan with a Science major.",
  },
  services: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya menawarkan layanan pengembangan web, desain UI/UX, dan pengembangan aplikasi. Saya dapat membantu Anda mengubah ide menjadi solusi digital yang fungsional dan menarik."
        : "I offer web development, UI/UX design, and app development services. I can help you transform your ideas into functional and appealing digital solutions.",
  },
};
