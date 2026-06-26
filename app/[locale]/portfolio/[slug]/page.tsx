import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return constructMetadata({ locale });

  const title = locale === "ar" ? project.nameAr : project.name;
  return constructMetadata({
    title,
    description: locale === "ar" ? project.descriptionAr : project.description,
    image: project.coverImage,
    locale,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
