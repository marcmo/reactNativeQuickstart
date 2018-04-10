export enum NavigationActionType {
  ONBOARDING_COMPLETED = 'ONBOARDING_COMPLETED',
  ONBOARDING_NEEDED = 'ONBOARDING_NEEDED',
  AUTHENTICATION_CHANGED = 'AUTHENTICATION_CHANGED',
}
export interface OnboardingCompletedAction {
  type: NavigationActionType.ONBOARDING_COMPLETED;
}
export interface OnboardingNeededAction {
  type: NavigationActionType.ONBOARDING_NEEDED;
}
export interface AuthenticationChangedAction {
  type: NavigationActionType.AUTHENTICATION_CHANGED;
  payload: {
    loggedIn: boolean;
  };
}
export type NavigationAction =
  OnboardingCompletedAction |
  OnboardingNeededAction |
  AuthenticationChangedAction;

export const onboardingCompleted = (): OnboardingCompletedAction => ({
  type: NavigationActionType.ONBOARDING_COMPLETED,
});
export const onboardingNeeded = (): OnboardingNeededAction => ({
  type: NavigationActionType.ONBOARDING_NEEDED,
});
export const authenticationChanged = (loggedIn: boolean): AuthenticationChangedAction => ({
  type: NavigationActionType.AUTHENTICATION_CHANGED,
  payload: {
    loggedIn,
  },
});
