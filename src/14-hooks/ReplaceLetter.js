import React, {useState, useEffect} from 'react'

function ReplaceLetter(props) {
    const [data, setData] = useState('')

    const replaceLetter = (event) => {
        const temp = event.target.value
        setData(temp.replace('a', 'b'))
    }

    useEffect(() => {
        console.log('Mounted')
        return () => { console.log('Dismounted') }
    }, [])

    useEffect(() => {
        console.log(props)
    })

    return (
        <input type='text' onChange={replaceLetter} value={data} />
    )
}

export default ReplaceLetter