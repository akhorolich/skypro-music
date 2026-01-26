'use server';
import { Centerblock } from '@/widgets/centerblock';
import { getCatalog } from '@/entities/tracks/lib';
import { getAllTracks } from '@/entities/tracks/api';

export default async function CatalogPlaylist({
  params,
}: {
  params: Promise<{ id?: string[] }>;
}) {
  const { id } = await params;
  const tracks = await getAllTracks();
  const catalog = await getCatalog(id, tracks?.data.data);
  return (
    <Centerblock
      title={catalog.title ? catalog.title : 'Треки'}
      playlistData={{
        tag: 'common',
        playlist: id ? catalog.tracks : tracks?.data.data || [],
      }}
    />
  );
}
