import React, {useState, useEffect} from 'react'

function CallApi(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(posts => setData(posts))
    }, [])

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default CallApi