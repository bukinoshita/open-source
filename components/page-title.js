import React from 'react'

const PageTitle = () => (
  <div>
    <h1 className="page__title">Embrace Open Source</h1>
    <h2 className="page__subtitle">A list of GitHub issues to help beginners make their first pull request.</h2>

    <style jsx>{`
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
    `}</style>
  </div>
)

export default PageTitle
