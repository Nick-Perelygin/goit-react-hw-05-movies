import Svg from './SearchSvg';
import { useState } from "react";

const Form = ({onSubmitForm}) => {
    const [changeValue, setChangeValue] = useState('')

    const onChange = e => {
        const change = e.target.value
        setChangeValue(change)
    }
    
    const onSubmit = e => {
        e.preventDefault()
        if(changeValue.trim() === '')
            {alert('Please input valid text for search')
            setChangeValue('')
            e.target.reset()}
        onSubmitForm(changeValue)
        setChangeValue('')
        e.target.reset();
    }

    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
            <button type="submit"style={{fontSize: '40px', marginRight: '40px', height: '50px'}}> 
                Search <Svg/>
            </button>
            <input type="text" onChange={onChange} id='text'
                style={{height: '42px', width: '400px', fontSize: '40px', paddingLeft: '10px'}}
            />
        </form>
    )
}

export default Form