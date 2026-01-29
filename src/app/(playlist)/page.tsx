'use server';
import { Centerblock } from '@/widgets/centerblock';
import { getAllTracks } from '@/entities/tracks/api';

export default async function Playlist() {
  const tracks = await getAllTracks();
  return (
    <Centerblock
      title={'Треки'}
      playlistData={{
        tag: 'common',
        playlist: tracks?.data.data || [],
      }}
    />
  );
}
