import LinkedList, { Node } from '../../data-structures/linkedList'

describe('LinkedList', () => {
  it('should be defined', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toEqual(new LinkedList().head)
    expect(linkedList.tail).toEqual(new LinkedList().tail)
    expect(linkedList.tail.next).toBe(null)
    expect(linkedList.head.next).toEqual(new Node())
  })
  it.todo('should append an item')
  it.todo('should prepend an item')
  it.todo('it should lookup an item')
  it.todo('it should insert an item')
  it.todo('it should delete an item')
})
