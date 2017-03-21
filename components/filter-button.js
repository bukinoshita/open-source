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
          color: #949ea7;
          border: 2px solid #949ea7;
          cursor: pointer;
          font-size: 12px;
          outline: none;
          flex-basis: calc(20% - 10px);
          text-align: left;
          position: relative;
          transition: 0.15s;
          border-radius: 4px;
        }

        .filter__btn--selected,
        .filter__btn:hover {
          color: #8943e5;
          border: 2px solid #8943e5;
          opacity: 1;
        }

        .filter__btn--selected .filter__btn--badge,
        .filter__btn:hover .filter__btn--badge {
          background: #8943e5;
          color: #ffffff;
        }

        .filter__btn--badge {
          margin-left: 10px;
          width: 25px;
          background: #949ea7;
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
            flex-basis: calc(50% - 5px);
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
