import {createAsyncThunk} from '@reduxjs/toolkit';

import {usersService} from 'api';
import {mapUserDtoToModel} from 'shared/models';

const getAll = createAsyncThunk('/users/getAll', (searchQuery: string) => {
  return usersService.getAll(searchQuery).then((res) => res.data.map(mapUserDtoToModel));
});

export const usersAsyncActions = {
  getAll,
};
