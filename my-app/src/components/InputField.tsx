import React from 'react'
import './styles.css'

const InputField = () => {
    return (
        <form className="input">
            <input type="input" placeholder="enter a task" className="input__box"/>
            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}

export default InputField
