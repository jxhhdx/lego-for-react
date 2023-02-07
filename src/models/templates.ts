import { GlobalDataProps } from './index';
import defineDvaModal from '../utils/defineDvaModal';
export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  { id: 1, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 },
  { id: 2, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 },
  { id: 3, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 },
  { id: 4, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 },
  { id: 5, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 },
  { id: 6, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'viking', copiedCount: 1 }
]

export interface TemplatesProps {
  data: TemplateProps[];
}

const BASE_NAMESPACE = 'templates';

const initState = {
  BASE_NAMESPACE,
  data: testData
};

type IState = typeof initState & TemplatesProps & GlobalDataProps;
export default defineDvaModal<IState>({
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
    }
  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    },
  }
});
