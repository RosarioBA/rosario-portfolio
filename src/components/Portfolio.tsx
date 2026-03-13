"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "bonita-receipt",
    title: "Bonita Receipt View",
    description: "Customer-facing receipt viewing system built for production at Bonita Cafe.",
    tech: ["Next.js", "React", "TypeScript", "UI Design"],
    type: "Client Work",
    side: "left",
    live: "https://receipts.bonitahandel.no/",
    github: "https://github.com/lacostej/bonita-receipt-view",
    caseStudy: "/projects/bonita-receipt",
  },
  {
    id: "daily-reconciliation",
    title: "Daily Reconciliation Dashboard",
    description: "Internal end-of-day accounting tool comparing POS sales with payment tenders.",
    tech: ["React", "TypeScript", "API Integration", "Data Visualization"],
    type: "Client Work",
    side: "right",
    caseStudy: "/projects/reconciliation",
    note: "Private client project",
  },
  {
    id: "numa-booking",
    title: "Numa Booking System",
    description: "Breakfast service tracking for hotel guests — staff verify rooms and check arrivals.",
    tech: ["Next.js", "TypeScript", "Full-stack"],
    type: "Client Work",
    side: "left",
    caseStudy: "/projects/numa-booking",
    note: "Private · In development",
  },
  {
    id: "holidaze",
    title: "Holidaze Booking Platform",
    description: "Accommodation booking platform with dual-role functionality for customers and managers.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    type: "Academic",
    side: "right",
    live: "https://rosarioba.github.io/holidaze-booking-app/",
    github: "https://github.com/RosarioBA/holidaze-booking-app",
    caseStudy: "/projects/holidaze",
  },
  {
    id: "bidleaf",
    title: "BidLeaf Auction Platform",
    description: "Interactive auction site where users create listings, place bids, and manage profiles.",
    tech: ["JavaScript", "Tailwind CSS", "Vite", "REST API"],
    type: "Academic",
    side: "left",
    live: "https://bidleaf.netlify.app/",
    github: "https://github.com/RosarioBA/bidleaf-sp2",
    caseStudy: "/projects/bidleaf",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "HTML5", "CSS3", "Tailwind CSS", "API Integration",
  "Responsive Design", "UI/UX", "Git", "Figma",
];

