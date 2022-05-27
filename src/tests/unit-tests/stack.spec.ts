import Stack from '../../data-structures/stack'
describe('Stack', () => {
  let stack: Stack
  beforeEach(() => {
    stack = new Stack()
  })
  it('should be defined', () => {
    expect(stack.top).toBe(-1)
    expect(stack.elements).toEqual({})
  })
  it('should return the first item on the stack (peek)', () => {
    stack.push('🍕')
    const topItem = stack.peek()
    expect(topItem).toBe('🍕')
  })
  it('should push an item to top', () => {
    stack.push('🍕')
    expect(stack.top).toBe(0)
    expect(stack.peek()).toBe('🍕')
  })
  it('should pop an item off the top', () => {
    stack.push('🍕')
    stack.pop()
    expect(stack.top).toBe(-1)
    expect(stack.peek()).toBe(undefined)
  })
  it.todo('should implement an iterator')
})
