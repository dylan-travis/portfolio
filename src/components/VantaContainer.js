import React, { useState, useEffect, useRef } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min'


export default function VantaContainer() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} style={{ minHeight: "200px" }} className="hero">
        <h1 className="dylanText">Dylan Travis</h1>
    </div>
}
