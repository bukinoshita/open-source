import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {
  flatten,
  uniq,
  set
} from 'lodash'
import env from '../env' // eslint-disable-line import/no-unresolved
import Meta from './../components/meta'
import PageTitle from './../components/page-title'
import List from './../components/list'
import FilterButton from './../components/filter-button'
import Footer from './../components/footer'
import getLanguages from './../services/get-languages'

const clearLanguageFilterButtonText = 'All languages'
const {
  arrayOf,
  object,
  shape,
  number
} = React.PropTypes

export default class OpenSource extends Component {
  static async getInitialProps() {
    const getIssuesRes = await fetch(
      `https://api.github.com/search/issues?q=state:open+label:first-timers-only&sort=created&order=desc&per_page=100&access_token=${process.env.GITHUB_TOKEN}`,
      {cache: 'default'}
    )
    const issuesResJson = await getIssuesRes.json()
    const issues = issuesResJson.items
    const repoLanguagesStore = await getLanguages(issues)
    const languages = uniq(flatten(Object.values(repoLanguagesStore)))
    const languageCountStore = languages.reduce(
      (languageCountStore, language) => set(languageCountStore, language, 0),
      {[clearLanguageFilterButtonText]: issues.length}
    )

    issues.forEach(issue => {
      issue.languages = repoLanguagesStore[issue.repository_url]
      issue.languages.forEach(language => languageCountStore[language] += 1)
    })

    return {issues, languageCountStore}
  }

  constructor(props) {
    super(props)

    this.handleCollapseFilter = this.handleCollapseFilter.bind(this)
    this.state = {
      languageFilter: clearLanguageFilterButtonText,
      collapsed: false
    }
  }

  handleCollapseFilter() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const {issues, languageCountStore} = this.props
    const {languageFilter, collapsed} = this.state
    const isCollapsed = collapsed ? 'is-open' : ''
    let issueList

    if (languageFilter === clearLanguageFilterButtonText) {
      issueList = issues
    } else {
      issueList = issues.filter(issue => issue.languages.includes(languageFilter))
    }

    const languageFilterButtons = Object.keys(languageCountStore)
      .sort((languageA, languageB) => (
        languageCountStore[languageB] - languageCountStore[languageA]
      ))
      .map(language => (
        <FilterButton
          value={language}
          secondaryText={languageCountStore[language]}
          key={`${language}-filter-button`}
          onFilter={languageFilter => this.setState({languageFilter})}
          currentFilter={this.state.languageFilter}
          />
      ))

    return (
      <div>
        <Meta/>
        <div className="row">
          <PageTitle/>
        </div>

        <div className="row">
          <div className={`button__container ${isCollapsed}`}>
            <div className="button__wrapper">
              <div className="button__container--arrow">
                <svg onClick={this.handleCollapseFilter} className="button__container--icon" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100">
                  <polygon points="53.681,60.497 53.681,60.497 75.175,39.001 71.014,34.843 49.519,56.337 29.006,35.823 24.846,39.982   49.519,64.656 "/>
                </svg>
              </div>
              {languageFilterButtons}
              <div className="filter-button--fake"/>
              <div className="filter-button--fake"/>
              <div className="filter-button--fake"/>
              <div className="filter-button--fake"/>
            </div>
          </div>

          <List list={issueList}/>
        </div>

        <Footer/>

        <style jsx global>{`
          .row {
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding: 15px;
          }

          .button__container {
            background-color: #ffffff;
            margin-bottom: 50px;
            max-height: 100px;
            overflow: hidden;
            position: relative;
            transition: max-height 300ms cubic-bezier(0, .6, .6, 1);
          }

          .button__container.is-open {
            max-height: 999px;
            transition: max-height 400ms ease-in;
          }

          .button__wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 15px 15px 30px 15px;
          }

          .button__container--arrow {
            width: 100%;
            background-color: #fff;
            z-index: 10;
            position: absolute;
            bottom: 0;
            right: 0;
            text-align: center;
            padding-top: 10px;
          }

          .button__container--icon {
            cursor: pointer;
            height: 30px;
            width: 30px;
            vertical-align: middle;
          }

          .filter-button--fake {
            flex-basis: calc(20% - 10px);
          }
        `}</style>
      </div>
    )
  }
}

OpenSource.propTypes = {
  issues: arrayOf(object),
  languageCountStore: shape({language: number})
}
