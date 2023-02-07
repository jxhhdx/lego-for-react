import type { Model, Effect, EffectWithType, SubscriptionAPI as OldSubscriptionAPI } from 'dva';
import type { History } from '@/typings/history';
export type IObj = { [k: keyof any]: unknown };

export type Payload<T> = { payload: T } & IObj;

export type AnyAction = Effect extends (...args: infer Args) => void ? Args[0] : never;

export type NewAnyAction = AnyAction & Payload<any>;


// export type EffectsCommandMap = Effect extends (...args: infer Args) => void ? Args[1] : never;
export interface EffectsCommandMap<T> {
  put: <A extends NewAnyAction>(action: A) => any,
  call: Function,
  select: <A = any>(select: (state: T) => any) => A,
  take: Function,
  cancel: Function,
  [key: string]: any,
}

export type IEffect<T> = (action: NewAnyAction, effects: EffectsCommandMap<T>) => void;

export type IEffectWithType<T> = [IEffect<T>, EffectWithType[1]];

export interface EffectsMapObject<T> {
  [key: string]: IEffect<T> | IEffectWithType<T>,
}

export type CustomField = 'effects' | 'reducers' | 'subscriptions';

export interface SubscriptionAPI {
  history: History,
  dispatch: OldSubscriptionAPI['dispatch'],
}

export type Subscription = (api: SubscriptionAPI, done: Function) => void | Function;

export interface IDefaultDvaModal<G, F extends keyof G> extends Omit<Model, CustomField> {
  state?: Partial<G[F]>;
  effects?: EffectsMapObject<G>;
  reducers?: {
    [key: string]: <T>(state: T, action: NewAnyAction) => T;
  };
  subscriptions?: {
    [key: string]: Subscription,
  }
};

export type DvaModal<G, F extends keyof G> = IDefaultDvaModal<G, F>;