import "../css/Idea.css"
import React, { useEffect, useRef, useState } from 'react'

const VolunteerCounter = ({ target }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Trigger only when visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [hasAnimated])

  // Counter Animation logic
  useEffect(() => {
    if (!hasAnimated) return

    let start = 0
    const end = parseInt(target)
    if (start === end) return

    const duration = 4000
    const incrementTime = 30
    const step = Math.ceil(end / (duration / incrementTime))

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [hasAnimated, target])

  return (
    <div ref={ref} className="VolunteerCounter">
      {count}
    </div>
  )
}

export default VolunteerCounter
