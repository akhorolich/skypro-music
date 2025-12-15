import { axiosInstance } from '@/shared/api/axios-config';
import { CreateUserDTO, SignInDTO } from './types/dto';
/* 
Зарегистрироваться 	POST - /user/signup/
Войти 	POST - /user/login/
Получить ключ 	POST - /user/token/
Обновить ключ 	POST - /user/token/refresh/
*/
export async function register(body: CreateUserDTO) {
  try {
    const res = await axiosInstance.post('/user/signup/', body);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function login(body: SignInDTO) {
  try {
    const res = await axiosInstance.post('/user/login/', body);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function jwt(body: SignInDTO) {
  try {
    const res = await axiosInstance.post('/user/token/', body);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function refreshJwt(body: { refresh: string }) {
  try {
    const res = await axiosInstance.post('/user/token/', body);
    return res.data;
  } catch (error) {
    throw error;
  }
}
