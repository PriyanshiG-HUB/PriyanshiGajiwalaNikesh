import { useState, useMemo } from 'react'
import { SEO } from '@/components/layout/SEO'
import { AnimatedSection, SectionHeading } from '@/components/layout/AnimatedSection'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { projects } from '@/data/projects'
import { siteConfig } from '@/lib/utils'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <SEO
        title={`Projects | ${siteConfig.name}`}
        description="Explore software projects by Priyanshi Gajiwala — AI systems, web applications, and data analytics."
        path="/projects"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A collection of work spanning AI, web development, and data analytics"
          />
          <ProjectFilters active={activeCategory} onChange={setActiveCategory} />

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-secondary">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </>
  )
}
