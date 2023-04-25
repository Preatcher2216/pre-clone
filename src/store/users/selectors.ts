import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'store';

const selectUsers = createSelector(
  (state: RootState) => state.users.list,
  (state: RootState) => state.users.searchQuery,
  (users, query) => {
    return users.filter((user) => user.fullName.includes(query));
  },
);

export const usersSelectors = {
  selectUsers,
};
