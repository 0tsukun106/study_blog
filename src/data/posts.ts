export type Post = {
  id: number;
  title: string;
  file: string;
  date: string; // "2026-03"
  day: number;
  category: string;
};

export const posts: Post[] = [
  {
    id: 3,
    title: "発達心理学の基礎",
    file: "post3.md",
    date: "2026-03",
    day: 28,
    category: "心理学",
  },
  {
    id: 2,
    title: "人の気持ちは結局わからない？ 構成主義的情動理論とは",
    file: "post2.md",
    date: "2026-03",
    day: 27,
    category: "心理学",
  },
  {
    id: 1,
    title: "量子力学入門 不確定性関係って何？？",
    file: "post1.md",
    date: "2026-03",
    day: 26,
    category: "工学部",
  },
];
