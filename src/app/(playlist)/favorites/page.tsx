'use server';
import { Centerblock } from '@/widgets/centerblock/index';
import { getAllFavoriteTracks } from '@/entities/tracks/api';
import { getValidToken } from '@/shared/lib/get-valid-token';
import { redirect } from 'next/navigation';

export default async function Favorites() {
  const access = await getValidToken();
  const favorites = await getAllFavoriteTracks(access);
  if (!access) {
    redirect('/');
  }
  return (
    <Centerblock
      title="Избранное"
      playlistData={{ tag: 'favorites', playlist: favorites?.data.data || [] }}
    />
  );
}
