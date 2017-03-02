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
      <a className="list-item-link" href={props.html_url}>
        <ul className="list-categories">{categories}</ul>

        <h3 className="list-item__title">{props.title}</h3>
      </a>

      <style jsx>{`
        .list-item {
          background-color: #fff;
          flex-basis: 32%;
          margin-bottom: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
          transition: .15s;
          min-height: 200px;
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

        .list-categories {
          display: flex;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .list-item__title {
          color: #292E31;
          font-size: 16px;
          line-height: 22px;
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
