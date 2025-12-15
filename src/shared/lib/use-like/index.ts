'use client';
import { withReAuth } from '@/entities/auth/lib/with-reauth';
import { Track } from '@/shared/model';
import { useAppDispatch, useAppSelector } from '../redux-select-dispatch';
import { useState } from 'react';
import {
  addFavoriteTrackById,
  deleteFavoriteTrackById,
} from '@/entities/tracks/api';
import { AxiosError } from 'axios';
import { trackActions } from '@/entities/tracks';

type returnTypeHook = {
  isLoading: boolean;
  errorMsg: string | null;
  toggleLike: () => void;
  isLike: boolean;
};

export const useLike = (track: Track | null): returnTypeHook => {
  const favorite = useAppSelector((state) => state.tracks?.playback.favorite);
  const access = useAppSelector((state) => state.authorization?.access);
  const refresh = useAppSelector((state) => state.authorization?.refresh);
  const dispatch = useAppDispatch();

  const isLike = favorite?.some((t: Track) => t._id === track?._id) || false;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleLike = () => {
    if (!access) {
      return setErrorMsg('Нет авторизации');
    }

    const actionApi = isLike ? deleteFavoriteTrackById : addFavoriteTrackById;
    const actionSlice = isLike
      ? trackActions.deleteLikeOnTrack
      : trackActions.setLikeOnTrack;

    setIsLoading(true);
    setErrorMsg(null);
    if (track) {
      withReAuth(
        (newToken) => actionApi(newToken || access, track._id),
        refresh || '',
        dispatch,
      )
        .then(() => {
          dispatch(actionSlice(track));
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response) {
              setErrorMsg(error.response.data.message);
            } else if (error.request) {
              setErrorMsg('Произошла ошибка. Попробуйте позже');
            } else {
              setErrorMsg('Неизвестная ошибка');
            }
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
    isLoading,
    errorMsg,
    toggleLike,
    isLike,
  };
};
