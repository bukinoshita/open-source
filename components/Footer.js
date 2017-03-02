import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made by &nbsp;
        <a
          href="https://github.com/bukinoshita"
          className="footer__text--link"
          >Bu Kinoshita</a>
        &nbsp; and &nbsp;
        <a
          href="https://github.com/bukinoshita/open-source/graphs/contributors"
          className="footer__text--link"
          >these awesome contributors</a>
        &nbsp; 🎉
      </p>

      <style jsx>{`
        .footer {
          margin-top: 100px;
          padding-top: 50px;
          padding-bottom: 50px;
          background-color: rgba(0, 0, 0, .1);
        }

        .footer__text {
          color: #ffffff;
          text-align: center;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .footer__text--link {
          color: #241668;
          text-decoration: none;
          cursor: pointer;
          font-weight: 900;
        }

        .footer__text--link:hover {
          opacity: .75;
        }
      `}</style>
    </footer>
  )
}

export default Footer
