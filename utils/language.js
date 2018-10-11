import {flow, reduce, mapValues, filter, pickBy, keys} from 'lodash/fp'

import {find, union} from 'lodash'

export default function getMajorLanguage(languages) {
  const sumLinesOfCode = reduce((sum, linesOfCode) => sum + linesOfCode, 0)(
    languages,
  )

  const highUsageLanguages = flow(
    pickBy((value, key) => (value > 10000 ? key : null)),
    keys,
  )(languages)

  const mostPopularLanguage = flow(
    mapValues((value, key) => value / sumLinesOfCode),
    obj => [keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b), null)],
    filter(value => value),
  )(languages)

  return union([...highUsageLanguages, ...mostPopularLanguage])
}
