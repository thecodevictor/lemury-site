import React from "react";
import { notFound } from "next/navigation";
import { CONCEPTUAL_PROJECTS } from "@/data/lemuryData";
import { StoreShowcaseClient } from "@/components/StoreShowcaseClient";

export function generateStaticParams() {
  return CONCEPTUAL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ConceptualStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = CONCEPTUAL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <StoreShowcaseClient project={project} />;
}

