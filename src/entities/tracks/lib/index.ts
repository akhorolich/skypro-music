import { Track } from '@/shared/model';
import { getTracksCatalogById } from '@/entities/tracks/api/index';

export async function getCatalog(id: string[] | undefined, tracks: Track[]) {
  const result: { title?: string; tracks: Track[] } = {
    tracks: [],
  };
  if (!id || !tracks) return result;
  const response = await getTracksCatalogById(id[0]);
  if (response && response.data.data?.items) {
    const catalogData = response.data.data;
    const ids = new Set(catalogData.items);
    result['tracks'] = tracks.filter((track) => ids.has(track._id));
    result['title'] = catalogData.name;
  }
  return result;
}
