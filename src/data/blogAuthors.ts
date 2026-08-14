import authorAvatar from '../assets/authors/emilian-oancea.webp';

export type BlogAuthorId = 'emilian';

export interface BlogAuthor {
  id: BlogAuthorId;
  name: string;
  jobTitle: string;
  description: string;
  avatar: typeof authorAvatar;
  /** Accessible + SEO alt text for the author photo. */
  avatarAlt: string;
  /** Tooltip / title attribute for the author photo. */
  avatarTitle: string;
}

const blogAuthors: Record<BlogAuthorId, BlogAuthor> = {
  emilian: {
    id: 'emilian',
    name: 'Emilian Oancea',
    jobTitle: 'Founder IziBook',
    description:
      'Founder IziBook. Scriu despre strategii, fidelizare si digitalizare pentru saloanele de infrumusetare din Romania.',
    avatar: authorAvatar,
    avatarAlt:
      'Emilian Oancea, Founder IziBook — portret profesional',
    avatarTitle: 'Emilian Oancea, Founder IziBook',
  },
};

const defaultBlogAuthorId: BlogAuthorId = 'emilian';

export function getBlogAuthor(id: BlogAuthorId = defaultBlogAuthorId): BlogAuthor {
  return blogAuthors[id];
}
