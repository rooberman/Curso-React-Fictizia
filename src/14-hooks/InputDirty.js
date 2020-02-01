import React, {useState, useEffect} from 'react'

function InputDirty(props) {
    const [name, setName] = useState('')
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        if (name === 'zamarro') {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }, [name]) // Este useEffect se ejecuta cada vez que name cambie

    return (
        <form>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            {showError && <span>Error</span>}
        </form>
    )
}

export default InputDirty