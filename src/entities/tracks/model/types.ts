import { Track } from '@/shared/model';

export interface trackSlice {
  tracks: Array<Track>;
  playback: ActivePlayback;
  controls: Controls;
}

export interface ActivePlayback {
  isPlaying: boolean;
  currentTrack: Track | null;
  currentPlaylist: Track[];
  duration: number;
}

export interface Controls {
  volume: number;
  shuffleOn: boolean;
  repeatOn: boolean;
  muted: boolean;
}

export interface ICircleLinkedList {
  barrier: ListNodeElement;
  length: number;

  isEmpty(): boolean;

  insertNode(
    listElement: ListNodeElement,
    insertingNode: ListNodeElement,
  ): void;
  insertBefore(
    listElement: ListNodeElement,
    insertingNode: ListNodeElement,
  ): void;
  removeNode(listElement: ListNodeElement): void;
  clearList(list: ICircleLinkedList): void;
  shuffleNodes(list: ICircleLinkedList): void;

  pushFront(data: Track): ListNodeElement;
  pushBack(data: Track): ListNodeElement;
  toArray(list: ICircleLinkedList): ListNodeElement[];
  findNodeById(id: number): ListNodeElement | null;
  deleteNode(listElement: ListNodeElement): Track | null;

  print(): void;
  printBack(): void;
}

export interface ListNodeElement {
  data: Track | null;
  next: ListNodeElement | null;
  prev: ListNodeElement | null;
}
