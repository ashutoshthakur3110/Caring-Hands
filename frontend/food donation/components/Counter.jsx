import "../css/Idea.css"
import React, { useEffect, useRef, useState } from 'react'

const Counter = ({ target }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Scroll check using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 } // 50% visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [hasAnimated])

  // Run counter only after visible
  useEffect(() => {
    if (!hasAnimated) return

    let start = 0
    const end = parseInt(target)
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
    <div ref={ref} className="counter-box">
      {count}
    </div>
  )
}

export default Counter
