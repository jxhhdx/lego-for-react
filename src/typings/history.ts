export interface LocationDescriptorObject<S = LocationState> {
  pathname?: Pathname | undefined;
  search?: Search | undefined;
  state?: S | undefined;
  hash?: Hash | undefined;
  key?: LocationKey | undefined;
}
export type LocationListener<S = LocationState> = (location: Location<S>, action: Action) => void;
export type UnregisterCallback = () => void;
export type Pathname = string;
export type Path = string;
export type Search = string;
export type Hash = string;
export type Href = string;
export type LocationKey = string;
export type LocationDescriptor<S = LocationState> = Path | LocationDescriptorObject<S>;
export type TransitionPromptHook<S = LocationState> = (
  location: Location<S>,
  action: Action,
) => string | false | void;;

export interface Location<S = LocationState> {
  pathname: Pathname;
  search: Search;
  state: S;
  hash: Hash;
  key?: LocationKey | undefined;
}
export type LocationState = unknown;

export type Action = 'PUSH' | 'POP' | 'REPLACE';

export interface History<HistoryLocationState = LocationState> {
  length: number;
  action: Action;
  location: Location<HistoryLocationState>;
  push(location: Path | LocationDescriptor<HistoryLocationState>, state?: HistoryLocationState): void;
  replace(location: Path | LocationDescriptor<HistoryLocationState>, state?: HistoryLocationState): void;
  go(n: number): void;
  goBack(): void;
  goForward(): void;
  block(prompt?: boolean | string | TransitionPromptHook<HistoryLocationState>): UnregisterCallback;
  listen(listener: LocationListener<HistoryLocationState>): UnregisterCallback;
  createHref(location: LocationDescriptorObject<HistoryLocationState>): Href;
}