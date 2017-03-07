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
        text-transform: uppercase;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, .2);
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 10px;
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
