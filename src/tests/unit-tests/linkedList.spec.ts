import LinkedList, { Node } from '../../data-structures/linkedList'

describe('LinkedList', () => {
  let linkedList: LinkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })
  it('should be defined', () => {
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
  })
  it('should append a node into an empty list', () => {
    linkedList.append('🍕')

    expect(linkedList.head!).toBe(linkedList.tail!)
    expect(linkedList.head!.next).toBeNull()
    expect(linkedList.head!.value).toBe('🍕')
  })
  it('should append an item to a list with nodes', () => {
    linkedList.append('👋')
    linkedList.append('🌍')
    linkedList.append('💁')
    linkedList.append('💁💁')

    expect(linkedList.tail!.value).toBe('💁💁')
    expect(linkedList.tail!.next).toBeNull()
    expect(linkedList.head!.value).toBe('👋')
    expect(linkedList.head!.next!.value).toBe('🌍')
    expect(linkedList.head!.next!.next!.value).toBe('💁')
  })
  it('should prepend an item into an empty list', () => {
    linkedList.prepend('⭐')
    expect(linkedList.head!).toBe(linkedList.tail!)
    expect(linkedList.head!.value).toBe('⭐')
    expect(linkedList.head!.next).toBeNull()
  })
  it('should prepend an item to a list with nodes', () => {
    linkedList.prepend('⭐')
    linkedList.prepend('⭐⭐')
    linkedList.prepend('⭐⭐⭐')
    expect(linkedList.head!.value).toBe('⭐⭐⭐')
    expect(linkedList.head!.next!.value).toBe('⭐⭐')
    expect(linkedList.tail!.value).toBe('⭐')
    expect(linkedList.tail!.next).toBeNull()
  })
  it('should lookup an item', () => {
    let result: Node | null = linkedList.lookup('🍕')
    expect(result).toBeNull()
    linkedList.append('🍕')
    linkedList.append('🌜')
    result = linkedList.lookup('🌜')
    expect(result!.value).toBe('🌜')
    result = linkedList.lookup('🌞')
    expect(result!).toBeNull()
  })
  it('should delete a node in a list with one node', () => {
    linkedList.append('🍕')
    linkedList.delete('🍕')
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
  })
  it('should delete a node in a list with more than one node', () => {
    linkedList.append('🍕')
    linkedList.append('🍍')
    linkedList.append('💔')
    linkedList.delete('🍍')
    expect(linkedList.head!.value).toBe('🍕')
    expect(linkedList.tail!.value).toBe('💔')
    expect(linkedList.head!.next!.value).toBe('💔')
  })
  it('should delete a node at the end of the list', () => {
    linkedList.append('🍕')
    linkedList.append('🍍')
    linkedList.append('💓')
    linkedList.delete('💓')
    expect(linkedList.head!.value).toBe('🍕')
    expect(linkedList.tail!.value).toBe('🍍')
  })
  it('should delete the first appearing value, if there are two or more equal value nodes', () => {
    linkedList.append('💓')
    linkedList.append('💓')
    linkedList.append('💓')
    linkedList.delete('💓')
    expect(linkedList.head!.next!.next).toBeNull()
  })
  it('should insert a node into an empty list', () => {
    linkedList.insert('👋🌎')
    expect(linkedList.head!.value).toBe('👋🌎')
    expect(linkedList.head!.value).toBe(linkedList.tail!.value)
  })
  it('should insert a node to the end of the list, if no node value was given', () => {
    linkedList.insert('👋🌎')
    linkedList.insert('👌')
    expect(linkedList.tail!.value).toBe('👌')
  })
  it('should insert a node at the end of the list by a given node value', () => {
    linkedList.insert('👋🌎')
    linkedList.insert('🍕', '👋🌎')
    expect(linkedList.tail!.value).toBe('🍕')
  })
  it('should insert a node into a list with more than 2 nodes by and after a given node value', () => {
    linkedList.insert('👋🌎')
    linkedList.insert('🍕')
    linkedList.insert('🍍', '👋🌎')
    expect(linkedList.tail!.value).toBe('🍕')
    expect(linkedList.head!.next!.value).toBe('🍍')
  })
})
