// Editable contact destinations: only enter addresses/handles Emilio has confirmed.
export const contactConfig = {
  email: "emiliosinji8@gmail.com",
  whatsapp: "+6281298778876",
  instagram: "https://www.instagram.com/misiearth",
  linkedin: "https://www.linkedin.com/in/emilio-sinji-730738344/",
  github: "https://github.com/sinji-creator"
};

export const navigation = [
  ["Home", "home"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Courses", "courses"],
  ["Contact", "contact"]
];

export const roles = [
  "Data Scientist Enthusiast",
  "AI Engineer Enthusiast",
  "Machine Learning Enthusiast"
];

export const skillGroups = [
  {
    title: "Data Analyst",
    icon: "chart",
    tools: [
      ["Google Sheets", "googlesheets", "34A853"],
      ["Microsoft Excel", "https://api.iconify.design/vscode-icons/file-type-excel.svg", "217346"],
      ["Google Looker Studio", "looker", "4285F4"],
      ["Python", "python", "3776AB"],
      ["Pandas", "pandas", "150458"],
      ["NumPy", "numpy", "4DABCF"],
      ["Matplotlib", "https://api.iconify.design/logos/matplotlib-icon.svg", "11557C"]
    ]
  },
  {
    title: "Data Science",
    icon: "nodes",
    tools: [
      ["Python", "python", "3776AB"],
      ["Pandas", "pandas", "150458"],
      ["NumPy", "numpy", "4DABCF"],
      ["Matplotlib", "https://api.iconify.design/logos/matplotlib-icon.svg", "11557C"],
      ["Seaborn", "https://api.iconify.design/logos/seaborn-icon.svg", "4C72B0"],
      ["Scikit-learn", "scikitlearn", "F7931E"],
      ["Google Colab", "googlecolab", "F9AB00"],
      ["Jupyter Notebook", "jupyter", "F37626"]
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: "spark",
    tools: [
      ["Python", "python", "3776AB"],
      ["TensorFlow", "tensorflow", "FF6F00"],
      ["Google Colab", "googlecolab", "F9AB00"],
      ["Kaggle Notebooks", "kaggle", "20BEFF"],
      ["Orange Data Mining", "https://orangedatamining.com/favicon.ico", "F7941D"]
    ]
  }
];

export const projects = [
  {
    title: "Spam Judol Detector",
    description: "Aplikasi pintar berbasis AI untuk mendeteksi dan menyaring komentar spam judi online di media sosial satu per satu maupun sekaligus agar kolom komentar tetap bersih dari tautan berbahaya.",
    image: "Project Spam Judol Detector/Screenshot 2026-10-04 214633.png",
    url: "https://huggingface.co/spaces/Rezkiii/Spam-Judol-Detector-2",
    type: "AI / NLP",
    number: "01"
  },
  {
    title: "URL Shorterner",
    description: "Aplikasi pemendek URL otomatis yang merapikan tautan panjang menjadi ringkas dan mudah dibagikan. Masukkan tautan asli, lalu sistem membuat versi pendeknya.",
    image: "Project URL Shorterner/Screenshot 2026-10-04 181414.png",
    url: "https://github.com/sinji-creator/Project-URL-Shorterner",
    type: "WEB APPLICATION",
    number: "02"
  },
  {
    title: "Web Sparepart",
    description: "Website toko online suku cadang untuk memudahkan pemilik kendaraan dan bengkel mencari serta membeli sparepart secara digital.",
    image: "Project Web Sparepart/Screenshot 2026-10-04 215429.png",
    url: "https://github.com/sinji-creator/Project-Web-Sparepart",
    type: "E-COMMERCE",
    number: "03"
  },
  {
    title: "Analisis Bisnis Supermarket Indonesia",
    description: "Membersihkan dan mengolah data penjualan menjadi dashboard visual untuk memantau performa toko dan tren keuntungan dengan mudah.",
    image: "Project Analisis Bisnis Supermarket Indonesia/Screenshot 2026-10-04 215946.png",
    url: "https://datastudio.google.com/reporting/f82e3d7a-fb3b-4984-bb9b-af2784acd42e",
    type: "DATA ANALYTICS",
    number: "04"
  },
  {
    title: "Beijing Air Quality Dashboard",
    description: "Dashboard untuk memantau tingkat polusi, mengenali polutan tertinggi, serta melihat perubahan kualitas udara harian di berbagai stasiun.",
    image: "Project Beijing Air Quality Dashboard/Screenshot 2026-10-04 220318.png",
    url: "https://dashboardpy-3ps7ik6xnmwh5sabd62mee.streamlit.app/",
    type: "DATA VISUALIZATION",
    number: "05"
  }
];

const drive = (id) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;

export const courses = [
  {
    title: "Asah LED Dicoding 2026",
    date: "Agustus 2026 — sekarang",
    provider: "Dicoding × Asah",
    logo: "logo asah.jpg",
    groups: [
      {
        title: "Sertifikat",
        items: [
          ["Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", "1ixFOwSKLPTuPoPM0UIc_naIVbi6_a4hV"],
          ["Pengenalan ke Logika Pemrograman (Programming Logic 101)", "1L0wGH23yfa8rAxCem40fgeyO2n8lLtuh"],
          ["Belajar Dasar Git dengan Github", "1vXyJWUtOFh7PUZIgNcXz05g8LnEwSUuv"],
          ["Belajar Dasar Data Science", "1Bpo1z5UYiWEiV_rwnKOmXjZFqbeF_62A"],
          ["Belajar Dasar Visualisasi Data", "1xxGS35W6WcvOl9f5nbiffNO7QKtOG3cU"],
          ["Belajar Dasar Structured Query Language (SQL)", "1dMK8yZCY9-4zCe2QcFwDrEzLuHwXVEVs"],
          ["Memulai Pemrograman dengan Python", "1qqGJ3aF9DZvF-m8LGsbqBiw_YtQyGxju"],
          ["Belajar Analisis Data untuk Pemula", "10Blc1oadtqqXXkYcAzPVuVhESyFF9O5I"]
        ]
      }
    ]
  },
  {
    title: "Kursus Data Science",
    date: "Februari 2025 — sekarang",
    provider: "Universitas Gunadarma",
    logo: "logo universitas gunadarma.jpg",
    groups: [
      {
        title: "Sertifikat",
        items: [
          ["Fundamental of Python", "1c8UAj5BpFM5xEcCoCDWeuiC-mkBpBR69"],
          ["Fundamental of Data Science", "1luVy4dV8ycvPKkMIdFs52j92PqeAYK2J"],
          ["Data Understanding using Python", "1mroxp1VNCGt9mOYCYw-pUPNnPCOvxDht"],
          ["Data Preparation using Python", "1LIlwgZMB98ZiUeRH4sm-NPpDs2wtnph6"]
        ]
      }
    ]
  },
  {
    title: "IDCamp 2025: AI Engineer",
    date: "September 2025 — Agustus 2026",
    provider: "Indosat Ooredoo Hutchison Digital Camp",
    logo: "logo IDCamp.jpeg",
    groups: [
      {
        title: "Sertifikat Modul",
        items: [
          ["Belajar Dasar AI", "1A_WvAWBZMvEySq9vpDFiqH0LBuP4aNQW"],
          ["Memulai Pemrograman dengan Python", "1zB-3d9nLyh_zZFxTMtikXwzgImqkpJyS"],
          ["Belajar Machine Learning untuk Pemula", "1veu4NuLmkzy8a2rHapsYVjKP5_0b1hzT"],
          ["Belajar Fundamental Deep Learning", "1l8yuvOXrNDcsqzq8ZsoY0B2ha6ZvHRQl"],
          ["Belajar Deep Learning tingkat Lanjut dengan TensorFlow", "1y0hvuGb_08KMpUKZvk26rqABbnktsWvX"],
          ["Machine Learning Terapan", "1QK1qXTZO4biy3vc0N8gubR0Y8yNSvedO"]
        ]
      },
      {
        title: "Sertifikat Kelulusan",
        items: [
          ["Sertifikat Kelulusan Kelas Menengah", "1ShLZ49DUO4EDZFKqwH1wQD2bzvfJW--v"],
          ["Sertifikat Kelulusan Kelas Mahir", "19KUtW-JKpGXj5Fs8j6cJx2jr0vd9NtFG"]
        ]
      }
    ]
  }
].map(course => ({
  ...course,
  groups: course.groups.map(group => ({
    ...group,
    items: group.items.map(([title, id]) => ({
      title,
      url: drive(id),
      thumbnail: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`
    }))
  }))
}));