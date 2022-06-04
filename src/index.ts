import 'dotenv/config'
import LinkedList from './data-structures/linkedList'
import Queue from './data-structures/queue'
import reverseString from './utils/reverseString'

//applying stack
const word = 'pizza with pineapple'
const invertedWord = reverseString(word)
console.log('word -> ', word)
console.log('reversedWord -> ', invertedWord)

//applying queue
const printerQueue = new Queue()
printerQueue.enqueue({ jobName: 'test', pages: '10' })
printerQueue.enqueue({ jobName: 'test 2', pages: '1' })
printerQueue.enqueue({ jobName: 'test 3', pages: '5' })
console.log(printerQueue.peek())
while (printerQueue.head <= printerQueue.tail) {
  console.log('Printed job: ', printerQueue.dequeue())
}
console.log(printerQueue.dequeue())

//applying linkedList

const list = new LinkedList()
list.append('👋')
list.append('🌎')
list.append('👱')
list.append('👱👱')
list.delete('👱👱')
console.log(list)
list.prepend('🧑‍🤝‍🧑')
console.log(list)
list.insert('👱')
console.log(list)
list.insert('🍩', '🌎'), console.log(list.lookup('🌎'))
