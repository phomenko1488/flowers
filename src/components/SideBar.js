import React, {useEffect, useRef, useState} from 'react'

const SideBar = ({sideBarInfo, setSideBarInfo}) => {
    const greyDiv = useRef(null)
    const redDiv = useRef(null)

    useEffect(() => {
        setSideBarInfo(() => ({...sideBarInfo, secondElem: sideBarInfo.secondElem + 1}))
    }, [sideBarInfo.firstElem])
    useEffect(() => {

        redDiv.current.style.backgroundColor = '#' + getRandomInt(999999)
    }, [greyDiv.current])
    const [num, setNum] = useState(1)
    const [mult, setMult] = useState(2)
    const result = num * mult
    return <div>
        <div>first : {sideBarInfo.firstElem}</div>
        <div>second : {sideBarInfo.secondElem}</div>
        <div ref={greyDiv}>Grey</div>
        <div ref={redDiv}>Red</div>
        <div>Result : {result}</div>
        <button onClick={() => setNum(num + 1)}>Add num</button>
        <button onClick={() => setMult(mult + 10)}>Add Mult</button>
        <button
            onClick={() => setSideBarInfo(prev =>
                ({...prev, firstElem: prev.firstElem + '1'})
            )}>Add
        </button>
        <button
            onClick={() => greyDiv.current.style.backgroundColor = 'grey'}>Make grey
        </button>
    </div>
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default SideBar