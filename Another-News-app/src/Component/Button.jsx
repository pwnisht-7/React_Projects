/* eslint-disable react/prop-types */
const Button = (props) => {
    const {text,className} = props
  return <button
  className={className}
  >{text}</button>;
};

export default Button;
