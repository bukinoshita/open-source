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
          background: linear-gradient(45deg,#439be5,#8943e5);
        }

        .footer__text {
          color: #ffffff;
          text-align: center;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .footer__text--link {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          font-weight: 900;
          border-bottom: 2px solid #fff;
          padding-bottom: 5px;
          transition: .15s;
          opacity: .75;
          display: inline-block;
        }

        .footer__text--link:hover {
          transform: translateY(-4px);
          opacity: 1;
        }
      `}</style>
    </footer>
  )
}

export default Footer
