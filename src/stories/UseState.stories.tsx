import {useMemo, useState} from "react";

export default  {
    title: 'useState demo'
}

function generateData() {
//difficult counting
    console.log('generatedata')
    return 43231234
}


export const Example1 = () => {
    console.log('Example')

    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(0)

    return <>
    <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
        {counter}
    </>
}