'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface CounterProps {
  end: number
  title: string
  icon: IconDefinition
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
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className="counter">
          {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0'}
        </span>
        <h6 className="title">{title}</h6>
      </div>
    </div>
  )
}
