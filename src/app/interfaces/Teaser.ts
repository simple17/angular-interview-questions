export interface Teaser {
  title: string;
  date: Date;
  link: string;
  label: 'blog' | 'news';
  labelBg: 'green' | 'yellow' | 'red';
  backgroundImage: string;
}
