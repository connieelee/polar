import { database } from '../../../firebase'

const generateRandomNum = () =>
  Math.floor(Math.random() * 4) + 1

export const generateHash = () =>
  parseInt([1, 1, 1, 1]
    .map(() => generateRandomNum().toString())
    .join(''),
  10,
  )

export const objectNotEmpty = obj =>
  !!Object.keys(obj).length

const recursiveGenerateHash = (usedNums) => {
  const hash = generateHash()
  return usedNums.has(hash) ? recursiveGenerateHash(usedNums) : hash
}

export const getHash = async () => {
  const pollSnap = await database.ref('/polls').once('value')
  const pollVal = pollSnap.val()
  const usedNums = new Set(Object.keys(pollVal).map(str => parseInt(str, 10)))
  return recursiveGenerateHash(usedNums)
}

export default {
  createPoll: async () => {
    try {
      const hash = await getHash()
      const toPush = {
        [hash]: 'sad',
      }
      return await database.ref('/polls').update(toPush)
    } catch (error) {
      return error
    }
  },
}
