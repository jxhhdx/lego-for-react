import type { DvaModal } from '@/typings/dva-types';

export default function defineDvaModal<State>(options: DvaModal<State>): DvaModal<State> {
  return options;
}