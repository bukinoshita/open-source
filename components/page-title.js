import React from 'react'

const PageTitle = () => (
  <div>
    <h1 className="page__title">Embrace Open Source</h1>
    <h2 className="page__subtitle">A list of GitHub issues to help beginners make their first pull request.</h2>

    <style jsx>{`
      .page__title {
        color: #3d4752;
        font-weight: 400;
        text-align: center;
        font-size: 32px;
        margin-top: 100px;
        letter-spacing: 2px;
      }

      .page__subtitle {
        margin-bottom: 100px;
        color: #5a646f;
        font-weight: 300;
        text-align: center;
        font-size: 18px;
        margin-top: 15px;
      }
    `}</style>
  </div>
)

export default PageTitle
