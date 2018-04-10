export enum AppActionType {
  LOCATION_UPDATE = 'LOCATION_UPDATE',
  LOCATION_DROP = 'LOCATION_DROP',
}
export interface LocationUpdateAction {
  type: AppActionType.LOCATION_UPDATE;
  payload: {
    latitude: number;
    longitude: number;
  };
}
export interface LocationDropAction {
  type: AppActionType.LOCATION_DROP;
}
export type AppAction =
  LocationUpdateAction |
  LocationDropAction;

export const locationDrop = (): LocationDropAction => ({
  type: AppActionType.LOCATION_DROP,
});
export const locationUpdate = (latitude: number, longitude: number): LocationUpdateAction => ({
  type: AppActionType.LOCATION_UPDATE,
  payload: {
    latitude,
    longitude,
  },
});
