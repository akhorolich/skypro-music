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
export async function getAllFavoriteTracks(token: string) {
  try {
    const res = await axiosInstance.get('/catalog/track/favorite/all/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
    }
  }
}

export async function addFavoriteTrackById(token: string, id: number) {
  return await axiosInstance.post(`/catalog/track/${id}/favorite`, undefined, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteFavoriteTrackById(token: string, id: number) {
  return await axiosInstance.delete(`/catalog/track/${id}/favorite`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
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
