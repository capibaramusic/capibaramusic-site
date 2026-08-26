"use client";

import { useState } from "react";
import { projectDefinitions } from "../content/projects";
import { useLocale } from "./LocaleProvider";

function ProjectImage({ src }: { src: string }) {
  return (
    <div className="m-0 w-full self-center overflow-hidden border-0 bg-transparent p-0 outline-0 min-[769px]:col-start-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="m-0 block h-auto w-full max-w-none border-0 bg-transparent p-0 outline-0"
      />
    </div>
  );
}

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const { content } = useLocale();
  const { projects } = content;

  const selectedProject =
    projectDefinitions.find((project) => project.id === selectedProjectId) ??
    projectDefinitions[0];
  const selectedProjectTitle = projects.titles[selectedProject.id];
  const selectedProjectContent = projects.details[selectedProject.id];
  const isExpanded = selectedProjectId !== null;

  function openProject(projectId: string) {
    setSelectedProjectId(projectId);
  }

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="border-t border-[#DDD] px-8 py-10 min-[769px]:px-[8%] min-[769px]:py-16 lg:py-20"
    >
      <p className="type-section-label mb-[18px] text-[#888]">
        {projects.label}
      </p>

      <h2
        id="projects-heading"
        className="type-section-heading mb-8 min-[769px]:mb-12"
      >
        {projects.heading[0]}
        <br />
        {projects.heading[1]}
      </h2>

      <div
        className="grid grid-cols-1 gap-1 min-[769px]:grid-cols-2 lg:grid-cols-4"
        aria-label={projects.selectionLabel}
      >
        {projectDefinitions.map((project) => {
          const isSelected =
            isExpanded && selectedProjectId === project.id;

          return (
            <button
              key={project.id}
              type="button"
              className={`${project.width} type-item-title flex h-24 touch-manipulation items-center justify-center border border-[#CFCFCB] bg-[#F7F7F4] px-4 text-center text-[#1E1E1E] transition-colors duration-300 hover:bg-[#D7FF3F] focus-visible:bg-[#D7FF3F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] min-[769px]:h-28`}
              onClick={() => openProject(project.id)}
              aria-expanded={isSelected}
              aria-controls="project-detail"
            >
              {projects.titles[project.id]}
            </button>
          );
        })}
      </div>

      {isExpanded && (
        <div className="mt-6 min-[769px]:mt-8">
          <article
            id="project-detail"
            className="relative border border-[#CFCFCB] px-5 py-6 min-[769px]:px-10 min-[769px]:py-10"
          >
            <button
              type="button"
              className="type-close-control absolute top-4 right-4 flex h-10 w-10 items-center justify-center transition-colors duration-300 hover:bg-[#D7FF3F] focus-visible:bg-[#D7FF3F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E]"
              onClick={() => setSelectedProjectId(null)}
              aria-label={`${projects.closeLabel} ${selectedProjectTitle}`}
            >
              ×
            </button>

            <div className="grid min-w-0 gap-6 pr-0 min-[769px]:grid-cols-[minmax(0,58fr)_minmax(0,15fr)_minmax(0,27fr)] min-[769px]:gap-0 min-[769px]:pr-10">
              <div>
                <h3 className="type-feature-title m-0 pr-10 min-[769px]:pr-0">
                  {selectedProjectTitle}
                </h3>
                <p className="type-body-small mt-6 max-w-xl text-[#666]">
                  {selectedProjectContent.description}
                </p>

                <a
                  href={selectedProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-text-link mt-10 inline-block border-t border-[#DDD] pt-4 underline-offset-4 hover:underline focus-visible:underline"
                >
                  {selectedProjectContent.ctaLabel}
                </a>
              </div>

              <ProjectImage src={selectedProject.image} />
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
