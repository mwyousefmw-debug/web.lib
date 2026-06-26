import type { Project } from "@/types";

/**
 * Portfolio projects — add each project here as received from the client.
 * Each entry maps to /portfolio/[slug] via the slug field.
 * Keep this file as the single source of truth for all portfolio data.
 */
export const projects: Project[] = [
  {
    slug: "wadco",
    name: "WADCO – Electrical Industries",
    nameAr: "الوادي الجديد للصناعات الكهربائية",
    client: "WADCO Libya",
    clientAr: "شركة الوادي الجديد لصناعة المواد والمعدات الكهربائية",
    description:
      "A leading Libyan industrial company founded in 2009, specialized in manufacturing and maintaining oil-immersed electrical distribution transformers.",
    descriptionAr:
      "شركة صناعية ليبية رائدة تأسست عام 2009، متخصصة في تصنيع وصيانة محولات التوزيع الكهربائية المغمورة بالزيت.",
    longDescription:
      "WADCO Libya (New Valley Company for Manufacturing Electrical Materials and Equipment) is a pioneering Libyan industrial company founded in 2009. Specialized in manufacturing and maintaining oil-immersed electrical distribution transformers, WADCO serves major infrastructure and energy projects across Libya. The website was built as a professional bilingual landing page to showcase their products, services, completed projects, and client portfolio — presenting the company's industrial leadership with a bold, modern visual identity.",
    longDescriptionAr:
      "شركة الوادي الجديد لصناعة المواد والمعدات الكهربائية (WADCO Libya) هي شركة صناعية ليبية رائدة تأسست عام 2009، متخصصة في تصنيع وصيانة محولات التوزيع الكهربائية المغمورة بالزيت. تخدم الشركة المشاريع الكبرى في قطاعي البنية التحتية والطاقة عبر ليبيا. تم تصميم الموقع كصفحة هبوط احترافية ثنائية اللغة لعرض منتجاتهم وخدماتهم ومشاريعهم المنجزة وقائمة عملائهم — مع هوية بصرية حديثة وجريئة تعكس ريادة الشركة الصناعية.",
    category: "landing-page",
    technologies: ["React.js", "Node.js"],
    coverImage: "/images/projects/wadcoooo.jpeg",
    desktopScreenshots: [],
    mobileScreenshots: [],
    liveUrl: "https://wadco.ly",
    featured: true,
    completedAt: "2026-04",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
