import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

export const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);
  return myRef;
}