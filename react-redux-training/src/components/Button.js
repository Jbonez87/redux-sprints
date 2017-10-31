import React from 'react'

export default props => (
  <button
    onClick={props.onClick}
    className={props.className}
  >
    {props.text}
  </button>
)