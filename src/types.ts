export interface ResumeBasics {
  name: string;
  label: string;
  summary: string;
  email: string;
  phone: string;
  website: string;
  location: { address: string };
  profiles: { network: string; username: string; url: string }[];
}

export interface ResumeWork {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  location: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}

export interface ResumeSkill {
  name: string;
  keywords: string[];
}

export interface ResumeProject {
  name: string;
  description: string;
  url?: string;
  github?: string;
  highlights: string[];
  keywords: string[];
}

export interface ResumeAward {
  date: string;
  awarder: string;
  title: string;
  highlights: string[];
}

/* ---------------- Portfolio template config ---------------- */

export interface SiteMeta {
  /** Browser tab title. */
  title: string;
  /** SEO meta description. */
  description: string;
  /** Mobile browser theme color (e.g. "#070711"). */
  themeColor: string;
  /** Favicon path — local ("/photo.jpeg") or remote ("https://..."). */
  favicon: string;
  /** Optional Google Fonts (or any) stylesheet href. */
  fontsHref?: string;
}

export interface AssetPaths {
  /** Profile photo — local ("/photo.jpeg") or remote ("https://..."). */
  photo: string;
  /** Resume PDF — local or remote URL, plus desired download filename. */
  resume: {
    src: string;
    filename: string;
  };
}

export interface NavbarConfig {
  /** Short brand text shown next to the "~/" prefix. */
  brand: string;
  cta: { label: string; href: string };
  links: { href: string; label: string }[];
}

export interface LoaderConfig {
  subtitle: string;
  durationMs: number;
}

export interface HeroBadge {
  topLabel: string;
  /** Tailwind text color class suffix, e.g. "emerald-400", "cyan-400". */
  topColor: string;
  bottomLabel: string;
}

export interface HeroConfig {
  greeting: string;
  /** Lines rendered after the highlighted first name. */
  taglineLines: string[];
  /** Rotating SVG ring text on the avatar. */
  ringText: string;
  badges: HeroBadge[];
  ctas: {
    primary: { label: string; href: string };
    secondaryEmailLabel: string;
    resumeLabel: string;
  };
}

export interface AboutConfig {
  eyebrow: string;
  title: string;
  description: string;
  /**
   * Paragraphs of intro copy. Supports inline accent tokens:
   *   [n:text] → name accent (white, medium)
   *   [c:text] → cyan accent
   *   [p:text] → pink accent
   * Use the {name} placeholder to inject basics.name.
   */
  intro: string[];
  stats: { label: string; value: string }[];
  currentlyCard: { eyebrow: string; title: string; subtitle: string };
  focusCard: { eyebrow: string; items: string[] };
}

export interface SectionMeta {
  eyebrow: string;
  heading: string;
  description?: string;
}

export interface ContactSectionConfig {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  linkedinLabel: string;
  githubLabel: string;
  rows: { emailLabel: string; phoneLabel: string; locationLabel: string };
}

export interface FooterConfig {
  /** Text shown after the year + name. e.g. "Crafted with ❤️". */
  suffix: string;
}

export interface PortfolioConfig {
  site: SiteMeta;
  assets: AssetPaths;
  navbar: NavbarConfig;
  loader: LoaderConfig;
  hero: HeroConfig;
  about: AboutConfig;
  sections: {
    experience: SectionMeta;
    skills: SectionMeta;
    projects: SectionMeta;
    education: SectionMeta;
    awards: SectionMeta;
    contact: ContactSectionConfig;
  };
  footer: FooterConfig;
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  projects: ResumeProject[];
  awards: ResumeAward[];
}
