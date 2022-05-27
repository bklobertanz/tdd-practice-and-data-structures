class Stack {
  top: number
  elements: Record<number, any>
  constructor() {
    this.top = -1
    this.elements = {}
  }
  peek() {
    return this.elements[this.top]
  }
  push(value: any) {
    this.top++
    this.elements[this.top] = value
  }
  pop() {
    const poppedItem = this.elements[this.top]
    delete this.elements[this.top]
    this.top--
    return poppedItem
  }
}
export default Stack
