import { atom } from 'nanostores';
import { CommentType } from '../components/comment/comment';

export const comments = atom<CommentType[]>([
  {
    id: 1,
    username: 'Seyed',
    like_count: 12,
    content: 'I have no idea whats happening here',
    replies: [],
    trophies: [
      {
        type: 1,
        count: 5,
      },
      {
        type: 5,
        count: 3,
      },
    ],
    referred_to: null,
    created_at: 'Feb 1, 1966',
  },
]);

export function addComment(comment: CommentType) {
  comments.set([...comments.get(), comment]);
}
