import React, {useState, lazy, Suspense} from 'react'
const ReplaceLetter = lazy(() => import('../14-hooks/ReplaceLetter'))

function Lazy() {
    const [show, setShow] = useState(false)

    // ¿Como comprobamos que este componente funcione y cargue ReplaceLetter de forma diferida?

    return (
        <>
            <button onClick={() => setShow(!show)}>toggle</button>
            {show && 
                <Suspense fallback={<div>Loading...</div>}>
                    <ReplaceLetter />
                </Suspense>
            }
        </>
    )
}

export default Lazy