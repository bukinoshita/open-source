import fetch from 'isomorphic-fetch'
import uniq from 'lodash/uniq'

import getMajorLanguage from '../utils/language'

export default async function getLanguages(issues) {
  const availableRepoUrls = uniq(issues.reduce((repoUrls, issue) => repoUrls.concat(issue.repository_url), []))
  const repoLanguagesStore = {}
  const languageFetchPromises = []

  availableRepoUrls.forEach(repoUrl => (
    languageFetchPromises.push(
      fetch(`${repoUrl}/languages?access_token=${process.env.GITHUB_TOKEN}`, {cache: 'default'})
        .then(res => res.json())
        .then(res => {
          repoLanguagesStore[repoUrl] = getMajorLanguage(res)
        })
    )
  ))

  await Promise.all(languageFetchPromises)

  return repoLanguagesStore
}
