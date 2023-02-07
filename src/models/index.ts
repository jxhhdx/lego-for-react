import templates, { TemplatesProps } from './templates';
import user, { UserProps } from './user';
import editor, { EditorProps } from './editor';

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorProps;
}

export default [templates, user, editor];

