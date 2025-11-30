/* 
Получить все треки 	GET - /catalog/track/all/
Получить трек по id 	GET - /catalog/track/<id>/
Просмотреть избранное * 	GET - /catalog/track/favorite/all/
Добавить трек в избранное по id * 	POST - /catalog/track/<id>/favorite/
Удалить трек из избранного по id * 	DELETE - /catalog/track/<id>/favorite/
Создать подборкy * 	POST - /catalog/selection
Просмотреть подборки 	GET - /catalog/selection/all
Просмотреть подборку по id 	GET - /catalog/selection/<id>/
*/

import { axiosInstance } from '@/shared/api/axios-config';
import { AxiosError } from 'axios';

export async function getAllTracks() {
  try {
    const res = await axiosInstance.get('/catalog/track/all');
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
}
export function getTrackById() {}
export function getAllFavoriteTracks() {}
export function addFavoriteTrackById() {}
export function deleteFavoriteTrackById() {}
export function getAllTrackCatalogs() {}
export async function getTracksCatalogById(id: string) {
  try {
    const res = await axiosInstance.get(`/catalog/selection/${id}/`);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
}
