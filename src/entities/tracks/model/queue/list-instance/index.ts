import { ICircleLinkedList, ListNodeElement } from '../../types';
import { MockData } from '@/shared/model';

class NodeElement implements ListNodeElement {
  data: MockData | null;
  next: ListNodeElement | null;
  prev: ListNodeElement | null;
  constructor(data: MockData | null) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircleLinkedList implements ICircleLinkedList {
  barrier: ListNodeElement;
  length: number;
  constructor() {
    this.barrier = new NodeElement(null);
    this.barrier.next = this.barrier;
    this.barrier.prev = this.barrier;
    this.length = 0;
  }

  isEmpty(): boolean {
    return (
      this.barrier.next === this.barrier && this.barrier.prev === this.barrier
    );
  }

  insertNode(listElement: NodeElement, insertingNode: ListNodeElement): void {
    const nextListEl = listElement.next;
    insertingNode.prev = listElement;
    insertingNode.next = nextListEl;
    listElement.next = insertingNode;
    nextListEl!.prev = insertingNode;
    this.length++;
  }

  insertBefore(listElement: NodeElement, insertingNode: ListNodeElement): void {
    const prev = listElement.prev;
    if (!prev) return;
    this.insertNode(prev, insertingNode);
  }

  pushFront(data: MockData) {
    const node = new NodeElement(data);
    this.insertNode(this.barrier, node);
    return node;
  }

  pushBack(data: MockData) {
    const node = new NodeElement(data);
    this.insertBefore(this.barrier, node);
    return node;
  }

  removeNode(listElement: NodeElement): void {
    const node = listElement;
    if (node === this.barrier) return;
    const nextRef = node.next;
    const prevRef = node.prev;
    prevRef!.next = nextRef;
    nextRef!.prev = prevRef;
    this.length--;
  }

  deleteNode(listElement: NodeElement) {
    const data = listElement.data;
    this.removeNode(listElement);
    return data;
  }

  clearList(list: ICircleLinkedList) {
    let node = list.barrier.next;
    while (node && node !== list.barrier) {
      const nextRef = node.next;
      this.removeNode(node);
      node = nextRef;
    }
  }

  findNodeById(id: number) {
    let node = this.barrier.next;
    while (node && node.data && node !== this.barrier) {
      if (node.data._id === id) break;
      node = node.next;
    }
    return node;
  }

  toArray(): ListNodeElement[] {
    const result: ListNodeElement[] = [];
    let node = this.barrier.next;
    for (let i = 0; i < this.length; i++) {
      if (node && node !== this.barrier) {
        result.push(node);
        node = node.next;
      }
    }
    return result;
  }

  shuffleNodes(list: ICircleLinkedList) {
    const shuffledNodes = this.toArray();
    this.clearList(list);
    for (let i = shuffledNodes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledNodes[i], shuffledNodes[j]] = [
        shuffledNodes[j],
        shuffledNodes[i],
      ];
    }
    shuffledNodes.forEach((el) => this.insertBefore(list.barrier, el));
  }

  print(): void {
    let node = this.barrier;
    const result: (MockData | null)[] = [];
    for (let i = 0; i < this.length; i++) {
      if (node.next === null || node.next === this.barrier) return;
      result.push(node.next.data);
      node = node.next;
    }
    console.log('Print: ', result);
  }

  printBack(): void {
    let node = this.barrier;
    const result: (MockData | null)[] = [];
    for (let i = 0; i < this.length; i++) {
      if (node.prev === null || node.prev === this.barrier) return;
      result.push(node.prev.data);
      node = node.prev;
    }
    console.log('Print Back: ', result);
  }
}

export const queueList = new CircleLinkedList();
export const shuffleQueue = new CircleLinkedList();
