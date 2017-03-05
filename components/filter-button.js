import React from 'react'

const {
  string,
  number,
  func,
  oneOfType
} = React.PropTypes

const FilterButton = props => {
  const filterBtnSelected = props.currentFilter === props.value ? 'filter__btn--selected' : ''

  return (
    <button onClick={() => props.onFilter(props.value)} className={`filter__btn ${filterBtnSelected}`}>
      <span>{props.value}</span>
      <span className="filter__btn--badge">{props.secondaryText}</span>

      <style jsx>{`
        .filter__btn {
          margin-bottom: 15px;
          padding: 10px;
          background-color: #ffffff;
          opacity: 0.85;
          color: #A9A9A9;
          border: 2px solid #A9A9A9;
          cursor: pointer;
          font-size: 12px;
          outline: none;
          flex-basis: calc(20% - 10px);
          text-align: left;
          position: relative;
          transition: 0.15s;
        }

        .filter__btn--selected,
        .filter__btn:hover {
          color: #551A8B;
          border: 2px solid #551A8B;
          opacity: 1;
        }

        .filter__btn--selected .filter__btn--badge,
        .filter__btn:hover .filter__btn--badge {
          background: #551A8B;
          color: #ffffff;
        }

        .filter__btn--badge {
          margin-left: 10px;
          width: 25px;
          background: #A9A9A9;
          display: inline-block;
          padding: 3px;
          font-size: 10px;
          color: #ececec;
          border-radius: 10px;
          position: absolute;
          right: 10px;
          text-align: center;
        }

        @media (max-width: 500px) {
          .filter__btn {
            min-width: calc(50% - 5px);
          }
        }
      `}</style>
    </button>
  )
}

FilterButton.propTypes = {
  value: string,
  secondaryText: oneOfType([string, number]),
  onFilter: func,
  currentFilter: string
}

export default FilterButton
