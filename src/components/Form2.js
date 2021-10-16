import React, { useState} from 'react'

export default function Form2() {
    const [state, setState] = useState("")
    return (
        <div>
            <input onChange={(event) => setState(event.target.value) } />
            {state}
        </div>
    )
}
