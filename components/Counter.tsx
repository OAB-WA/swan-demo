'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  title: string
  icon: string
  suffix?: string
}

export default function Counter({ end, title, icon, suffix = '' }: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="col-lg-3 col-sm-6" ref={ref}>
      <div className="counter-box">
        <div className="icon"><i className={icon}></i></div>
        <span className="counter">
          {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0'}
        </span>
        <h6 className="title">{title}</h6>
      </div>
    </div>
  )
}
