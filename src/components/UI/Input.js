import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input to ensure that all the necessary props are being added */}
      <input {...props.input} />
    </div>
  );
}

export default Input;