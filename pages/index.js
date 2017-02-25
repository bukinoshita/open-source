import '../env'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import Head from 'next/head'
import ListItem from '../components/ListItem'
import FilterButton from '../components/FilterButton'
import Footer from '../components/Footer'
import getRepoLanguagesStoreFromIssues from '../services/getRepoLanguagesStoreFromIssues'
import flatten from 'lodash/flatten'
import uniq from 'lodash/uniq'
import includes from 'lodash/includes'
import set from 'lodash/set'
const { arrayOf, object, shape, number } = React.PropTypes

const clearLanguageFilterButtonText = 'All languages'

export default class OpenSource extends Component {
  static async getInitialProps () {
    const getIssuesRes = await fetch(
      `https://api.github.com/search/issues?q=state:open+label:first-timers-only&sort=created&order=desc&per_page=100&access_token=${process.env.GITHUB_TOKEN}`,
      {cache: 'default'}
    )
    const issuesResJson = await getIssuesRes.json()
    const issues = issuesResJson.items
    const repoLanguagesStore = await getRepoLanguagesStoreFromIssues(issues)
    const languages = uniq(flatten(Object.values(repoLanguagesStore)))
    const languageCountStore = languages.reduce(
      (languageCountStore, language) => set(languageCountStore, language, 0),
      { [clearLanguageFilterButtonText]: issues.length }
    )

    issues.forEach(issue => {
      issue.languages = repoLanguagesStore[issue.repository_url]
      issue.languages.forEach(language => languageCountStore[language] += 1)
    })

    return { issues, languageCountStore }
  }

  constructor(props) {
    super(props)

    this.state = { languageFilter: clearLanguageFilterButtonText }
  }

  render () {
    const { issues, languageCountStore } = this.props
    const { languageFilter }  = this.state
    let issueList

    if (languageFilter === clearLanguageFilterButtonText) {
      issueList = issues
    } else {
      issueList = issues.filter(issue => issue.languages.includes(languageFilter))
    }

    issueList = issueList.map(issue => (
      <ListItem key={issue.id} {...issue} onCategoryFilter={(languageFilter) => this.setState({ languageFilter })} />
    ))

    const languageFilterButtons = Object.keys(languageCountStore).map((language) => (
      <FilterButton
        value={language}
        secondaryText={this.props.languageCountStore[language]}
        key={`${language}-filter-button`}
        onFilter={(languageFilter) => this.setState({ languageFilter })}
        currentFilter={this.state.languageFilter}
      />
    ))

    return (
      <div>
        <Head>
          <title>Open Source — It's never too late to join the party 🎉🎉</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta charSet="utf-8"/>
          <meta name="description" content="Open Source is a list of GitHub issues to help beginners make their first pull request."/>
          <meta name="keywords" content="github, open source, code, git, contributions"/>
        </Head>

        <div className="row">
          <h1 className="page__title">Embrace Open Source</h1>
          <h2 className="page__subtitle">A list of GitHub issues to help beginners make their first pull request.</h2>

          <div className="button__container">
            {languageFilterButtons}
          </div>

          <ul className="list">
            {issueList}

            <li className="fakeit"/>
            <li className="fakeit"/>
          </ul>
        </div>

        <Footer />

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background: #5f357d;
            background: -webkit-radial-gradient(circle farthest-corner at right bottom,#ffd08a 0,#ffa376 28%,#d26578 52%,#682a84 79%,#241668 100%);
            background: radial-gradient(circle farthest-corner at right bottom,#ffd08a 0,#ffa376 28%,#d26578 52%,#682a84 79%,#241668 100%);
            font-family: 'SF UI Display', 'Helvetica Neue', 'Helvetica';
          }

          li {
            list-style: none;
          }

          .row {
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding: 15px;
          }

          .button__container {
            background-color: #ffffff;
            margin-bottom: 50px;
            padding-left: 15px;
            padding-top: 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .filter__button {
            margin-bottom: 15px;
            margin-right: 15px;
            padding: 10px;
            background-color: #ffffff;
            opacity: 0.85;
            color: #A9A9A9;
            border: 2px solid #A9A9A9;
            cursor: pointer;
            font-size: 12px;
            outline: none;
          }

          .filter__button:hover, .filter__button.selected {
            transition: 0.3s;
            color: #885ead;
            border: 2px solid #885ead;
            opacity: 1;
          }

          .secondary__text {
            margin-left: 10px;
            width: 30px;
            background: #A9A9A9;
            display: inline-block;
            padding: 3px;
            font-size: 10px;
            color: #ececec;
            border-radius: 10px;
          }

          .filter__button:hover .secondary__text, .filter__button.selected .secondary__text {
            background: #885ead;
            color: #ffffff;
          }

          .page__title {
            color: #ffffff;
            font-weight: 100;
            text-align: center;
            font-size: 30px;
            margin-top: 100px;
          }

          .page__subtitle {
            margin-bottom: 100px;
            color: rgba(255, 255, 255, .75);
            font-weight: 100;
            text-align: center;
            font-size: 18px;
            margin-top: 5px;
          }

          .list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .list-item {
            background-color: #ffffff;
            flex-basis: 32%;
            margin-bottom: 25px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
            transition: .15s;
            min-height: 200px;
            max-height: 200px;
            overflow: hidden;
          }

          .fakeit {
            background-color: transparent;
            flex-basis: 32%;
            overflow: hidden;
          }

          .list-item:hover {
            transform: translateY(-4px);
          }

          .list-item-link {
            display: block;
            padding: 30px;
            text-decoration: none;
          }

          .list-item__title {
            color: #292E31;
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
          }

          .list-item__description {
            color: #6F7C82;
            font-size: 16px;
            line-height: 26px;
            font-weight: 300;
            margin-top: 10px;
            width: 100%;
            word-break: break-word;
          }

          .footer {
            margin-bottom: 20px;
            margin-top: 100px;
          }

          .footer__text {
            color: #ffffff;
            text-align: center;
            font-size: 14px;
          }

          .footer__text--link {
            font-weight: 500;
            color: #241668;
            text-decoration: none;
            cursor: pointer;
          }

          .footer__text--link:hover {
            opacity: .75;
          }

          @media (max-width: 768px) {
            .list-item {
              flex-basis: 48%;
            }
          }

          @media (max-width: 500px) {
            .list-item {
              flex-basis: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

OpenSource.propTypes = {
  issues: arrayOf(object),
  languageCountStore: shape({ language: number })
}
