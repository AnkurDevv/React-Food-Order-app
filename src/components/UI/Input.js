import classes from './Input.module.css'
import React from 'react';

const Input = React.forwardRef((props, ref) => {
  let isInputNumber =  props.input.type == 'number';
  let inputClass = isInputNumber ? classes.inputNumber: '';
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input to ensure that all the necessary props are being added */}
      <input ref={ref} {...props.input} className={inputClass} />
    </div>
  )
});

export default Input;