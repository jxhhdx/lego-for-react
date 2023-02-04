export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}
export interface UserProps {
  isLogin: boolean;
  userName?: string;
}