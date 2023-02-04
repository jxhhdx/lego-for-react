import { GlobalDataProps } from './index';
import defineDvaModal from '../utils/defineDvaModal';

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const BASE_NAMESPACE = 'user';

const initState = {
  BASE_NAMESPACE,
  isLogin: false
};

type IState = typeof initState & UserProps & GlobalDataProps;

export default defineDvaModal<IState>({
  namespace: `${BASE_NAMESPACE}Modal`,
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