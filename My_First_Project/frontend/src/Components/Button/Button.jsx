// import React from 'react'

const Button = (props) => {
    const {onClick, disabled, text,className} = props;
  return (
    <button
    onClick={onClick}
    className={className}
    disabled={disabled}
    >
     {text} 
    </button>
  )
}

export default Button
