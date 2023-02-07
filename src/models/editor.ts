import { GlobalDataProps } from './index';
import defineDvaModal from '@/utils/defineDvaModal';
import { TextComponentProps } from '@/defaultProps';
import { v4 as uuidv4 } from 'uuid';
export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素，uuid
  currentElement: string;
  // 当然最后保存的时候还有有一些项目信息，这里并没有写出，等做到的时候再补充
}
export interface ComponentData {
  // 这个元素的 属性，属性请详见下面
  props: Partial<TextComponentProps>;
  // id，uuid v4 生成
  id: string;
  // 业务组件库名称 l-text，l-image 等等 
  name: string;
}
export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', color: '#000000', 'lineHeight': '1', textAlign: 'left', fontFamily: '' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px', fontWeight: 'bold', 'lineHeight': '2', textAlign: 'left', fontFamily: '' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px', actionType: 'url', url: 'https://www.baidu.com', 'lineHeight': '3', textAlign: 'left', fontFamily: '' } }
];
const BASE_NAMESPACE = 'editor';
const initState = {
  components: testComponents,
  currentElement: '',
}

export default defineDvaModal<GlobalDataProps, 'editor'>({
  namespace: BASE_NAMESPACE,
  state: initState,
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((param) => {
        dispatch({
          type: 'init',
        });
      });
    }
  },
  effects: {
    *init(_, { put }) {
      yield put({ type: 'concat', payload: initState });
    },
    *addComponent({ payload }, { put, select }) {
      const editor: GlobalDataProps['editor'] = yield select((state) => state.editor);
      console.log('====================================');
      console.log(editor);
      console.log('====================================');
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        ...payload
      }
      yield put({
        type: 'concat',
        payload: {
          components: [newComponent]
        }
      })
    },
    *setActive({ payload }, { put, select }) {
      // state.currentElement = currentId
    },
    *updateComponent({ payload }, { key, value }) {
      // const updatedComponent = state.components.find((component) => component.id === state.currentElement)
      // if (updatedComponent) {
      //   updatedComponent.props[key as keyof TextComponentProps] = value
      // }
    }
  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    },
  }
});
