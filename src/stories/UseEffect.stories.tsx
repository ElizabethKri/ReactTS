import {useEffect, useMemo, useState} from "react";

export default  {
    title: 'useEffect demo'
}




export const SetTimeOut = () => {
    console.log('Example')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    //при каждом рендере компоненты
    useEffect(()=> {
        setInterval(() => {
            console.log('SetTInterval')
            console.log('tick: ' + counter)
            setCounter((prevState)=>  prevState + 1)
        }, 1000)
    }, [])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(prevState => prevState + 1)}>+</button>
    </>
}

export const SimpleExample1 = () => {
    console.log('Example')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    //при каждом рендере компоненты
    useEffect(()=> {
        console.log('useEffect')
        document.title = counter.toString()
    })

    //запускается только при первом ренедере
    useEffect(()=> {
        console.log('useEffect')
        document.title = counter.toString()
    }, [])

    //срабатывает в первый раз, когда сщгтеук поменялся
    useEffect(()=> {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(prevState => prevState + 1)}>+</button>
    </>
}