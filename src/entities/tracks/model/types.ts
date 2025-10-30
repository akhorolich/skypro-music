import { MockData } from '@/shared/model';

export interface trackSlice {
  tracks: Array<MockData>;
  playback: ActivePlayback;
  controls: Controls;
  // queue: QueueTracks;
}

export interface ActivePlayback {
  isPlaying: boolean;
  currentTrack: MockData | null;
  currentPlaylist: MockData[];
  duration: number;
}

export interface Controls {
  volume: number;
  shuffleOn: boolean;
  repeatOn: boolean;
  muted: boolean;
}

// export interface QueueTracks {
//   originalQueue: number[];
//   shuffledQueue: number[];
// }

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

  pushFront(data: MockData): ListNodeElement;
  pushBack(data: MockData): ListNodeElement;
  toArray(list: ICircleLinkedList): ListNodeElement[];
  findNodeById(id: number): ListNodeElement | null;
  deleteNode(listElement: ListNodeElement): MockData | null;

  print(): void;
  printBack(): void;
}

export interface ListNodeElement {
  data: MockData | null;
  next: ListNodeElement | null;
  prev: ListNodeElement | null;
}
