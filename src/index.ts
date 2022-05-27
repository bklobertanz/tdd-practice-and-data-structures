import 'dotenv/config'

import reverseString from './utils/reverseString'

const word = 'pizza with pineapple'
const invertedWord = reverseString(word)
console.log('word -> ', word)
console.log('reversedWord -> ', invertedWord)
