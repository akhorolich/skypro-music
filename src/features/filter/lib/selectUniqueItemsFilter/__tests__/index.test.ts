import { selectUniqueItemsFilter } from '../index';
import { Track } from '@/shared/model';

const mockTracks: Track[] = [
  {
    _id: 1,
    name: 'Song 1',
    author: 'Artist 1, Artist 2',
    album: 'Album A',
    release_date: '2020-01-01',
    genre: ['Rock', 'Pop'],
    duration_in_seconds: 180,
    track_file: '',
  },
  {
    _id: 2,
    name: 'Song 2',
    author: 'Artist 1, Artist 3',
    album: 'Album B',
    release_date: '2021-06-15',
    genre: ['Rock', 'Jazz'],
    duration_in_seconds: 200,
    track_file: '',
  },
  {
    _id: 3,
    name: 'Song 3',
    author: 'Artist 2',
    album: 'Album A',
    release_date: '2020-12-25',
    genre: ['Pop'],
    duration_in_seconds: 190,
    track_file: '',
  },
];

describe('selectUniqueItemsFilter', () => {
  it('should return release date variants for release_date filter', () => {
    const result = selectUniqueItemsFilter(mockTracks, 'release_date');
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return unique artists sorted alphabetically', () => {
    const result = selectUniqueItemsFilter(mockTracks, 'author');
    expect(result).toEqual([
      'Artist 1, Artist 2',
      'Artist 1, Artist 3',
      'Artist 2',
    ]);
  });

  it('should return empty array for empty tracks', () => {
    const result = selectUniqueItemsFilter([], 'author');
    expect(result).toEqual([]);
  });

  it('should handle tracks with single item arrays', () => {
    const tracks: Track[] = [
      {
        _id: 1,
        name: 'Song',
        author: 'Solo Artist',
        album: 'Album',
        release_date: '2020-01-01',
        genre: ['Rock'],
        duration_in_seconds: 180,
        track_file: '',
      },
    ];
    const result = selectUniqueItemsFilter(tracks, 'genre');
    expect(result).toEqual(['Rock']);
  });

  it('should remove duplicates', () => {
    const tracks: Track[] = [
      {
        _id: 1,
        name: 'Song 1',
        author: 'Artist A',
        album: 'Album',
        release_date: '2020-01-01',
        genre: ['Rock', 'Jazz'],
        duration_in_seconds: 180,
        track_file: '',
      },
      {
        _id: 2,
        name: 'Song 2',
        author: 'Artist B',
        album: 'Album',
        release_date: '2020-01-01',
        genre: ['Rock', 'Jazz'],
        duration_in_seconds: 200,
        track_file: '',
      },
    ];
    const result = selectUniqueItemsFilter(tracks, 'genre');
    expect(result).toEqual(['Jazz', 'Rock']);
    expect(result.length).toBe(2);
  });
});
