import {Axios} from 'axios';

export interface TokenProvider {
  getToken(): Promise<string>;
}

export function registerAuthInterceptor(api: Axios, tokenProvider: TokenProvider) {
  api.interceptors.request.use(async (req) => {
    const token = await tokenProvider.getToken();
    if (!!token && req.headers && !req.headers?.Authorization) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });
}
