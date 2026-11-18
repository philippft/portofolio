import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/content";
import { ogImage } from "@/lib/site";
import { ProjectDetailView } from "@/components/project/ProjectDetailView";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const url = `/projects/${project.slug}`;
  const fullTitle = `${project.title}, Philip Tomasui`;
  // The layout's title template appends ", Philip Tomasui" to <title>.
  // Open Graph and Twitter are set here too, otherwise they would keep the home page's title.
  return {
    title: project.title,
    description: project.line.en,
    alternates: { canonical: url },
    openGraph: { type: "article", title: fullTitle, description: project.line.en, url, images: [ogImage] },
    twitter: { card: "summary", title: fullTitle, description: project.line.en, images: [ogImage.url] },
  };
}

export default function ProjectPage({ params }: Props) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <ProjectDetailView
      project={projects[index]}
      prev={prev && { slug: prev.slug, title: prev.title }}
      next={next && { slug: next.slug, title: next.title }}
    />
  );
}
