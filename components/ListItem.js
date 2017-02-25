import React from 'react'
import Truncate from 'react-truncate'
const { string, number, shape, arrayOf, func } = React.PropTypes

const ListItem = (props) => (
  <li className="list-item">
    <a className="list-item-link" href={props.html_url}>
      <div className="list-item-category-container">
        {
          props.languages.map((language) => (
            <span key={`${language}-list-item`} className='list-item-category'>
              {language}
            </span>
          ))
        }
      </div>

      <h3 className="list-item__title">
        <Truncate lines={2}>{props.title}</Truncate>
      </h3>
      <p className="list-item__description">
        <Truncate lines={3}>{props.body || 'No description on this issue'}</Truncate>
      </p>
    </a>
  </li>
)

ListItem.propTypes = {
  title: string,
  body: string,
  html_url: string,
  languages: arrayOf(string),
  onCategoryFilter: func,
}

export default ListItem
