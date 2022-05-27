import Stack from '../data-structures/stack'
describe('Stack', () => {
  it('should be defined', () => {
    const stack = new Stack()
    expect(stack.top).toBe(-1)
  })
  it.todo('should pop an item off the top')
  it.todo('should push an item to top')
})
