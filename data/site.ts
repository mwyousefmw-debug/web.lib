export const siteConfig = {
  name: "WebLib",
  url: "https://weblib.ly",
  description:
    "WebLib — Modern software company specialized in designing and developing high-quality websites, web applications, dashboards, and UI/UX solutions.",
  descriptionAr:
    "WebLib — شركة برمجيات حديثة متخصصة في تصميم وتطوير مواقع وتطبيقات ولوحات تحكم وحلول UI/UX عالية الجودة.",
  logo: "/images/projects/logo.jpg",
  location: "Libya",
  locationAr: "ليبيا",

  // ── Contact ────────────────────────────────────────────────────────────────
  email: "mwyousefmw@gmail.com",
  phone: "+218 0941000916",
  whatsapp: "+218 0941000916",
  address: "Tripoli, Libya",
  addressAr: "طرابلس، ليبيا",

  // ── Social ─────────────────────────────────────────────────────────────────
  // Leave any field as "" to hide it from the UI automatically
  social: {
    facebook: "",                                        // add URL when ready
    instagram: "https://www.instagram.com/web.libly/",
    linkedin: "",                                        // add URL when ready
    twitter: "",                                         // add URL when ready
    github: "https://github.com/mwyousefmw-debug",
    youtube: "",                                         // add URL when ready
    tiktok: "https://www.tiktok.com/@web.lib",
  },

  // ── EmailJS ────────────────────────────────────────────────────────────────
  // Template variables: {{from_name}} {{from_email}} {{phone}} {{subject}} {{service}} {{message}}
  emailjs: {
    serviceId: "service_1z128g8",
    templateId: "template_j6wy8xl",
    publicKey: "qcQdBv16z9VUjFEny",
  },
};

export const stats = [
  { value: 33, suffix: "+", labelKey: "stats.projects", icon: "FolderOpen" },
  { value: 7,  suffix: "+", labelKey: "stats.clients",  icon: "Users"      },
  { value: 7,  suffix: "+", labelKey: "stats.years",    icon: "Calendar"   },
  { value: 100, suffix: "%", labelKey: "stats.satisfaction", icon: "Star"  },
];
