import React, {useState, useEffect} from 'react'

export const useCallApi = function(url) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(responseData => setData(responseData))
    }, [])

    return data;
}