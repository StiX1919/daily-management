function RadioButton({name, value, onChange}) {

    return (
        <div>
            <input type="radio" name={name} value={value} onChange={onChange}/>
            <label>{value}</label>
        </div>
    )
}

export default RadioButton