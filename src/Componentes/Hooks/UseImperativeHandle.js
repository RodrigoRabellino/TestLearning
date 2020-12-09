import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'



const FancyInput = forwardRef((props, ref) =>{
    const [text, setText] = useState('***')
    const entrada = useRef()

    useImperativeHandle(ref, () => ({
        dispatchAlert: () =>{
            alert('holiwi')
        },

        setParragraph: (message) =>{
            setText(message)
        }, 

        focusInput: () =>{
            entrada.current.focus()
        }

    }))
    return(
        <div>
            <p>{text}</p>
            <input type='text' ref={entrada}/>
        </div>
    )

})

const App =() =>{

    const fancyInput = useRef()

    const handleClick =() => {
        fancyInput.current.focusInput()
    }

    return(
        <div style= {{background: 'red'}}>
            
            <FancyInput ref={fancyInput}/>
            <button onClick= {handleClick}>dispatch</button>
        </div>
    )
}

export default App