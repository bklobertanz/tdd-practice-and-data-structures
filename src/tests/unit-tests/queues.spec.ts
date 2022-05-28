import Queue from '../../data-structures/queue'

describe('Queue', () => {
  let queue: Queue
  beforeEach(() => {
    queue = new Queue()
  })
  it('should be defined', () => {
    expect(queue.head).toBe(0)
    expect(queue.tail).toBe(-1)
    expect(queue.items).toMatchObject({})
  })
  it('should enqueue an item', () => {
    queue.enqueue('🍍🍕')
    expect(queue.head).toBe(0)
    expect(queue.tail).toBe(0)
    expect(queue.items[0]).toBe('🍍🍕')
  })
  it('should dequeue an item', () => {
    queue.enqueue('🍍🍕')
    queue.dequeue()
    expect(queue.head).toBe(1)
    expect(queue.tail).toBe(0)
    expect(queue.items[0]).toBe(undefined)
  })
  it('should peek an item', () => {
    queue.enqueue('🍍🍕')
    const peekedItem = queue.peek()
    expect(peekedItem).toBe('🍍🍕')
  })
})
