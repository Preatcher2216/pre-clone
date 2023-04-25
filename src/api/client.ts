import axios from 'axios';

import {registerAuthInterceptor} from './interceptors/auth';

const tokenProvider = {
  getToken() {
    return Promise.resolve('');
  },
};

export const apiClient = axios.create();
export const getApiClient = () => axios.create();

registerAuthInterceptor(apiClient, tokenProvider);
