import defineDvaModal from '@/utils/defineDvaModal';
import { GlobalDataProps } from './index';

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const BASE_NAMESPACE = 'user';

const initState = {
  isLogin: false
};

type IState = typeof initState & UserProps;

export default defineDvaModal<GlobalDataProps, typeof BASE_NAMESPACE>({
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
    *login(_, { put }) {
      yield put({
        type: 'concat',
        payload: {
          isLogin: true,
          userName: 'viking',
        }
      })
    },
    *logout({ payload }, { put }) {
      yield put({
        type: 'concat',
        payload: {
          isLogin: payload.isLogin
        }
      })
    },
    *init(_, { put }) {
      yield put({ type: 'concat', payload: initState });
    }
  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    },
  }
})