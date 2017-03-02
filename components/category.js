import React from 'react'

const {
  string
} = React.PropTypes

const Category = props => (
  <span className="list-categories__category">
    {props.language}

    <style jsx>{`
      .list-categories__category {
        color: white;
        background-color: #551A8B;
        font-size: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        padding: 8px;
        display: inline-block;
      }
    `}</style>
  </span>
)

Category.propTypes = {
  language: string
}

export default Category
