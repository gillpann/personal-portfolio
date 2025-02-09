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
    "makasih",
    "terima",
    "kasih",
    "bagus",
    "keren",
    "mantap",
    "pagi",
    "siang",
    "sore",
    "malam",
    "gimana",
    "lagi",
    "ngapain",
    "sibuk",
    "bosen",
    "santai",
    "asik",
    "seru",
    "gabut",
    "cape",
    "capek",
    "semangat",
    "keren",
    "mantap",
    "oke",
    "ok",
    "good",
    "nice",
    "hehe",
    "wkwk",
    "wkwkwk",
  ],

  matchResponses: [
    {
      keywords: ["skill", "skills", "keterampilan", "bisa", "capable"],
      responseKey: "skills",
    },
    {
      keywords: ["project", "projects", "proyek", "portfolio", "portofolio"],
      responseKey: "projects",
    },
    {
      keywords: ["contact", "kontak", "hubungi", "email"],
      responseKey: "contact",
    },
    {
      keywords: ["namamu", "siapa", "who are you", "what is your name", "nama"],
      responseKey: "name",
    },
    {
      keywords: ["tinggal", "dimana", "where", "lokasi", "location"],
      responseKey: "location",
    },
    {
      keywords: ["education", "pendidikan", "sekolah", "kuliah", "study"],
      responseKey: "education",
    },
    { keywords: ["service", "layanan", "jasa"], responseKey: "services" },
    {
      keywords: ["hi", "hello", "hey", "greetings", "halo", "hai"],
      responseKey: "greeting",
    },
    {
      keywords: ["thanks", "thank", "makasih", "terima kasih"],
      responseKey: "thanks",
    },
    {
      keywords: [
        "good",
        "nice",
        "great",
        "awesome",
        "bagus",
        "keren",
        "mantap",
        "hebat",
      ],
      responseKey: "praise",
    },
    {
      keywords: ["hobby", "hobi", "like", "suka", "interests", "interest"],
      responseKey: "hobbies",
    },
    {
      keywords: ["experience", "pengalaman", "kerja", "work"],
      responseKey: "experience",
    },
    {
      keywords: ["tech", "teknologi", "tools", "stack", "framework"],
      responseKey: "techStack",
    },
    {
      keywords: ["goal", "tujuan", "future", "masa depan"],
      responseKey: "goals",
    },
    { keywords: ["pagi", "morning"], responseKey: "morning" },
    { keywords: ["siang", "afternoon"], responseKey: "afternoon" },
    { keywords: ["sore", "evening"], responseKey: "evening" },
    { keywords: ["malam", "night"], responseKey: "night" },
    {
      keywords: ["ngapain", "lagi apa", "what are you doing"],
      responseKey: "doing",
    },
    { keywords: ["bosen", "boring", "gabut"], responseKey: "bored" },
    { keywords: ["cape", "capek", "tired"], responseKey: "tired" },
    { keywords: ["semangat", "spirit", "fighting"], responseKey: "spirit" },
    {
      keywords: ["bye", "dadah", "sampai jumpa", "good bye"],
      responseKey: "goodbye",
    },
    { keywords: ["hehe", "wkwk", "wkwkwk", "haha"], responseKey: "laugh" },
    {
      keywords: ["ok", "oke", "okay", "oki", "okey", "sip"],
      responseKey: "okay",
    },
    { keywords: ["assalamualaikum", "asalamualaikum"], responseKey: "salam" },
    { keywords: ["kamu lucu", "lucu", "cute", "imut"], responseKey: "cute" },
    { keywords: ["bisa", "can you", "could you"], responseKey: "capability" },
    { keywords: ["main", "game", "gaming"], responseKey: "gaming" },
    { keywords: ["musik", "music", "lagu", "song"], responseKey: "music" },
  ],
  greeting: {
    response: (lang = "en") =>
      lang === "id"
        ? "Halo! 👋 Saya Gilvan. Senang bertemu dengan kamu! Ada yang bisa saya bantu?"
        : "Hi there! 👋 I'm Gilvan. Great to meet you! How can I help you today?",
  },

  thanks: {
    response: (lang = "en") =>
      lang === "id"
        ? "Sama-sama! Senang bisa membantu. Ada hal lain yang ingin kamu tanyakan?"
        : "You're welcome! Happy to help. Anything else you'd like to know?",
  },

  praise: {
    response: (lang = "en") =>
      lang === "id"
        ? "Wah, terima kasih banyak! 😊 Saya senang kamu menyukainya. Ada yang ingin kamu tanyakan lebih lanjut?"
        : "Thank you so much! 😊 I'm glad you like it. Would you like to know more about anything specific?",
  },

  hobbies: {
    response: (lang = "en") =>
      lang === "id"
        ? "Selain coding, saya suka desain UI/UX, bermain game, dan belajar teknologi baru. Kamu juga suka hal yang sama?"
        : "Besides coding, I enjoy UI/UX design, gaming, and learning new technologies. Are you into any of these too?",
  },

  techStack: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya menggunakan React, Next.js, Tailwind CSS, dan beberapa tools modern lainnya. Tech stack favoritku adalah MERN stack!"
        : "I work with React, Next.js, Tailwind CSS, and other modern tools. My favorite is the MERN stack!",
  },

  goals: {
    response: (lang = "en") =>
      lang === "id"
        ? "Saya ingin menjadi full-stack developer yang handal dan berkontribusi pada proyek-proyek yang bermanfaat. Impian saya adalah membuat teknologi yang bisa membantu banyak orang!"
        : "I aim to become a skilled full-stack developer and contribute to meaningful projects. My dream is to create technology that helps people!",
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
  morning: {
    response: (lang = "en") =>
      lang === "id"
        ? "Pagi! 🌅 Semoga harimu menyenangkan! Ada yang bisa aku bantu?"
        : "Good morning! 🌅 Hope your day is great! What can I help you with?"
  },

  afternoon: {
    response: (lang = "en") =>
      lang === "id"
        ? "Siang! ☀️ Semoga kamu ga kepanasan ya! Ada yang bisa aku bantu?"
        : "Good afternoon! ☀️ Hope you're having a good day! Need any help?"
  },

  evening: {
    response: (lang = "en") =>
      lang === "id"
        ? "Sore! 🌤️ Hari yang menyenangkan ya! Ada yang bisa aku bantu?"
        : "Good evening! 🌤️ Having a nice day? What can I help you with?"
  },

  night: {
    response: (lang = "en") =>
      lang === "id"
        ? "Malam! 🌙 Masih semangat nih? Ada yang bisa aku bantu?"
        : "Good night! 🌙 Still going strong? What can I help you with?"
  },

  doing: {
    response: (lang = "en") =>
      lang === "id"
        ? "Lagi standby nih buat bantu kamu explore portfolio aku! 😊 Mau tau tentang apa?"
        : "Just hanging around to help you explore my portfolio! 😊 What would you like to know?"
  },

  bored: {
    response: (lang = "en") =>
      lang === "id"
        ? "Gabut ya? Sama nih 😄 Mau tau tentang project-project ku? Ada yang seru lho!"
        : "Feeling bored? Me too 😄 Want to know about my cool projects?"
  },

  tired: {
    response: (lang = "en") =>
      lang === "id"
        ? "Capek ya? Istirahat dulu aja! Tapi kalau masih penasaran sama portfolioku, aku siap bantu kok 😊"
        : "Feeling tired? Take a rest! But if you're still curious about my portfolio, I'm here to help 😊"
  },

  spirit: {
    response: (lang = "en") =>
      lang === "id"
        ? "Makasih! Kamu juga semangat ya! 💪 Ada yang bisa aku bantu?"
        : "Thanks! You stay spirited too! 💪 Need any help?"
  },

  goodbye: {
    response: (lang = "en") =>
      lang === "id"
        ? "Dadah! 👋 Makasih ya udah mampir ke portfolioku! Semoga harimu menyenangkan!"
        : "Bye! 👋 Thanks for checking out my portfolio! Have a great day!"
  },

  laugh: {
    response: (lang = "en") =>
      lang === "id"
        ? "Hehe 😄 Seneng deh liat kamu happy! Mau tau lebih banyak tentang aku?"
        : "Hehe 😄 Glad to see you're happy! Want to know more about me?"
  },

  okay: {
    response: (lang = "en") =>
      lang === "id"
        ? "Sip! 👌 Ada lagi yang mau ditanyain?"
        : "Alright! 👌 Anything else you'd like to know?"
  },

  salam: {
    response: (lang = "en") =>
      lang === "id"
        ? "Waalaikumsalam! 😊 Ada yang bisa aku bantu?"
        : "Waalaikumsalam! 😊 How can I help you?"
  },

  cute: {
    response: (lang = "en") =>
      lang === "id"
        ? "Aaa makasih! 🤖✨ Kamu juga baik banget! Ada yang mau ditanyain?"
        : "Aww thanks! 🤖✨ You're so kind! Any questions for me?"
  },

  capability: {
    response: (lang = "en") =>
      lang === "id"
        ? "Aku bisa bantu jawab tentang skills, project, pendidikan, dan banyak hal tentang portfolio aku! Mau tau yang mana?"
        : "I can tell you about my skills, projects, education, and lots more about my portfolio! What interests you?"
  },

  gaming: {
    response: (lang = "en") =>
      lang === "id"
        ? "Aku suka main game juga! Terutama game RPG dan strategi. Kamu suka main game apa? 🎮"
        : "I love gaming too! Especially RPG and strategy games. What games do you play? 🎮"
  },

  music: {
    response: (lang = "en") =>
      lang === "id"
        ? "Aku suka dengerin musik sambil coding! Bikin fokus dan semangat! 🎵 Kamu juga suka musik?"
        : "I love listening to music while coding! Keeps me focused and energized! 🎵 Do you like music too?"
  },
};
