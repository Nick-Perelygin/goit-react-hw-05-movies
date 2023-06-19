import Svg from './SearchSvg';
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

const Form = ({onSubmitForm}) => {
    const [changeValue, setChangeValue] = useState('')
    const [submitValue, setSubmitValue] = useSearchParams()

    const onChange = e => {
        setChangeValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(changeValue === '')
        {return setSubmitValue({})}
        setSubmitValue({query: changeValue})
        const value = submitValue.get("query") ?? ''
        onSubmitForm(value)
        e.target.reset();
    }

    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
        <button type="submit"style={{fontSize: '40px', marginRight: '40px', height: '50px'}}> 
        Search <Svg/>
        </button>
        <input type="text" onChange={onChange}
        style={{height: '42px', width: '400px', fontSize: '40px', paddingLeft: '10px'}}/>
    </form>
)}

export default Form