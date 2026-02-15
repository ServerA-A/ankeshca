import Link from "next/link";

/* ───── icon helpers (inline SVGs — zero dependencies) ───── */
const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const Briefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const FolderOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2A2 2 0 0 0 12.07 6H18a2 2 0 0 1 2 2v2" /></svg>
);
const GraduationCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
);
const Award = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
);
const Wrench = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);
const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);
const Building = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
);
const Heart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const Calendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
);
const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" x2="17" y1="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
);

/* ───── section heading ───── */
function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 p-2.5 text-blue-600 dark:text-blue-400">
          {icon}
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-[var(--muted)]">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4 h-px bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-transparent" />
    </div>
  );
}

/* ───── timeline card ───── */
function TimelineCard({
  title, subtitle, date, icon, bullets,
}: { title: string; subtitle: string; date: string; icon: React.ReactNode; bullets: string[] }) {
  return (
    <div className="group relative pl-8 pb-10 last:pb-0">
      <span className="absolute left-[7px] top-10 -bottom-0 w-px bg-gradient-to-b from-blue-400/50 to-transparent group-last:hidden" />
      <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow-sm shadow-blue-500/20 dark:bg-[var(--background)]">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      </span>
      <div className="glass-card p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">{icon}</span>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="mb-3 text-sm font-medium text-[var(--muted)]">{subtitle}</p>
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">
          <Calendar /> {date}
        </span>
        <ul className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
              <span className="mt-1 flex-shrink-0 text-blue-500"><ChevronRight /></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───── project card ───── */
function ProjectCard({ title, date, bullets, accent }: { title: string; date: string; bullets: string[]; accent: string }) {
  return (
    <div className="glass-card group overflow-hidden p-6">
      <div className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="mb-3">
        <h3 className="text-lg font-bold leading-snug">{title}</h3>
        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)]">
          <Calendar /> {date}
        </span>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
            <span className="mt-1 flex-shrink-0 text-blue-500"><ChevronRight /></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───── skill badge ───── */
function SkillBadge({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <span className="group/badge inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm font-medium transition-all hover:border-blue-300 hover:shadow-sm dark:hover:border-blue-800">
      {icon && <span className="text-blue-500">{icon}</span>}
      {label}
    </span>
  );
}

/* ───── stat pill ───── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-4">
      <span className="text-2xl font-extrabold gradient-text">{value}</span>
      <span className="text-xs font-medium text-[var(--muted)]">{label}</span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)]">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 border-b border-[var(--card-border)]/60 bg-[var(--background)]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="#about" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight">
            <span className="hidden sm:inline">Ankesh<span className="text-blue-600 dark:text-blue-400"></span></span>
          </Link>
          <div className="hidden items-center gap-1 text-sm font-medium text-[var(--muted)] md:flex">
            {["About", "Experience", "Projects", "Skills", "Education"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link rounded-lg px-3 py-2 transition-colors hover:bg-[var(--card-bg)] hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-1.5 rounded-lg border border-[var(--card-border)] px-3.5 py-2 text-sm font-medium transition-all hover:border-blue-300 hover:shadow-sm dark:hover:border-blue-800"
            >
              <Download /> CV
            </a>
            <Link
              href="https://www.linkedin.com/in/ankesh-chaubey-7b1a8b288/"
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3.5 py-2 text-sm font-medium text-white shadow-sm shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/30"
            >
              <Linkedin /> Connect
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6">

        {/* ── Hero ── */}
        <section id="about" className="relative overflow-hidden py-20 sm:py-28">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[var(--hero-gradient-1)] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-40 h-80 w-80 rounded-full bg-[var(--hero-gradient-2)] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute top-20 left-1/2 h-60 w-60 rounded-full bg-[var(--hero-gradient-3)] opacity-30 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center">
            {/* status badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Opportunities
            </div>

            <div className="animate-fade-in-up delay-100">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Ankesh <span className="gradient-text">Kumar</span>
              </h1>
              <p className="mt-3 text-lg font-semibold text-[var(--muted)] sm:text-xl">
                B.Tech Civil Engineering — LPU &apos;27
              </p>
            </div>

            <p className="animate-fade-in-up delay-200 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Aspiring civil engineer with hands-on experience in construction site supervision,
              building modeling, and surveying. Passionate about sustainable construction practices
              and infrastructure development.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)]">
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] px-3 py-1.5">
                <MapPin /> Jalandhar, Punjab
              </span>
              <Link
                href="https://www.linkedin.com/in/ankesh-chaubey-7b1a8b288/"
                target="_blank"
                className="flex items-center gap-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] px-3 py-1.5 text-blue-600 transition-colors hover:border-blue-300 dark:text-blue-400"
              >
                <Linkedin /> LinkedIn <ArrowUpRight />
              </Link>
            </div>

            {/* action buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
              >
                <Download /> Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-7 py-3 text-sm font-semibold transition-all hover:border-blue-300 hover:shadow-sm dark:hover:border-blue-800"
              >
                View Projects <ArrowUpRight />
              </a>
            </div>

            {/* stat pills */}
            <div className="animate-fade-in-up delay-500 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <StatPill value="3+" label="Projects" />
              <StatPill value="7.1" label="CGPA" />
              <StatPill value="5+" label="Certificates" />
              <StatPill value="4+" label="Software Skills" />
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-16 sm:py-20">
          <SectionHeading icon={<Briefcase />} title="Experience" subtitle="Professional internship & volunteer work" />
          <div className="ml-2 max-w-3xl">
            <TimelineCard
              title="Undergraduate Intern"
              subtitle="Rural Work Department, Works Division"
              date="Jun 2025 – Jul 2025"
              icon={<Building />}
              bullets={[
                "Assisted the supervisor in checking workmanship of brick masonry, verifying that the joints were uniform and the walls were plumb.",
                "Helped in marking the grid lines for structural elements using measuring tapes, chalk lines, and a builder's square.",
                "Handled various heavy equipments like concrete mixer, needle vibrator etc.",
              ]}
            />
            <TimelineCard
              title="Student Volunteer"
              subtitle="Brahm Seva Trust"
              date="Jun 2024 – Jul 2024"
              icon={<Heart />}
              bullets={[
                "Worked as a student volunteer in this NGO.",
                "Planted various saplings across the area.",
                "Helped in spreading awareness regarding climate change and environmental conservation among local community.",
              ]}
            />
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-16 sm:py-20">
          <SectionHeading icon={<FolderOpen />} title="Projects" subtitle="Hands-on civil engineering projects" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Coffer Dam Working Model"
              date="Jan 2025 – May 2025"
              accent="from-blue-500 to-cyan-500"
              bullets={[
                "Worked as the team leader in building a working model of Coffer Dam.",
                "A cofferdam is a temporary structure built to keep water away from a construction site.",
                "Materials like steel sheets, earth, or concrete are used to build cofferdams.",
                "Commonly used for building bridges, dams, and underwater foundations.",
              ]}
            />
            <ProjectCard
              title="Sewage Water Concrete"
              date="Mar 2025 – May 2025"
              accent="from-emerald-500 to-teal-500"
              bullets={[
                "Helps in conserving freshwater resources, especially in construction.",
                "Properly treated sewage water can still produce concrete of good strength.",
                "Eco-friendly and cost-effective alternative in modern construction.",
                "Prepared concrete mixture using sewage water instead of regular water.",
              ]}
            />
            <ProjectCard
              title="Residential Building Model"
              date="Aug 2023 – Dec 2023"
              accent="from-violet-500 to-purple-500"
              bullets={[
                "Helps to understand the layout of rooms, floors, and spaces clearly.",
                "Represents how real residential buildings look and function in daily life.",
                "Collected waste material from LPU campus to use as raw material.",
              ]}
            />
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-16 sm:py-20">
          <SectionHeading icon={<Wrench />} title="Skills" subtitle="Technical expertise & competencies" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass-card p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Software Proficiency
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["MS Office", "STAAD Pro", "AutoCAD", "Autodesk Revit"].map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  Domain Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Building Design & Modeling",
                  "Quantity Surveying & Estimation",
                  "Problem Solving",
                  "Leadership & Team Management",
                ].map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Certificates & Activities ── */}
        <section id="certificates" className="py-16 sm:py-20">
          <SectionHeading icon={<Award />} title="Certificates & Activities" subtitle="Professional development & engagement" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AutoCAD Workshop", org: "Learn Delta", date: "Apr 2024" },
              { title: "CPM Workshop", org: "Learn Delta", date: "Mar 2023" },
              { title: "Total Station Surveying", org: "Lovely Professional University", date: "Apr 2025" },
              { title: "T2 Membership", org: "Thrive Together LPU", date: "Aug 2023 – Aug 2024" },
              { title: "Quantity Surveying Course", org: "Lovely Professional University", date: "Nov 2023" },
            ].map((c) => (
              <div key={c.title} className="glass-card flex items-start gap-3.5 p-5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 dark:from-amber-950 dark:to-orange-950 dark:text-amber-400">
                  <Star />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold leading-snug">{c.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{c.org}</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--muted)]">
                    <Calendar /> {c.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-16 sm:py-20">
          <SectionHeading icon={<GraduationCap />} title="Education" subtitle="Academic background & qualifications" />
          <div className="space-y-4">
            {[
              {
                school: "Lovely Professional University",
                degree: "Bachelor of Technology — Civil Engineering",
                score: "CGPA: 7.1",
                location: "Phagwara, Punjab",
                date: "2023 – 2027",
                gradient: "from-blue-500 to-violet-500",
              },
              {
                school: "Anand Prep Public School",
                degree: "12th Standard",
                score: "67%",
                location: "Muzaffarpur, Bihar",
                date: "2021 – 2023",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                school: "Holy Mission Sr. Sec. School",
                degree: "10th Standard",
                score: "61%",
                location: "Muzaffarpur, Bihar",
                date: "2020 – 2021",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((e) => (
              <div key={e.school} className="glass-card flex flex-col gap-4 overflow-hidden p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${e.gradient} text-white shadow-sm`}>
                    <GraduationCap />
                  </span>
                  <div>
                    <h3 className="font-bold">{e.school}</h3>
                    <p className="text-sm text-[var(--muted)]">{e.degree}</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs font-medium text-[var(--muted)]">
                      <span className="inline-flex items-center gap-1"><MapPin /> {e.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar /> {e.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`inline-flex items-center self-start rounded-xl bg-gradient-to-r ${e.gradient} px-5 py-2 text-sm font-bold text-white shadow-sm sm:self-auto`}>
                  {e.score}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative overflow-hidden border-t border-[var(--card-border)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
          <Link href="#about" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">A</span>
            Ankesh Kumar
          </Link>
          <p className="text-sm text-[var(--muted)]">
            B.Tech Civil Engineering — Lovely Professional University
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/ankesh-chaubey-7b1a8b288/"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-all hover:border-blue-300 hover:text-blue-600 dark:hover:border-blue-800 dark:hover:text-blue-400"
            >
              <Linkedin />
            </Link>
          </div>
          <p className="mt-2 text-xs text-[var(--muted)] opacity-60">
            © {new Date().getFullYear()} Ankesh Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
