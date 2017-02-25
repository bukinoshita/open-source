import React from 'react'
const { string, number, func, oneOfType } = React.PropTypes

const FilterButton = (props) => {
  const conditionalSelectedClass = props.currentFilter === props.value ? 'selected' : ''

  return (
    <button onClick={() => props.onFilter(props.value)} className={`filter__button ${conditionalSelectedClass}`}>
      <span>{props.value}</span>
      <span className='secondary__text'>{props.secondaryText}</span>
    </button>
  )
}

FilterButton.propTypes = {
  value: string,
  secondaryText: oneOfType([string, number]),
  onFilter: func,
  currentFilter: string,
}

export default FilterButton
