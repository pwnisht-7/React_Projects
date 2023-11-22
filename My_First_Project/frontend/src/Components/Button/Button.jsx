// import React from 'react'

const Button = (props) => {
    const {onClick, disabled, text,className ,icon} = props;
  return (
    <button
    onClick={onClick}
    className={className}
    disabled={disabled}
    >
     {text} {icon}
    </button>
  )
}

export default Button;
