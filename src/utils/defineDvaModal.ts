import type { Model, Effect, EffectWithType, SubscriptionAPI as OldSubscriptionAPI } from 'dva';
import type { History } from '@/types/history'
type IObj = { [k: keyof any]: unknown };

type Payload<T> = { payload: T } & IObj;

type AnyAction = Effect extends (...args: infer Args) => void ? Args[0] : never;

type NewAnyAction<T> = AnyAction & Payload<T>

type EffectsCommandMap = Effect extends (...args: infer Args) => void ? Args[1] : never;

type IEffect<T> = (action: NewAnyAction<T>, effects: EffectsCommandMap) => void;

type IEffectWithType<T> = [IEffect<T>, EffectWithType[1]];

interface EffectsMapObject<T> {
  [key: string]: IEffect<T> | IEffectWithType<T>,
}

type CustomField = 'effects' | 'reducers' | 'subscriptions';

// type AddObj<T> = T & IObj;

interface SubscriptionAPI {
  history: History,
  dispatch: OldSubscriptionAPI['dispatch'],
}

type Subscription = (api: SubscriptionAPI, done: Function) => void | Function;

interface IDefaultDvaModal<State> extends Omit<Model, CustomField> {
  state?: State;
  effects?: EffectsMapObject<State>;
  reducers?: {
    [key: string]: (state: State, action: NewAnyAction<State>) => State;
  };
  subscriptions?: {
    [key: string]: Subscription,
  }
};

export type DvaModal<State> = IDefaultDvaModal<State>;

export default function defineDvaModal<State>(options: DvaModal<State>): DvaModal<State> {
  return options;
}