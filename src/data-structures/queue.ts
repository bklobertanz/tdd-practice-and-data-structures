class Queue {
  head: number
  tail: number
  items: Record<number, any>
  constructor() {
    this.head = 0
    this.tail = -1
    this.items = {}
  }
  enqueue(item: any) {
    this.tail++
    this.items[this.tail] = item
  }
  dequeue() {
    const dequeuedItem = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return dequeuedItem
  }
  peek() {
    return this.items[this.head]
  }
}
export default Queue
