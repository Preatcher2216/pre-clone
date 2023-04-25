import {UserDto} from 'api/dto/User';

/* Данная обстракция необходима только если серверная модель DTO нас неудовлетворяет
 и необходимо ввести клиенткую модель
 */

export interface User extends UserDto {
  clientField: string;
}

export function mapUserToDto(user: User): UserDto {
  const {clientField, ...fields} = user;
  return fields;
}
export function mapUserDtoToModel(user: UserDto): User {
  return {...user, clientField: ''};
}
