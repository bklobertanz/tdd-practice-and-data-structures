import Stack from '../data-structures/stack'

function reverseString(word: string): string {
  const wordStack = new Stack()
  const wordArray = word.split('')
  const invertedWordArray: string[] = []
  for (let letter of wordArray) {
    wordStack.push(letter)
  }
  while (wordStack.top !== -1) {
    invertedWordArray.push(wordStack.pop())
  }
  return invertedWordArray.join('')
}
export default reverseString
