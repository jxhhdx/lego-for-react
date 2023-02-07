import type { DvaModal } from '@/typings/dva-types';

export default function defineDvaModal<G, F extends keyof G>(options: DvaModal<G, F>): DvaModal<G, F> {
  return options;
}