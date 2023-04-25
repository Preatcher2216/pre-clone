import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import logger from 'redux-logger';

import {usersReducer} from './users';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    if (process.env.NODE_ENV === 'production') {
      return middleware;
    }
    return middleware.concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type RootThunk<R = unknown> = ThunkAction<R, RootState, unknown, Action>;

export function useRootDispatch() {
  return useDispatch<RootDispatch>();
}
export const useRootSelector: TypedUseSelectorHook<RootState> = (...args) => {
  return useSelector(...args);
};
export default store;
