import React from 'react'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Open Source — It's never too late to join the party 🎉🎉</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="utf-8"/>
      <meta name="description" content="Open Source is a list of GitHub issues to help beginners make their first pull request."/>
      <meta name="keywords" content="github, open source, code, git, contributions"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@bukinoshita"/>
      <meta name="twitter:creator" content="@bukinoshia"/>
      <meta name="twitter:title" content="Open Source"/>
      <meta name="twitter:description" content="Open Source is a list of GitHub issues to help beginners make their first pull request."/>
      <meta property="twitter:image:src" content="https://open-source.now.sh/static/oss.png"/>

      <meta property="og:url" content="https://open-source.now.sh"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Open Source"/>
      <meta property="og:image" content="static/oss.png"/>
      <meta property="og:description" content="Open Source is a list of GitHub issues to help beginners make their first pull request."/>
      <meta property="og:site_name" content="Open Source"/>
    </Head>

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

      a {
        text-decoration: none;
      }

      li {
        list-style: none;
      }
    `}</style>
  </div>
)
