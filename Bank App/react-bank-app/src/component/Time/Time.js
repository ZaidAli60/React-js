import React, { useState,} from 'react'

function Time() {
    let time =  new Date().toLocaleString([], { hour12: true}) 
    const [ctime, settime] = useState(time)
    const updateTime = () => {
        time = new Date().toLocaleString([], { hour12: true})
        settime(time);
    }
    setInterval(updateTime, 1000)
    return (
        <>
        <div className="bg-info text-white text-center">
            <p>{ctime}</p>
        </div>
        </>
    )
}

export default Time;