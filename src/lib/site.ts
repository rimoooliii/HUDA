export const SITE = {
  name: 'HUDA',
  author: 'RIMO',
  title: 'HUDA — Essays and notes by RIMO',
  description:
    'A personal blog by RIMO about history, literature, philosophy, cinema, music, law, and social life.',
  github: 'https://github.com/rimoooliii',
  repository: 'https://github.com/rimoooliii/HUDA',
  giscus: {
    repository: 'rimoooliii/HUDA',
    repositoryId: 'R_kgDOTnDf2g',
    category: 'Announcements',
    categoryId: 'DIC_kwDOTnDf2s4DCPmm',
  },
  mottoGreek: 'ΜΝΗΜΗ · ΛΟΓΟΣ · ΠΟΙΗΣΙΣ',
  mottoEnglish: 'Memory · Reason · Making',
} as const;

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, '')}`.replace(/\/{2,}/g, '/');
}

export function writingSlug(entry: string | { id: string }) {
  const id = typeof entry === 'string' ? entry : entry.id;
  return id.replace(/\.(md|mdx)$/i, '').replace(/\/index$/i, '');
}

export function formatDate(date: Date, language = 'en') {
  return new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingMinutes(body = '') {
  const words = body
    .replace(/---[\s\S]*?---/, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
