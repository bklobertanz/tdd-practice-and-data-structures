export class Node {
  value: any
  next: Node | null
  constructor(value?: any) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  head: Node
  tail: Node
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.tail.next = null
    this.head.next = this.tail
  }
}

export default LinkedList
