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

const generatePollToPush = (key, question, answers) => {
  const optionsObj = answers.reduce((accum, curVal) => Object.assign(accum, { [curVal]: 0 }), {})
  const expandedOptionsObj = answers.reduce((accum, curVal, index) =>
    Object.assign(
      accum,
      {
        [`option${index}`]: {
          text: curVal,
        },
      },
    ), {})
  return {
    [key]: Object.assign(
      generateDefaultOptions(),
      { options: optionsObj },
      expandedOptionsObj(),
    ),
  }
}

export default {
  createPoll: async (question, answers) => {
    try {
      const key = await getKey()
      return await database.ref('/polls').update(generatePollToPush(key, question, answers))
    } catch (error) {
      return error
    }
  },
}