export default function Portfolio() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.item;
            if (id) setVisible((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-item]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 relative font-sans transition-colors duration-300">
      {/* Central line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 dark:bg-zinc-800 -translate-x-1/2" />

      {/* Fixed email on the right */}
      <a
        href="mailto:rosarioazevedob@gmail.com"
        className="fixed right-8 bottom-1/4 z-10 text-[10px] font-medium tracking-[3px] text-rose-400 hover:text-rose-300 transition-colors hidden lg:flex items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
      >
        rosarioazevedob@gmail.com
        <span className="w-px h-10 bg-rose-300 inline-block" />
      </a>

      {/* Hero */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-6">
          Frontend Developer
        </p>
        <h1 className="slam-top text-5xl sm:text-6xl font-light text-gray-900 dark:text-zinc-100 mb-5 tracking-tight">
          Hi, I&apos;m <span className="highlight-green">Rosario</span>
        </h1>
        <p className="slam-bottom text-base text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md mb-8">
          Building real-world solutions for restaurants and businesses — with a background in design and digital marketing.
        </p>
        <a
          href="mailto:rosarioazevedob@gmail.com"
          className="text-sm text-rose-400 hover:text-rose-500 transition-colors mb-16 tracking-wide"
        >
          rosarioazevedob@gmail.com
        </a>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-300 dark:text-zinc-700">Scroll to explore</p>
          <div className="w-px h-10 bg-gray-300 dark:bg-zinc-700 animate-bounce" />
        </div>
      </div>

      {/* Projects */}
      <div className="relative py-20 bg-white dark:bg-zinc-950">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 -translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-8">
          {projects.map((project, index) => {
            const isVisible = visible.has(project.id);
            const isLeft = project.side === "left";
            const rotations = ["-2deg", "1.5deg", "-1.2deg", "2deg", "-1.5deg"];
            const rotation = rotations[index % rotations.length];

            return (
              <div key={project.id} data-item={project.id} className="relative mb-10">
                <div className={isLeft ? "md:pr-[52%]" : "md:pl-[52%]"}>
                  <div
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${isLeft ? "-translate-x-16" : "translate-x-16"}`
                    }`}
                    style={{ transitionDelay: "150ms" }}
                  >
                    <div
                      className="pinned-note p-6 rounded-sm relative group"
                      style={{ transform: `rotate(${rotation})` }}
                    >
                      {/* Connector — desktop only */}
                      <div
                        className={`hidden md:block absolute top-8 ${isLeft ? "-right-6" : "-left-6"} w-6 h-px bg-gray-200 dark:bg-zinc-700`}
                      />

                      <div className="text-[10px] uppercase tracking-widest text-amber-800/60 dark:text-amber-500/60 mb-2 font-medium">
                        {project.type}
                      </div>
                      <h3 className="text-lg font-semibold text-stone-800 dark:text-zinc-100 mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-sm text-stone-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-0.5 bg-amber-100/80 dark:bg-zinc-800 rounded-sm text-stone-600 dark:text-zinc-300 border border-amber-200/60 dark:border-zinc-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        {project.caseStudy && (
                          <a
                            href={project.caseStudy}
                            className="inline-flex items-center gap-1 text-xs font-medium text-stone-800 dark:text-zinc-200 hover:underline underline-offset-2"
                          >
                            Case study <ArrowUpRight size={12} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-zinc-500 hover:text-stone-800 dark:hover:text-zinc-200 transition-colors"
                          >
                            Live <ArrowUpRight size={12} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-zinc-500 hover:text-stone-800 dark:hover:text-zinc-200 transition-colors"
                          >
                            GitHub <ArrowUpRight size={12} />
                          </a>
                        )}
                        {project.note && (
                          <span className="text-xs text-stone-400 dark:text-zinc-600 italic">{project.note}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* About */}
      <div className="relative pb-32 max-w-4xl mx-auto px-8">
        <div
          data-item="about"
          className={`bg-white dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-zinc-800 transition-all duration-700 ${
            visible.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-6">About Me</h2>
          <div className="space-y-4 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-8">
            <p>
              I&apos;m Rosario Bustillo de Azevedo, a frontend developer currently studying at Noroff School of Technology in Oslo, Norway.
              My background spans fashion design, digital marketing, and restaurant operations, giving me a unique perspective on building user-centered applications.
            </p>
            <p>
              Currently, I work as Kitchen Manager and Web Developer at Bonita Cafe/De La Casa, where I develop internal tools and customer-facing applications
              that solve real business problems. This hands-on experience has taught me to build solutions that are both technically sound and genuinely useful for end users.
            </p>
          </div>

          <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-600 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-zinc-800/50 p-5 rounded-lg border-l-4 border-gray-200 dark:border-zinc-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-2">Let&apos;s Connect</h4>
            <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed mb-3">
              I&apos;m actively seeking junior developer positions in Norwegian tech companies. If you&apos;re looking for someone who combines
              technical skills with real-world business experience, let&apos;s talk.
            </p>
            <a
              href="mailto:rosarioazevedob@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-zinc-100 hover:gap-2.5 transition-all"
            >
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Drawing */}
      <div
        data-item="drawing"
        className={`flex justify-center mb-16 transition-all duration-1000 ${
          visible.has("drawing") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <Image
            src="/images/rosario-drawing.jpg"
            alt="Drawing of Rosario"
            width={220}
            height={220}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            style={{
              filter: visible.has("drawing") ? undefined : "blur(4px)",
              transition: "filter 1s ease, grayscale 0.7s ease",
            }}
          />
          {/* Soft glow ring */}
          <div className="absolute inset-0 rounded-full ring-1 ring-rose-200 dark:ring-rose-900 animate-pulse" />
        </div>
      </div>

      {/* Footer */}
      <div
        data-item="footer"
        className={`max-w-4xl mx-auto px-8 pb-20 text-center transition-all duration-700 ${
          visible.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">Thanks for Visiting</h3>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
          Interested in collaborating? I&apos;d love to hear from you.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          <a
            href="https://github.com/RosarioBA"
            target="_blank"
            rel="noopener"
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-zinc-500 hover:border-gray-900 dark:hover:border-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:scale-110 transition-all"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/rosario-bustillo-119b8135a/"
            target="_blank"
            rel="noopener"
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-zinc-500 hover:border-gray-900 dark:hover:border-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:scale-110 transition-all"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="mailto:rosarioazevedob@gmail.com"
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-zinc-500 hover:border-gray-900 dark:hover:border-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:scale-110 transition-all"
          >
            <Mail size={17} />
          </a>
        </div>

        <a
          href="mailto:rosarioazevedob@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm rounded-full hover:bg-gray-700 dark:hover:bg-zinc-300 hover:scale-105 transition-all"
        >
          Send Me a Message <ArrowUpRight size={15} />
        </a>

        <p className="mt-12 text-xs text-gray-400 dark:text-zinc-600">© 2026 Rosario Bustillo de Azevedo</p>
      </div>
    </div>
  );
}
