import authorAvatar from '../assets/icon.png';

export type BlogAuthorId = 'izibook';

export interface BlogAuthor {
  id: BlogAuthorId;
  name: string;
  description: string;
  avatar: typeof authorAvatar;
}

export const blogAuthors: Record<BlogAuthorId, BlogAuthor> = {
  izibook: {
    id: 'izibook',
    name: 'Echipa IziBook',
    description:
      'Scriem despre strategii, fidelizare si digitalizare pentru saloanele de infrumusetare din Romania.',
    avatar: authorAvatar,
  },
};

export const defaultBlogAuthorId: BlogAuthorId = 'izibook';

export function getBlogAuthor(id: BlogAuthorId = defaultBlogAuthorId): BlogAuthor {
  return blogAuthors[id];
}
