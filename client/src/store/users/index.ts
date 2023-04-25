import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User} from 'shared/models';

import {usersAsyncActions} from './actions';

export type UsersStore = {
  list: User[];
  searchQuery: string;
};

const slice = createSlice({
  name: 'baseLines',
  initialState: {list: [], searchQuery: ''} as UsersStore,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(usersAsyncActions.getAll.fulfilled, (state, {payload}) => {
      state.list = payload;
    });
  },
});

export const {actions: usersActions, caseReducers: usersCaseReducers, reducer: usersReducer} = slice;
export {usersAsyncActions};
