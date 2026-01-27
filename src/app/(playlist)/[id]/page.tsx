'use server';
import { Centerblock } from '@/widgets/centerblock';
import { getCatalog } from '@/entities/tracks/lib';
import { getAllTracks } from '@/entities/tracks/api';

export default async function CatalogPlaylist({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const tracks = await getAllTracks();
  const catalogData = await getCatalog(id, tracks?.data.data || []);

  return (
    <Centerblock
      title={catalogData.title || 'Тут должно было быть название каталога'}
      playlistData={{
        tag: 'common',
        playlist: catalogData.tracks,
      }}
    />
  );
}
