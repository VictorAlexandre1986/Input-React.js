import {useRef} from 'react'

const NaoControlado = () => {
    const input = useRef('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Input:', input.current.value)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={input} />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
    }

    export default NaoControlado
