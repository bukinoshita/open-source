import React from 'react'
import Category from './category'

const {
  string,
  arrayOf
} = React.PropTypes

const ListItem = props => {
  const categories = props.languages.map((language, index) => (
    <li key={`${language}-${index}`}>
      <Category language={language}/>
    </li>
  ))

  return (
    <li className="list-item">
      <a className="list-item-link" href={props.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="list-item__title">{props.title}</h3>

        <ul className="list-categories">{categories}</ul>
      </a>

      <style jsx>{`
        .list-item {
          background-color: #fff;
          flex-basis: 32%;
          margin-bottom: 25px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
          transition: .15s;
          min-height: 200px;
          overflow: hidden;
          border-radius: 4px;
          background: linear-gradient(45deg,#439be5,#8943e5);
        }

        .list-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 24px 0 rgba(60, 71, 81, .1)
        }

        .list-item-link {
          display: block;
          padding: 30px;
          text-decoration: none;
          height: 100%;
        }

        .list-categories {
          display: flex;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .list-item__title {
          color: #fff;
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
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
    </li>
  )
}

ListItem.propTypes = {
  title: string,
  html_url: string,
  languages: arrayOf(string)
}

export default ListItem
