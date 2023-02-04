import type { Model, Effect, EffectWithType, SubscriptionAPI as OldSubscriptionAPI } from 'dva';
import type { History } from '@/typings/history';
export type IObj = { [k: keyof any]: unknown };

export type Payload<T> = { payload: T } & IObj;

export type AnyAction = Effect extends (...args: infer Args) => void ? Args[0] : never;

export type NewAnyAction<T> = AnyAction & Payload<T>

export type EffectsCommandMap = Effect extends (...args: infer Args) => void ? Args[1] : never;

export type IEffect<T> = (action: NewAnyAction<T>, effects: EffectsCommandMap) => void;

export type IEffectWithType<T> = [IEffect<T>, EffectWithType[1]];

export interface EffectsMapObject<T> {
  [key: string]: IEffect<T> | IEffectWithType<T>,
}

export type CustomField = 'effects' | 'reducers' | 'subscriptions';

// export type AddObj<T> = T & IObj;

export interface SubscriptionAPI {
  history: History,
  dispatch: OldSubscriptionAPI['dispatch'],
}

export type Subscription = (api: SubscriptionAPI, done: Function) => void | Function;

export interface IDefaultDvaModal<State> extends Omit<Model, CustomField> {
  state?: Partial<State>;
  effects?: EffectsMapObject<State>;
  reducers?: {
    [key: string]: (state: State, action: NewAnyAction<State>) => State;
  };
  subscriptions?: {
    [key: string]: Subscription,
  }
};

export type DvaModal<State> = IDefaultDvaModal<State>;