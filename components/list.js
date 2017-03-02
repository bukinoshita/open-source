import React from 'react'
import ListItem from './list-item'

const {
  arrayOf,
  object
} = React.PropTypes

const List = props => {
  const list = props.list.map(issue => (
    <ListItem key={issue.id} {...issue} onCategoryFilter={languageFilter => this.setState({languageFilter})}/>
  ))

  return (
    <ul className="list">
      {list}

      <li className="list--fake"/>
      <li className="list--fake"/>

      <style jsx>{`
        .list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .list--fake {
          background-color: transparent;
          flex-basis: 32%;
          overflow: hidden;
        }
      `}</style>
    </ul>
  )
}

List.propTypes = {
  list: arrayOf(object)
}

export default List
