import { MockData } from '@/shared/model';
import { ICircleLinkedList } from '../../types';

export const initQueue = (list: ICircleLinkedList, tracks: MockData[]) => {
  if (!list.isEmpty()) return;
  tracks.forEach((track) => list.pushBack(track));
  //   list.print();
  //   list.printBack();
};

export const switchTrack = (
  list: ICircleLinkedList,
  currentTrackId: number,
  action: 'next' | 'prev',
) => {
  const node = list.findNodeById(currentTrackId);
  return !list.isEmpty() && node && node[action] ? node[action].data : null;
};

export const shuffleTracks = (
  list: ICircleLinkedList,
  tracks: MockData[],
  currentTrack?: MockData,
) => {
  if (tracks.length === 0) return;
  if (!list.isEmpty()) list.clearList(list);
  if (currentTrack) list.pushFront(currentTrack);
  const shallow = currentTrack
    ? tracks.filter((track) => track._id !== currentTrack._id)
    : tracks.slice();
  for (let i = shallow.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shallow[i], shallow[j]] = [shallow[j], shallow[i]];
  }
  shallow.forEach((track) => list.pushBack(track));
  //   list.print();
};

export const getFirstInQueue = (list: ICircleLinkedList) => {
  if (list.isEmpty()) return null;
  const node = list.barrier.next;
  return node && node.data ? node.data : list.barrier.data;
};
