import {apiClient} from 'api/client';
import {UserDto} from 'api/dto/User';

class UsersService {
  getAll(searchQuery: string) {
    return apiClient.get<UserDto[]>('/users', {params: {query: searchQuery}});
  }
}

export const usersService = new UsersService();
