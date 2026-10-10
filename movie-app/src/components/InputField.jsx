import '../index.css'

function InputField (props) {
  return (
    <div className="input-form">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
          type={props.type} 
          name={props.name} 
          id={props.name} 
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
    </div>
  )
}
export default InputField