import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Portfolio
          </Link>
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Case Study
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <header className="mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            {project.type}
          </p>
          <h1 className="text-4xl font-light text-gray-900 mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm text-gray-400 mb-6">{project.date}</p>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {project.summary}
          </p>

          {/* Highlighted tags */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="highlight-rose text-sm font-medium text-stone-800 pb-0.5"
                style={{ "--highlight-delay": `${0.3 + i * 0.15}s` } as React.CSSProperties}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors"
              >
                Live Site <ArrowUpRight size={13} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm rounded-full hover:border-gray-400 transition-colors"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
            )}
            {project.privateNote && (
              <span className="text-sm text-gray-400 italic">
                {project.privateNote}
              </span>
            )}
          </div>
        </header>

        {/* Image */}
        <div className="mb-16">
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-gray-400 text-center italic">
            {project.imageCaption}
          </p>
        </div>

        {/* Tech */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Technical Implementation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.tech.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  {cat.title}
                </h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Key Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((f) => (
              <div
                key={f.title}
                className="pinned-note p-5 rounded-sm"
                style={{ transform: "rotate(0deg)" }}
              >
                <h3 className="text-sm font-semibold text-stone-800 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Development Process
          </p>
          <div className="space-y-8">
            {project.process.map((s) => (
              <div key={s.title}>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {s.body}
                </p>
                {s.highlight && (
                  <div className="border-l-2 border-gray-200 pl-4 space-y-1.5">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      {s.highlight.title}
                    </p>
                    {s.highlight.points.map((pt) => (
                      <p key={pt} className="text-sm text-gray-500 leading-relaxed">
                        {pt}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Challenges & Solutions
          </p>
          <div className="space-y-6">
            {project.challenges.map((c) => (
              <div key={c.title} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1.5 leading-relaxed">
                  <span className="text-gray-700 font-medium">Challenge: </span>
                  {c.challenge}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="text-gray-700 font-medium">Solution: </span>
                  {c.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Planned Enhancements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.future.map((item) => (
              <div key={item.title} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
          <Link
            href={`/projects/${project.prev.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={14} />
            {project.prev.title}
          </Link>
          <Link
            href={`/projects/${project.next.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {project.next.title}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
