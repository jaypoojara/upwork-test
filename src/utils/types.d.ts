declare type Color = {
  [key: string]: string;
}

declare type RootState = ReturnType<typeof store.getState>;

declare type CommonActionType = {
  type: string;
  payload: any;
}
