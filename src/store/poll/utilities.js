import { database } from '../../../firebase'

const generateRandomNum = () =>
  Math.floor(Math.random() * 4) + 1

export const generateKey = () =>
  [1, 1, 1, 1]
    .map(() => generateRandomNum().toString())
    .join('')

export const objectNotEmpty = obj =>
  !!Object.keys(obj).length

const recursiveGenerateKey = (usedNums) => {
  const key = generateKey()
  return usedNums.has(key) ? recursiveGenerateKey(usedNums) : key
}

export const getKey = async () => {
  const pollSnap = await database.ref('/polls').once('value')
  const pollVal = pollSnap.val()
  const usedNums = new Set(Object.keys(pollVal))
  return recursiveGenerateKey(usedNums)
}

const convertMinutesToMS = minutes =>
  minutes * 60 * 1000

const generateDefaultOptions = (delayMin = 15, open = false) => ({
  endTime: Date.now() + convertMinutesToMS(delayMin),
  open,
})

export default {
  createPoll: async () => {
    try {
      const key = await getKey()
      const toPush = {
        [key]: generateDefaultOptions(),
      }
      return await database.ref('/polls').update(toPush)
    } catch (error) {
      return error
    }
  },
  subscribeToPoll: async (key) => {

  },
}
