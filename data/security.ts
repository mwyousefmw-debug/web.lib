import type { SecurityConcept, SecurityPrinciple, SecurityStatusItem } from "@/types";

/**
 * Personal cybersecurity page — /security.
 * CIA Triad entries are general, introductory definitions (not claims of
 * personal study or mastery). Only add studied topics, labs, tools or
 * certificates here when there is verifiable evidence to link to.
 */
export const ciaTriad: SecurityConcept[] = [
  {
    id: "confidentiality",
    icon: "Lock",
    title: "Confidentiality",
    titleAr: "السرية",
    definition:
      "Information is accessible only to those who are authorized to see it.",
    definitionAr: "ألا يطّلع على المعلومة إلا من يملك التفويض بذلك.",
    examples: ["Encrypting traffic in transit with HTTPS", "Restricting access with permissions"],
    examplesAr: ["تشفير الاتصال أثناء النقل عبر HTTPS", "تقييد الوصول بالصلاحيات"],
  },
  {
    id: "integrity",
    icon: "ShieldCheck",
    title: "Integrity",
    titleAr: "السلامة",
    definition:
      "Data stays accurate and complete, and is not changed without authorization.",
    definitionAr: "أن تبقى البيانات دقيقة وكاملة، ولا تتغير دون تفويض.",
    examples: ["Verifying files with hash checksums", "Keeping audit logs of changes"],
    examplesAr: ["التحقق من الملفات ببصمات التجزئة (hash)", "الاحتفاظ بسجلات تدقيق للتغييرات"],
  },
  {
    id: "availability",
    icon: "Server",
    title: "Availability",
    titleAr: "التوافر",
    definition:
      "Systems and data are available to authorized users when they need them.",
    definitionAr: "أن تكون الأنظمة والبيانات متاحة لأصحاب الحق عند حاجتهم إليها.",
    examples: ["Regular backups", "Redundancy and recovery plans"],
    examplesAr: ["النسخ الاحتياطي المنتظم", "التكرار وخطط الاستعادة"],
  },
];

export const responsiblePrinciples: SecurityPrinciple[] = [
  {
    id: "safe-environments",
    icon: "FlaskConical",
    title: "Safe, isolated environments",
    titleAr: "بيئات آمنة ومعزولة",
    description: "I learn and practice in safe, isolated environments.",
    descriptionAr: "أتعلّم وأتدرّب في بيئات آمنة ومعزولة.",
  },
  {
    id: "defensive",
    icon: "Shield",
    title: "Defensive focus",
    titleAr: "تركيز دفاعي",
    description: "I focus on defensive analysis and on protecting systems.",
    descriptionAr: "أركّز على التحليل الدفاعي وحماية الأنظمة.",
  },
  {
    id: "authorized-only",
    icon: "KeyRound",
    title: "Authorized testing only",
    titleAr: "اختبار مصرّح به فقط",
    description:
      "I only test systems I own or have explicit permission to test.",
    descriptionAr: "لا أختبر إلا الأنظمة التي أملكها أو لدي تفويض صريح لاختبارها.",
  },
  {
    id: "no-public-targets",
    icon: "Ban",
    title: "No unauthorized targets",
    titleAr: "لا أهداف غير مصرّح بها",
    description:
      "I do not test public or third-party systems without permission.",
    descriptionAr: "لا أختبر أي نظام عام أو تابع لطرف ثالث دون إذن.",
  },
];

/** Honest status of each category. Replace with evidence-backed items when available. */
export const securityStatus: SecurityStatusItem[] = [
  {
    id: "practical",
    title: "Practical work",
    titleAr: "التطبيقات العملية",
    status: "No published practical work yet.",
    statusAr: "لا توجد تطبيقات عملية منشورة حاليًا.",
  },
  {
    id: "certificates",
    title: "Certificates",
    titleAr: "الشهادات",
    status: "No verified certificates at the moment.",
    statusAr: "لا توجد شهادات موثّقة حاليًا.",
  },
  {
    id: "in-progress",
    title: "Currently learning",
    titleAr: "قيد التعلّم",
    status: "Current learning topics have not been specified yet.",
    statusAr: "لم تُحدَّد مواضيع التعلّم الحالية بعد.",
  },
];
