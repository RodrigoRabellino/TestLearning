import React, { useRef } from 'react'

const App = () => {

    const entrada = useRef()

    const focus =()=> entrada.current.focus()
    const blur =()=> entrada.current.blur()

    return(
        <div>
            <input 
                type='text'
                placeholder='Holiwi'    
                ref={entrada}
            />
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
} 

export default App