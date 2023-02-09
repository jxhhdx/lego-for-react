import { TextComponentProps } from '@/defaultProps';

export interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | JSX.Element; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}

export type PropsTableProps = {
  props: Partial<TextComponentProps>
  onChange: (param: { key: string; value: any }) => void
};