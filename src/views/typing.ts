import type { GlobalDataProps } from '@/models';
import type { SubscriptionAPI } from '@/typings/dva-types';

export type BaseProps = GlobalDataProps & SubscriptionAPI;
export const mapStateToProps = (state: GlobalDataProps) => state;