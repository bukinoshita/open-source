import React, { Component } from 'react'
import 'isomorphic-fetch'
import Head from 'next/head'
import ListItem from '../components/ListItem';


export default class OpenSource extends Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/search/issues?q=language:javascript+state:open+label:first-timers-only&sort=created&order=desc')
    const json = await res.json()
    return { issues: json.items }
  }

  render () {
    const { issues } = this.props
    const issueList = issues.map(issue => (
      <ListItem key={issue.id} {...issue} />
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

          <ul className="list">
            {issueList}

            <li className="fakeit"/>
            <li className="fakeit"/>
          </ul>
        </div>

        <footer className="footer">
          <p className="footer__text">Made by <a href="https://twitter.com/bukinoshita" className="footer__text--link">Bu Kinoshita</a>. Check this project on <a href="https://github.com/bukinoshita/open-source" className="footer__text--link">Github</a> 🎉</p>
        </footer>

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

          .page__title {
            color: #fff;
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
            background-color: #fff;
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
            color: #fff;
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
