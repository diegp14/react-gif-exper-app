import { useState } from "react"


export const AddCategory = ({onNewValue}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleOnChange = ({target})=>{
        
        setInputValue( target.value );
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
       onNewValue( inputValue.trim() );
        setInputValue('');
        
        
    }

    return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar gifs" 
        value={inputValue}
        onChange={handleOnChange}/>
    </form>
    
)
}
