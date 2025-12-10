'use server';
import { Centerblock } from '@/widgets/centerblock/index';
import { getAllTracks } from '@/entities/tracks/api';

export default async function Favorites() {
  const tracks = await getAllTracks();
  return <Centerblock title="Избранное" playlist={tracks?.data.data} />;
}
