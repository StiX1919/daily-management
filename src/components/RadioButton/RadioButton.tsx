import './RadioButton.scss'
function RadioButton({name, value, onChange}) {

    return (
        <div className="radio-container">
            <input type="radio" name={name} value={value} onChange={onChange}/>
            <label>{value}</label>
        </div>
    )
}

export default RadioButton