
export interface RootState {
  readonly nav: NavigationState;
  readonly user: UserState;
  readonly app: AppState;
}
export interface NavigationState {
  readonly root: NavigationRoot;
}
export interface UserIdFormState {
  readonly newUserId?: string;
}
export type NavigationRoot =
  'onboarding' |
  'login' |
  'app';
export interface AppState {
  readonly currentPosition: OurPosition | null;
}
export interface OurPosition {
  readonly latitude: number;
  readonly longitude: number;
}
export interface UserState {
  readonly userName?: string;
  readonly userId?: string;
  readonly loggedInUserId: string | null;
}
