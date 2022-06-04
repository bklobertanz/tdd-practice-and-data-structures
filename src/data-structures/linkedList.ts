export class Node {
  value: any
  next: Node | null
  constructor(value?: any) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  head: Node | null
  tail: Node | null
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value: any) {
    if (!this.head) {
      this.head = new Node(value)
      this.tail = this.head
      return
    }
    let auxTail = this.tail
    while (auxTail!.next) {
      auxTail = auxTail!.next
    }
    auxTail!.next = new Node(value)
    this.tail = auxTail!.next
  }
  prepend(value: any) {
    if (!this.head) {
      this.head = new Node(value)
      this.tail = this.head
      return
    }
    const node = new Node(value)
    node.next = this.head
    this.head = node
  }
  lookup(value: any): Node | null {
    if (!this.head) return this.head
    let aux: Node | null = this.head
    while (aux) {
      if (aux.value === value) return aux
      aux = aux.next
    }
    return null
  }
  delete(value: any) {
    if (!this.head) return
    if (!this.head.next && this.head.value === value) {
      this.head = this.tail = null
      return
    }
    if (this.head.next === this.tail && this.head.value === value) {
      this.head.next = null
      this.head = this.tail
      return
    }
    let prev = this.head as Node
    let aux = prev.next as Node

    while (aux.next) {
      if (aux.value === value) {
        aux = aux.next
        prev.next = aux
        return
      }
      prev = aux
      aux = aux.next as Node
    }
    if (aux.value === value) {
      this.tail = prev
      prev.next = null
    }
  }
  insert(value: any, searchValue?: any) {
    if (!this.head || !searchValue) {
      this.append(value)
      return
    }
    const foundNode = this.lookup(searchValue)
    if (!foundNode) return
    if (!foundNode.next) {
      this.append(value)
    }
    const newNode = new Node(value)
    newNode.next = foundNode.next
    foundNode.next = newNode
    let aux = this.head as Node
    while (aux.next) {
      aux = aux.next
    }
    this.tail = aux
  }
}

export default LinkedList
